<template>
	<view class="container">
		<view class="fui-header">
			<view class="fui-title">Loading</view>
			<view class="fui-sub-title">加载中...</view>
		</view>

		<!--正在加载 start-->
		<fui-loadmore></fui-loadmore>
		<!--正在加载 end-->

		<!--正在加载 start-->
		<fui-loadmore :index="2"></fui-loadmore>
		<!--正在加载 end-->
		<!--正在加载 start-->
		<fui-loadmore :index="3"></fui-loadmore>
		<fui-loadmore :index="3" type="primary"></fui-loadmore>
		<fui-loadmore :index="3" type="red"></fui-loadmore>
		<fui-loadmore :index="3" type="orange"></fui-loadmore>
		<fui-loadmore :index="3" type="green"></fui-loadmore>
		<!--正在加载 end-->
		<!--没有更多了 start-->
		<fui-nomore></fui-nomore>
		<fui-divider>我是有底线的</fui-divider>
		<fui-nomore text="NO MORE"></fui-nomore>
		<fui-divider>NO MORE</fui-divider>
		<fui-divider width="60%" dividerColor="#f00" color="#f00">NO MORE</fui-divider>
		<!--没有更多了 end-->
		<!--没有更多了 start-->
		<fui-nomore :isDot="true"></fui-nomore>
		<!--没有更多了 end-->

		<!--加载框 start-->
		<fui-loading></fui-loading>
		<!--加载框 end-->

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20rpx 30rpx 40rpx 30rpx;
		box-sizing: border-box;
	}

	.fui-header {
		padding: 80rpx 60rpx 50rpx 60rpx;
	}

	.fui-title {
		font-size: 36rpx;
		color: #333;
		font-weight: bold;
	}

	.fui-sub-title {
		font-size: 28rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}
</style>
