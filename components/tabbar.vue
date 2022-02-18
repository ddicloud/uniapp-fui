<template>
	<view><fui-tabbar :tabBar="tabBar2" :selectedColor="selectedColor" :hump="hump" :current="current" @click="tabbarSwitch"></fui-tabbar></view>
</template>

<script>
export default {
	data() {
		return {
			hump: true,
			current: 0,
			selectedColor: '#000000',
			tabBar2: [
				{
					pagePath: 'index',
					text: '首页',
					iconPath: '/static/images/tabbar/index.png',
					selectedIconPath: '/static/images/tabbar/index_active.png'
				},
				{
					pagePath: 'classify',
					text: '分类',
					iconPath: '/static/images/tabbar/cate.png',
					selectedIconPath: '/static/images/tabbar/cate_active.png',
					verify: true
				},
				{
					pagePath: 'store',
					text: '商家',
					iconPath: '/static/images/tabbar/location.png',
					selectedIconPath: '/static/images/tabbar/location_active.png',
					hump: true
					// "isDot": true,
					// "verify": true
				},
				{
					pagePath: 'shopcart',
					text: '购物车',
					iconPath: '/static/images/tabbar/cart.png',
					selectedIconPath: '/static/images/tabbar/cart_active.png',
					isDot: true,
					verify: true
				},
				{
					pagePath: 'member',
					text: '我的',
					iconPath: '/static/images/tabbar/user.png',
					selectedIconPath: '/static/images/tabbar/user_active.png',
					isDot: true,
					verify: true
				}
			]
		};
	},
	props: {
		currentindex: {
			type: Number,
			default: 0
		}
	},
	created() {
		let that = this;
		this.current = that.$store.state.currentindex;
		console.log('切换页面', this.current);
	},
	methods: {
		tabbarSwitch(e) {
			let that = this;
			//获取登录状态，此处默认未登录
			let isLogin = false;
			console.log('切换页面', e.pagePath, e, e.index);
			that.$store.state.currentindex = e.index;
			that.$forceUpdate();
			console.log('当前第几个', e.index);
			// if(e.index == 3){
			// 	that.$Router.push({name:e.pagePath})
			// }else{
			// 	that.$Router.replaceAll({name:e.pagePath})
			// }
		}
	}
};
</script>

<style></style>
