<template>
	<view class="container">
		<view class="header">
			<view class="title">Rate</view>
			<view class="sub-title">评分：可设置大小颜色，支持半星，支持手势touch选择。</view>
		</view>
		<view class="fui-rate-container">
			<view class="fui-title"> 基本用法</view>
			<fui-rate :current="current" @change="change"></fui-rate>
		</view>
		<view class="fui-rate-container">
			<view class="fui-title">设置星星数</view>
			<fui-rate :current="index" :quantity="8" @change="change"></fui-rate>
		</view>
		<view class="fui-rate-container">
			<view class="fui-title">设置尺寸大小(缩小)</view>
			<fui-rate :current="index" @change="change" :size="16"></fui-rate>
		</view>
		<view class="fui-rate-container">
			<view class="fui-title">设置尺寸大小(放大)</view>
			<fui-rate :current="index" @change="change" :size="26"></fui-rate>
		</view>
		<view class="fui-rate-container">
			<view class="fui-title"> 设置颜色</view>
			<fui-rate :current="index" @change="change" normal="#ccc" active="#ff7900"></fui-rate>
		</view>
		<view class="fui-rate-container">
			<view class="fui-title">未选中为空心</view>
			<fui-rate :current="index" :hollow="true" @change="change"></fui-rate>
		</view>
		<view class="fui-rate-container">
			<view class="fui-title">不可点击</view>
			<fui-rate :current="index" @change="change" :disabled="true"></fui-rate>
		</view>
		<view class="fui-rate-container">
			<view class="fui-title">不可点击(3.45星)</view>
			<fui-rate :current="4" :disabled="true" :score="0.45"></fui-rate>
		</view>
		<view class="fui-rate-container">
			<view class="fui-title">不可点击(3星半)</view>
			<fui-rate :current="4" :disabled="true" :score="0.5"></fui-rate>
		</view>
		<view class="fui-rate-container">
			<view class="fui-title">不可点击(3.55星)</view>
			<fui-rate :current="4" :disabled="true" :score="0.55"></fui-rate>
		</view>
		<view class="fui-rate-container">
			<view class="fui-title">不可点击(3.6星)</view>
			<fui-rate :current="4" active="#ff7900" :hollow="true" :disabled="true" :score="0.6"></fui-rate>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadding: false,
				show: false,
				current: 0,
				index: 3
			}
		},
		onLoad() {
		},
		methods: {
			change: function(e) {
				this.index = e.index;
				this.current = e.index
			}
		}
	}
</script>

<style scoped>
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

	.fui-rate-container {
		padding: 40rpx;
		box-sizing: border-box;
		margin-bottom: 30rpx;
		background: #fff;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.fui-title {
		font-size: 30rpx;
	}
</style>