<template>
	<view class="container">
		<view class="header">
			<view class="title">Bubble Popup</view>
			<view class="sub-title">气泡弹出式菜单</view>
		</view>
		<view class="fui-title">右上角菜单</view>
		<view class="fui-btn-box">
			<fui-button width="240rpx" height="80rpx" :size="30" @click="rtBubble">打开菜单</fui-button>
		</view>
		<t-rt-popup :itemList="itemList" ref="rtBubble" @click="itemClick"></t-rt-popup>

		<view class="fui-title">聊天框</view>

		<view class="fui-chat-item">
			<image class="fui-user-avatar fui-mr" src="/static/images/news/avatar_2.jpg"></image>
			<view class="fui-chat-box">
				<view class="fui-user-name" v-if="false">张小飞</view>
				<fui-bubble-popup direction="left" position="relative" :mask="false" :show="true" triangleLeft="-22rpx" triangleTop="30rpx"
				 width="100%" backgroundColor="#ff7900">
					<view class="fui-chat-text">各位下午好</view>
				</fui-bubble-popup>
			</view>
		</view>
		<view class="fui-chat-item fui-flex-end">
			<view class="fui-chat-box">
				<view class="fui-user-name" v-if="false">小飞鱼</view>
				<fui-bubble-popup direction="right" position="relative" :mask="false" :show="true" triangleRight="-22rpx"
				 triangleTop="30rpx" width="100%" :flexEnd="true" backgroundColor="#19be6b">
					<view class="fui-chat-text">各位下午好,欢迎来到...直播间直播间直播间直播间</view>
				</fui-bubble-popup>
			</view>
			<image class="fui-user-avatar fui-ml" src="/static/images/news/avatar_1.jpg"></image>
		</view>

		<view class="fui-title">上方弹出菜单</view>

		<view class="fui-btn-box">
			<fui-button type="danger" width="240rpx" height="80rpx" :size="30" @click="topBubble">打开菜单</fui-button>
			<fui-bubble-popup :show="show" :mask="false" position="absolute" direction="bottom" @close="topBubble" width="200rpx"
			 left="50rpx" top="-20rpx" translateY="-100%" triangleRight="100rpx" triangleBottom="-22rpx">
				<view class="fui-menu-item" @tap="topBubble">菜单一</view>
				<view class="fui-menu-item" @tap="topBubble">菜单二</view>
				<view class="fui-menu-item" @tap="topBubble">菜单三</view>
			</fui-bubble-popup>
		</view>


		<view style="height: 300px;"></view>
	</view>
</template>

<script>
	import tRtPopup from '@/components/views/t-rt-popup/t-rt-popup';
	export default {
		components: {
			tRtPopup
		},
		data() {
			return {
				itemList: [{
						title: '首页',
						icon: 'home'
					},
					{
						title: '收藏',
						icon: 'star'
					},
					{
						title: '分享',
						icon: 'partake'
					}
				],
				show: false
			};
		},
		methods: {
			rtBubble() {
				this.$refs.rtBubble.toggle();
			},
			topBubble() {
				this.show = !this.show;
			},
			itemClick(e) {
				let text = ["首页", "收藏", "分享"][e.index];
				this.fui.toast(`您点击了：${text}`);
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.$refs.rtBubble.toggle();
			}
		}
	};
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

	.fui-title {
		width: 100%;
		padding: 80rpx 30rpx 30rpx;
		box-sizing: border-box;
		font-weight: bold;
	}

	.fui-btn-box {
		width: 100%;
		padding: 0rpx 30rpx;
		box-sizing: border-box;
		position: relative;
	}

	.fui-chat-item {
		width: 100%;
		padding: 30rpx 30rpx 0 30rpx;
		box-sizing: border-box;
		display: flex;
		position: relative;
	}

	.fui-chat-box {
		max-width: 70%;
	}

	.fui-user-name {
		font-size: 24rpx;
		color: #999;
	}

	.fui-chat-text {
		width: 100%;
		min-width: 40rpx;
		padding: 18rpx 24rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		word-break: break-all;
		box-sizing: border-box;
	}

	.fui-user-avatar {
		width: 84rpx;
		height: 84rpx;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.fui-mr {
		margin-right: 24rpx;
	}

	.fui-ml {
		margin-left: 24rpx;
	}

	.fui-flex-end {
		justify-content: flex-end;
	}

	.fui-chat-text {
		width: 100%;
		min-width: 40rpx;
		padding: 18rpx 24rpx;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		word-break: break-all;
		color: #fff;
		box-sizing: border-box;
	}

	.fui-menu-item {
		width: 100%;
		padding: 30rpx 20rpx;
		box-sizing: border-box;
	}
</style>
