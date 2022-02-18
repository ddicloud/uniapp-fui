<template>
	<view class="container">
		<view class="header">
			<view class="title">Divider</view>
			<view class="sub-title">分隔符：可设置占据高度，线条宽度，颜色等</view>
		</view>

		<fui-divider>默认divider</fui-divider>
		<fui-divider dividerColor="red">改变线条颜色</fui-divider>
		<fui-divider dividerColor="#5677fc" color="#5677fc">改变所有颜色</fui-divider>
		<fui-divider width="80%">改变线条宽度</fui-divider>
		<fui-divider width="60%" divideColor="red">改变线条宽度</fui-divider>
		<fui-divider :gradual="true">渐变线条</fui-divider>
		<fui-divider width="60%" :gradual="true">渐变线条</fui-divider>
		<fui-divider :gradual="true" :gradualColor="gradualColor">渐变线条</fui-divider>
		<fui-divider :size="30">改变字体大小</fui-divider>
		<fui-divider :size="30"><fui-icon name="satisfied" :size="20"></fui-icon></fui-divider>
		<fui-divider :size="36">
			<image src="https://fireui.cn/images/basic/icon.png" class="fui-divider-img"></image>
			<text class="fui-text">猜你喜欢</text>
		</fui-divider>
	</view>
</template>

<script>
export default {
	data() {
		return {
			gradualColor: ['red', '#4a67d6']
		};
	},
	methods: {}
};
</script>

<style>
.container {
	padding-bottom: 100rpx;
	box-sizing: border-box;
}

.header {
	padding: 80rpx 90rpx 40rpx 90rpx;
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

.fui-text {
	padding-left: 10rpx;
	vertical-align: middle;
	font-size: 26rpx;
}

.fui-divider-img {
	width: 32rpx;
	height: 32rpx;
	vertical-align: middle;
}
</style>