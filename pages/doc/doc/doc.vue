<template>
	<view class="container">
		<image src="https://www.fireui.cn/img/wait.gif" mode="widthFix" class="fui-banner"></image>
		<view class="fui-text">---我知道你会来，所以我会等。</view>

		<view class="fui-view">
			<view class="fui-cell">
				<view class="fui-title">组件文档地址：</view>
				<view class="fui-link" @tap="getLink('https://fireui.cn/doc/')">https://fireui.cn/doc/</view>
			</view>
			<view class="fui-cell">
				<view class="fui-title">uni-app版本GitHub地址：</view>
				<view class="fui-link" @tap="getLink('https://github.com/dingyong0214/fireui-uniapp')">https://github.com/dingyong0214/fireui-uniapp</view>
			</view>
			<view class="fui-cell">
				<view class="fui-title">uni-app版本插件市场地址：</view>
				<view class="fui-link" @tap="getLink('https://ext.dcloud.net.cn/plugin?id=556')">https://ext.dcloud.net.cn/plugin?id=556</view>
			</view>
			<view class="fui-cell">
				<view class="fui-title">小程序版本GitHub地址：</view>
				<view class="fui-link" @tap="getLink('https://github.com/dingyong0214/fireui')">https://github.com/dingyong0214/fireui</view>
			</view>
			<view class="fui-cell">
				<view class="fui-title">小程序版本插件市场地址：</view>
				<view class="fui-link" @tap="getLink('https://ext.dcloud.net.cn/plugin?id=569')">https://ext.dcloud.net.cn/plugin?id=569</view>
			</view>
		</view>

	</view>
</template>

<script>
	const fireui = require("@/components/common/fui-clipboard/fui-clipboard.js")
	export default {
		data() {
			return {

			}
		},
		methods: {
			getLink: function(link) {
				fireui.getClipboardData(link, (res) => {
					// #ifdef H5 || MP-ALIPAY
					if (res) {
						this.fui.toast("链接复制成功")
					} else {
						this.fui.toast("链接复制失败")
					}
					// #endif
				})
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: 80rpx;
	}

	.fui-banner {
		width: 100%;
		height: 375rpx
	}

	.fui-text {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		color: #B3B3B3;
		font-size: 26rpx;
		text-align: right;
	}

	.fui-view {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
	}


	.fui-cell {
		padding: 24rpx 0;
		color: #555;
	}

	.fui-title {
		width: 100%;
		padding: 0 8rpx;
		box-sizing: border-box;
	}

	.fui-link {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0px 3rpx 20rpx rgba(183, 183, 183, 0.1);
		border-radius: 10rpx;
		color: #0066cc;
		margin-top: 20rpx;
		word-break: break-all;
	}
</style>
