<template>
	<view class="container">
		<view class="fui-content-box">
			<view class="fui-content">尊敬的开发者，欢迎体验Fire UI！</view>
			<view class="fui-content">该项目主要以组件为主，以及部分模板的分享。项目免费开源（不包括且不限于以下方式：恶意修改、销售、再版、删除），源码可在<text class="fui-content-email">GitHub</text>上下载，欢迎Watch。</view>
			<view class="fui-content">
				FireUI跨端项目uni-app版本（v3编译），支持nvue uni-app编译模式（原weex编译模式），easycom组件模式（无需手动引入，开发工具自带智能感知）。
			</view>
			<view class="fui-content">项目可能存在缺陷或者bug，如果您在使用过程中发现问题或者有更好的建议，可反馈给我。</view>
			单商户外卖:<view class="fui-content fui-link" @tap="getLink" data-link="https://ext.dcloud.net.cn/plugin?id=5999">https://ext.dcloud.net.cn/plugin?id=5999</view>
			多商户分销:<view class="fui-content fui-link" @tap="getLink" data-link="https://ext.dcloud.net.cn/plugin?id=5920">https://ext.dcloud.net.cn/plugin?id=5920</view>
			开源Fire-ui:<view class="fui-content fui-link" @tap="getLink" data-link="https://ext.dcloud.net.cn/plugin?id=5919">https://ext.dcloud.net.cn/plugin?id=5919</view>
			多商户后台开源框架:<view class="fui-content fui-link" @tap="getLink" data-link="https://gitee.com/wayfiretech_admin/diandi-admin">https://gitee.com/wayfiretech_admin/diandi-admin</view>
			官方开发文档:<view class="fui-content fui-link" @tap="getLink" data-link="http://doc.hopesfire.com/ "> http://doc.hopesfire.com/ (备案中)</view>
			<view class="fui-content">
				您可以通过反馈或者以下方式联系我！
			</view>
			
			<view class="fui-content fui-content-email" @tap="copy('662719021','QQ群号已复制')">QQ交流群：662719021</view>
		</view>

	</view>
</template>

<script>
	const fireui = require("@/components/common/fui-clipboard/fui-clipboard.js")
	import {
		mapState
	} from 'vuex'
	export default {
		computed: mapState(['version']),
		data() {
			return {

			}
		},
		methods: {
			getLink(e) {
				let link = e.currentTarget.dataset.link
				fireui.getClipboardData(link, (res) => {
					// #ifdef H5 || MP-ALIPAY
					if (res) {
						this.fui.toast("链接复制成功")
					} else {
						this.fui.toast("链接复制失败")
					}
					// #endif
				})
			},
			copy: function(text,msg) {
				const that = this
				thorui.getClipboardData(text, (res) => {
					// #ifdef H5 || MP-ALIPAY
					if (res) {
						this.fui.toast(msg)
					} else {
						this.fui.toast("内容复制失败")
					}
					// #endif
				})
			},
			log: function() {
				uni.navigateTo({
					url: '../log/log'
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 0 50rpx 40rpx 50rpx;
		box-sizing: border-box;
	}
	.fui-content-box {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 10rpx;
		box-shadow: 0 0 10rpx #eee;
	}

	.fui-content {
		color: #333;
		font-size: 30rpx;
		line-height: 44rpx;
		padding: 10rpx 0;
		text-align: justify;
	}

	.fui-content-email {
		color: #5677fc !important;
	}

	.fui-footer {
		display: flex;
		align-items: center;
		padding-top: 30rpx;
	}

	.fui-applets {
		width: 80px;
		height: 80px;
		display: block;
	}

	.fui-footer-text {
		font-size: 24rpx;
		color: #999;
		padding-left: 20rpx;
		width: 300rpx;
	}
	.fui-link {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0px 3rpx 20rpx rgba(183, 183, 183, 0.1);
		border-radius: 10rpx;
		color: #06c;
		margin-top: 20rpx;
		word-break: break-all;
	}
</style>
