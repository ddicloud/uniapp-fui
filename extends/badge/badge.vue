<template>
	<view class="container">
		<view class="fui-title">无内容</view>
		<view class="fui-flex-box">
			<fui-badge margin="0 40rpx 0 0" dot></fui-badge>
			<fui-badge margin="0 40rpx 0 0" type="warning" dot></fui-badge>
			<fui-badge margin="0 40rpx 0 0" type="green" dot></fui-badge>
			<fui-badge margin="0 40rpx 0 0" type="danger" dot></fui-badge>
			<fui-badge margin="0 40rpx 0 0" type="white" dot></fui-badge>
			<fui-badge margin="0 40rpx 0 0" type="black" dot></fui-badge>
			<fui-badge margin="0 40rpx 0 0" type="gray" dot></fui-badge>
		</view>
		<view class="fui-title">无内容(放大)</view>
		<view class="fui-flex-box">
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="warning" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="green" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="danger" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="white" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="black" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="gray" dot></fui-badge>
			</view>
		</view>
		
		<view class="fui-title">无内容(缩小)</view>
		<view class="fui-flex-box">
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="warning" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="green" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="danger" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="white" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="black" dot></fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="gray" dot></fui-badge>
			</view>
		</view>

		<view class="fui-title">数字角标</view>
		<view class="fui-flex-box">
			<view class="fui-badge-box">
				<fui-badge>1</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge type="warning">2</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge type="green">3</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge type="danger">4</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge type="white">5</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge type="white_red">5</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge type="black">88</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge type="gray">99+</fui-badge>
			</view>
		</view>
		
		<view class="fui-title">数字角标(放大)</view>
		<view class="fui-flex-box">
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2">1</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="warning">2</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="green">3</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="danger">4</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="white">5</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="white_red">5</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="black">88</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="1.2" type="gray">99+</fui-badge>
			</view>
		</view>

        <view class="fui-title">数字角标(缩小)</view>
		<view class="fui-flex-box">
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8">1</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="warning">2</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="green">3</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="danger">4</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="white">5</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="white_red">5</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="black">88</fui-badge>
			</view>
			<view class="fui-badge-box">
				<fui-badge :scaleRatio="0.8" type="gray">99+</fui-badge>
			</view>
		</view>

		<view class="fui-title">绝对定位</view>

		<view class="fui-flex-box">
			<view class="fui-badge-item">
				<fui-icon name="message"></fui-icon>
				<fui-badge type="danger" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</fui-badge>
			</view>
			<view class="fui-badge-item">
				<fui-icon name="message"></fui-icon>
				<fui-badge type="red" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</fui-badge>
			</view>
			<view class="fui-badge-item">
				<fui-icon name="message"></fui-icon>
				<fui-badge type="white_red" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</fui-badge>
			</view>
			
			<view class="fui-badge-item">
				<fui-icon name="message"></fui-icon>
				<fui-badge type="danger" dot absolute top="4rpx"></fui-badge>
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

<style scoped>
	.container {
		padding: 20rpx 30rpx 120rpx 30rpx;
		box-sizing: border-box;
	}

	.fui-title {
		padding: 30rpx 0;
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
	}

	.fui-flex-box {
		width: 100%;
		display: flex;
		align-items: center;
		padding-bottom: 30rpx;
	}

	.fui-badge-box {
		padding-right: 40rpx;
	}

	.fui-badge-item {
		position: relative;
		margin-right: 80rpx;
	}
</style>
