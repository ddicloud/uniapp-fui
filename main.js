import Vue from 'vue'
import store from './store'
import App from './App'
import iconfont from './components/iconfont/iconfont.vue'
import iGlobal from './common/global.js'	//引入 global.js
import tabBar from './components/tabbar.vue' 
import painter from './components/painter/index.vue' 
import fui from './common/httpRequest'

// import router from './router'
// import { RouterMount } from 'uni-simple-router'

import {router,RouterMount} from './router.js'  //路径换成自己的
Vue.use(router)
import UniSocket from "common/libs/socket/uni.socket.js"

const socket = new UniSocket({
		url: "ws://47.103.209.122:8283"
	});

// #ifdef H5
window.QQmap = null;
// #endif
// #ifndef MP-TOUTIAO
//网络监听
setTimeout(() => {
	uni.onNetworkStatusChange(function(res) {
		//console.log(res.networkType);
		store.commit("networkChange", {
			isConnected: res.isConnected
		})
	});
}, 100)
// #endif
Vue.prototype.fui = fui
// Vue.prototype.UniSocket = socket
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
Vue.prototype.$store = store
Vue.component('painter', painter)
Vue.component('tab-bar', tabBar)
// Vue.component('cu-custom',cuCustom) //全局导航组件
Vue.component('iconfont',iconfont) //全局图标组件
Vue.prototype.iGlobal=iGlobal	//将global.js挂载至Vue.prototype 实现全局调用
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'



// 拦截器
uni.addInterceptor('request', {
	invoke(args) {
		console.log('请求前',args,fui.checkCacheTime('access_token'),fui.getToken());
		if(args.header.isToken){
		 	let  accessToken = fui.getToken();		    
			let t= fui.checkCacheTime('access_token')			
			if(t){
				fui.loginOut()
				fui.toLogin(402)
				return false
			}
			// 验证token
			if(!accessToken){
				fui.toLogin(402)
				return false
			}
		}
	},
	success(res) {
		// 请求成功后，修改code值为1
		// args.data.code = 1
		console.log('请求成功');
	},
	fail(err) {
		console.log('请求失败', err)
	},
	complete(res) {
		console.log('interceptor-complete')
	}
})



// 拦截器
uni.addInterceptor('request', {
	invoke(args) {
		console.log('请求前',args,args.header.isToken);
		console.log('请求前',fui.checkCacheTime('access_token'),fui.getToken());

		
		if(args.header.isToken){
		 	let  accessToken = fui.getToken();		    
			let t= fui.checkCacheTime('access_token')			
			if(t){
				fui.loginOut()
				fui.toLogin(402)
				return false
			}
			
			// 验证token
			if(!accessToken){
				fui.toLogin(402)
				return false
			}
		}
	},
	success(res) {
		// 请求成功后，修改code值为1
		// args.data.code = 1
		console.log('请求成功',res);
	},
	fail(err) {
		console.log('请求失败', err)
	},
	complete(res) {
		console.log('interceptor-complete')
	}
})


const app = new Vue({
	store,
    ...App
})

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif