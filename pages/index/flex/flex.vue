<template>
	<view class="container">
		<view class="header">
			<view class="title">Flex</view>
			<view class="sub-title">Flex布局</view>
		</view>
		<view class="fui-flex-box">
			<view class="fui-flex">
				<view class="fui-center fui-light-green fui-col-12">12：100%</view>
			</view>
			<view class="fui-flex">
				<view class="fui-center fui-light-green fui-col-6">6：50%</view>
				<view class="fui-center fui-light-blue fui-col-6">6：50%</view>
			</view>
			<view class="fui-flex">
				<view class="fui-center fui-light-green fui-col-4">4：33.33%</view>
				<view class="fui-center fui-light-blue fui-col-4">4：33.33%</view>
				<view class="fui-center fui-light-orange fui-col-4">4：33.33%</view>
			</view>
			<view class="fui-flex">
				<view class="fui-center fui-light-green fui-col-4">3：25%</view>
				<view class="fui-center fui-light-blue fui-col-4">3：25%</view>
				<view class="fui-center fui-light-orange fui-col-4">3：25%</view>
				<view class="fui-center fui-light-brownish fui-col-4">3：25%</view>
			</view>
			<view class="fui-flex">
				<view class="fui-center fui-light-green fui-col-8">8：66.66%</view>
				<view class="fui-center fui-light-blue fui-col-4">4：33.33%</view>
			</view>

			<view class="fui-flex">
				<view class="fui-center fui-light-blue fui-flex-1">Fire UI</view>
			</view>
			<view class="fui-flex">
				<view class="fui-center fui-light-green fui-flex-1">Fire UI</view>
				<view class="fui-center fui-light-brownish fui-flex-1">Fire UI</view>
			</view>
			<view class="fui-flex">
				<view class="fui-center fui-light-green fui-flex-1">Fire UI</view>
				<view class="fui-center fui-light-brownish fui-flex-1">Fire UI</view>
				<view class="fui-center fui-light-orange fui-flex-1">Fire UI</view>
			</view>
			<view class="fui-flex fui-align-between">
				<view class="fui-center fui-light-green fui-col-4">col-4</view>
				<view class="fui-center fui-light-brownish fui-col-4">col-4</view>
			</view>
			<view class="fui-flex fui-align-right">
				<view class="fui-center fui-light-green fui-col-4">col-4</view>
				<view class="fui-center fui-light-brownish fui-col-4">col-4</view>
			</view>
			<view class="fui-flex fui-align-center">
				<view class="fui-center fui-light-green fui-col-6">col-6</view>
				<view class="fui-center fui-light-brownish fui-col-4">col-4</view>
			</view>
			<view class="fui-flex fui-align-between">
				<view class="fui-center fui-light-green fui-col-3 ">Fire UI</view>
				<view class="fui-center fui-light-brownish  fui-col-3">Fire UI</view>
				<view class="fui-center fui-light-orange fui-col-3">Fire UI</view>
			</view>
			<view class="fui-flex fui-align-between">
				<view class="fui-center fui-light-green fui-col-6 mr">col-6 </view>
				<view class="fui-center fui-light-brownish  fui-col-6 ">col-6</view>
			</view>
			<view class="fui-flex fui-align-between">
				<view class="fui-center fui-light-green fui-col-4 mr">col-4</view>
				<view class="fui-center fui-light-brownish  fui-col-4 mr">col-4</view>
				<view class="fui-center fui-light-orange fui-col-4">col-4</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	@import '../../../static/css/fireui.css';

	.header {
		padding: 80rpx 60rpx 40rpx 60rpx;
	}

	.title {
		font-size: 36rpx;
		color: #333;
		font-weight: bold;
	}

	.sub-title {
		font-size: 28rpx;
		color: #7A7A7A;
		padding-top: 18rpx;
	}

	.fui-flex-box {
		padding: 0 30rpx 80rpx 30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
	}

	.fui-center {
		padding: 18rpx 0;
		margin-bottom: 12rpx;
	}

	.mr {
		margin-right: 30rpx
	}
</style>
