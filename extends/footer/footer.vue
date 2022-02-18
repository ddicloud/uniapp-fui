<template>
	<view class="container">
		<view class="header">
			<view class="title">Footer</view>
			<view class="sub-title">页脚 </view>
		</view>
		<fui-footer :fixed="false" :copyright="copyright"></fui-footer>
		<fui-footer :fixed="false" :copyright="copyright" :navigate="navigate" fui-footer-class="fui-custom"></fui-footer>
		<fui-footer :fixed="false" :copyright="copyright" :navigate="navigate2" fui-footer-class="fui-custom"></fui-footer>
		<fui-footer :fixed="false" :copyright="copyright" :navigate="navigate3" fui-footer-class="fui-custom"></fui-footer>
		<fui-footer copyright="Copyright © 2020 fireui All Rights Reserved." :navigate="navigate" backgroundColor="#fafafa"></fui-footer>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				navigate: [{
					url: "/pages/tabbar/index/index",
					type: "switchTab",
					text: "fireui首页"
				}],
				navigate2: [{
					url: "/pages/tabbar/index/index",
					type: "switchTab",
					text: "返回首页",
					color: "#5677fc"
				}, {
					url: "/pages/tabbar/my/my",
					type: "switchTab",
					text: "个人中心",
					color: "#5677fc",
					size: 30
				}],
				navigate3: [{
					url: "/pages/tabbar/index/index",
					type: "switchTab",
					text: "返回首页"
				}, {
					url: "/pages/tabbar/my/my",
					type: "switchTab",
					text: "个人中心"
				}, {
					url: "/pages/common/about/about",
					type: "navigate",
					text: "Fire UI"
				}],
				copyright: " Copyright © 2014-2019 Fire UI."
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.container {
		padding: 20rpx 0 120rpx 0;
		box-sizing: border-box;
	}

	.header {
		padding: 80rpx 90rpx 60rpx 90rpx;
		box-sizing: border-box;
	}

	.title {
		font-size: 36rpx;
		color: #333;
		font-weight: bold;
	}

	.sub-title {
		font-size: 28rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}

	.fui-custom {
		margin-top: 30rpx;
	}
</style>
