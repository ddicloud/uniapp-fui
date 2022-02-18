// router.js
import {RouterMount,createRouter} from 'uni-simple-router';

import modules from './router'
console.log('初始化路由参数',modules)
import iGlobal from './common/global.js'	//引入 global.js
import fui from './common/httpRequest.js'

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	h5:{
		paramsToQuery: true,
		vueRouterDev: false,
		vueNext: false,
		mode: 'hash',
		base: '/',
		linkActiveClass: 'router-link-active',
		linkExactActiveClass: 'router-link-exact-active',
		scrollBehavior: (to, from, savedPostion) => ({ x: 0, y: 0 }),
		fallback: true
	},
	APP: {
		 //设置等待页面背景色
		loddingPageStyle:()=>JSON.parse('{"backgroundColor":"#96DBF3"}'),   
		//通过启动页生命钩子绘制加载gif
		loddingPageHook:(view)=>{  
			view.show();
			view.drawBitmap('/static/wait.gif', {}, {
				top: 'auto',
				left: 'auto',
				width: '200px',
				height: '200px'
			})
		},
		launchedHook:()=>{
			plus.navigator.closeSplashscreen();
			console.log('加载完成啦')
		}
	},
	routes: [
		...ROUTES,
		// ...modules,
		{
		  path: '*',
		  redirect:(to)=>{
			  return {name:'404'}
		  }
		},
	],
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log('全局路由前置守卫',to, from.query, next,uni.getStorageSync('inviteCode'))
	console.log(to.name,fui.isLogin())
	
	// 页面级拦截
	if(to.meta.needLogin && !fui.isLogin()){
		// #ifndef MP
		next({
			name: 'login',
			NAVTYPE: 'push'
		});
		// #endif
		return false
	} 
	
	
	if(!iGlobal.isUndefined(from.query.member_id) && !iGlobal.isNull(from.query.member_id) && from.query.member_id != ''){
		  uni.setStorageSync('inviteCode',from.query.member_id)
	}
	
	console.log('全局路由前置守卫code缓存数据',uni.getStorageSync('inviteCode'))
	
	if((to.name == 'register' || to.name == 'login' || to.name == 'forgetPwd' ) && fui.isLogin()){
		  next({
		  	name: 'index'
		  });
	}
	// #ifdef H5
	let that = this;
	if(iGlobal.isWeixin()){
		let code  = fui.getQueryString('code')
		let state = fui.getQueryString('state')
		
		console.log('有code',code,state)
		if(state && code && to.name != 'auth' && !fui.isLogin()){
			next({
				name: 'auth',
				params: {
					msg: '我拦截了tab5并重定向到了路由4页面上',
					code: code,
					state:state,
					inviteCode:uni.getStorageSync('inviteCode')
				},
				NAVTYPE: 'push'
			});
		}
	} 
	// #endif  
	next()
});
// 全局路由后置守卫
router.afterEach((to, from) => {
    console.log('跳转结束',[...ROUTES])
})

export {
	router,
	RouterMount
}