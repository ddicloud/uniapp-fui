<template>
	<view class="container">
		<view class="header">
			<view class="title">drawer 抽屉</view>
			<view class="sub-title">左右抽屉，内容超过一屏时建议使用scroll-view。 </view>
		</view>
		<view class="btn-box">
			<fui-button type="white" shape="circle" @click="rDrawer">从右边弹出</fui-button>
		</view>
		<view class="btn-box">
			<fui-button type="white" shape="circle" @click="lDrawer">从左边弹出</fui-button>
		</view>
		<view class="btn-box">
			<fui-button type="white" shape="circle" @click="productList">内容超过一屏模板（筛选）</fui-button>
		</view>

		<!--左抽屉-->
		<fui-drawer mode="left" :visible="leftDrawer" @close="closeDrawer">
			<view class="d-container">
				<fui-button height="80rpx"  type="green" shape="circle" @click="closeDrawer">关闭抽屉</fui-button>
			</view>
		</fui-drawer>

		<!--右抽屉-->
		<fui-drawer mode="right" :visible="rightDrawer" @close="closeDrawer">
			<view class="d-container">
				<fui-button height="80rpx" type="danger" shape="circle" @click="closeDrawer">关闭抽屉</fui-button>
			</view>
		</fui-drawer>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leftDrawer: false,
				rightDrawer: false
			}
		},
		methods: {
			closeDrawer(e) {
				this.leftDrawer = false
				this.rightDrawer = false
			},
			rDrawer() {
				this.rightDrawer = true
			},
			lDrawer() {
				this.leftDrawer = true
			},
			productList(){
				this.fui.href("/extends/productList/productList")
			}
		}
	}
</script>

<style>
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

	.btn-box {
		padding: 30rpx
	}

	.btn-box:first-child {
		margin-top: 50rpx
	}

	.d-container {
		width: 400rpx;
		padding: 80rpx 30rpx
	}
</style>
