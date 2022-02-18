<template>
	<view class="container">
		<view class="header">
			<view class="title">悬浮按钮</view>
			<view class="sub-title">Fab，可设置left，right，bottom值，可设置大小，颜色等，具体参考文档。拓展出来的按钮不应多于6个，否则违反了作为悬浮按钮的快速、高效的原则。 </view>
		</view>
		<view class="fui-btn-box">
			<view class="fui-btn-btm">
				<fui-button type="white" shape="circle" @click="change(1)">左侧悬浮</fui-button>
			</view>
			<view class="fui-btn-btm">
				<fui-button type="white" shape="circle" @click="change(2)">右侧悬浮</fui-button>
			</view>
			<view class="fui-btn-btm">
				<fui-button type="white" shape="circle" @click="change(3)">设置默认按钮背景颜色</fui-button>
			</view>
			<view class="fui-btn-btm">
				<fui-button type="white" shape="circle" @click="change(4)">无拓展按钮</fui-button>
			</view>
			<view class="fui-btn-btm">
				<fui-button type="white" shape="circle" @click="change(5)">设置拓展按钮</fui-button>
			</view>
			<view class="fui-btn-btm">
				<fui-button type="white" shape="circle" @click="change(6)">拓展按钮无图标展示</fui-button>
			</view>
		</view>
		<fui-fab v-if="show" :left="left" :right="right" :bottom="bottom" :bgColor="bgColor" :btnList="btnList" @click="onClick"></fui-fab>
	</view>
</template>

<script>
	const fireui = require("@/components/common/fui-clipboard/fui-clipboard.js")
	export default {
		data() {
			return {
				left: 0,
				right: 80,
				bottom: 100,
				bgColor: "#5677fc",
				btnList: [],
				list: [{
					bgColor: "#16C2C2",
					//图标/图片地址
					imgUrl: "/static/images/fab/fab_about.png",
					//图片高度 rpx
					imgHeight: 64,
					//图片宽度 rpx
					imgWidth: 64,
					//名称
					text: "关于",
					//字体大小
					fontSize: 34,
					//字体颜色
					color: "#fff"
				}, {
					bgColor: "#64B532",
					//图标/图片地址
					imgUrl: "/static/images/fab/fab_share.png",
					//图片高度 rpx
					imgHeight: 64,
					//图片宽度 rpx
					imgWidth: 64,
					//名称
					text: "分享",
					//字体大小
					fontSize: 34,
					//字体颜色
					color: "#fff"
				}, {
					bgColor: "#FFA000",
					//图标/图片地址
					imgUrl: "/static/images/fab/fab_reward.png",
					//图片高度 rpx
					imgHeight: 64,
					//图片宽度 rpx
					imgWidth: 64,
					//名称
					text: "赞赏",
					//字体大小
					fontSize: 34,
					//字体颜色
					color: "#fff"
				}],
				list2: [{
					bgColor: "#16C2C2",
					//名称
					text: "关于",
					//字体大小
					fontSize: 28,
					//字体颜色
					color: "#fff"
				}, {
					bgColor: "#64B532",
					//名称
					text: "分享",
					//字体大小
					fontSize: 28,
					//字体颜色
					color: "#fff"
				}, {
					bgColor: "#FFA000",
					//名称
					text: "赞赏",
					//字体大小
					fontSize: 28,
					//字体颜色
					color: "#fff"
				}],
				show: false
			}
		},
		onLoad() {
			this.btnList = [...this.list]
			setTimeout(() => {
				this.show = true
			}, this.fui.isAndroid()?100:0)
		},
		methods: {
			change(type) {
				switch (type) {
					case 1:
						this.left = 80;
						this.right = 0;
						break;
					case 2:
						this.left = 0;
						this.right = 80;
						break;
					case 3:
						this.bgColor = "#FF0000";
						break;
					case 4:
						this.btnList = [];
						break;
					case 5:
						this.btnList = [...this.list];
						break;
					case 6:
						this.btnList = [...this.list2];
						break;
					default:
						break;
				}
				this.fui.toast("切换成功，点击查看效果")
			},
			onClick(e) {
				let index = e.index

				switch (index) {
					case -1:
						this.fui.toast("您点击了悬浮按钮")
						break;
					case 0:
						uni.navigateTo({
							url: "/pages/common/about/about"
						})
						break;
					case 1:
						// #ifdef MP || H5
						this.clipboard("https://www.fireui.cn/")
						// #endif
						//#ifdef APP-PLUS
						plus.share.sendWithSystem({
							content: "fireui组件库",
							href: 'https://www.fireui.cn/'
						}, function() {
							console.log('分享成功');
						}, function(e) {
							console.log('分享失败：' + JSON.stringify(e));
						});
						//#endif
						break;
					case 2:
						uni.previewImage({
							urls: ["https://fireui.cn/img/reward.jpg"]
						})
						break;
					default:
						break;
				}
			},
			clipboard: function(data) {
				fireui.getClipboardData(data, (res) => {
					// #ifdef H5 || MP-ALIPAY
					if (res) {
						this.fui.toast("分享链接已复制")
					} else {
						this.fui.toast("分享链接复制失败")
					}
					// #endif
				})
			}
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
		font-size: 34rpx;
		color: #333;
		font-weight: 500;
	}

	.sub-title {
		font-size: 24rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}

	.fui-btn-box {
		padding: 10rpx 40rpx;
		box-sizing: border-box;
	}

	.fui-btn-btm {
		margin-bottom: 36rpx;
	}
</style>
