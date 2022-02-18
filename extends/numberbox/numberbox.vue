<template>
	<view class="container">
		<view class="header">
			<view class="title">NumberBox</view>
			<view class="sub-title">数字框</view>
		</view>

		<view class="fui-number-box">
			<view class="fui-title"> 基本用法</view>
			<fui-numberbox :value="value" @change="change"></fui-numberbox>
		</view>
		<view class="fui-number-box">
			<view class="fui-title">设置最小值和最大值</view>
			<fui-numberbox :min="1" :max="10" :value="value2" @change="change2"></fui-numberbox>
		</view>
		<view class="fui-number-box">
			<view class="fui-title">设置步长 0.1</view>
			<fui-numberbox :step="0.1" :value="value3" @change="change3"></fui-numberbox>
		</view>
		<view class="fui-number-box">
			<view class="fui-title">设置步长 10</view>
			<fui-numberbox :step="10" :value="value4" @change="change4"></fui-numberbox>
		</view>
		<view class="fui-number-box">
			<view class="fui-title">禁用状态</view>
			<fui-numberbox :disabled="true"></fui-numberbox>
		</view>
		<view class="fui-number-box">
			<view class="fui-title">设置大小</view>
			<fui-numberbox :height="70" :width="140" :iconSize="30" :value="value5" @change="change5"></fui-numberbox>
		</view>
		<view class="fui-number-box">
			<view class="fui-title">调整颜色</view>
			<fui-numberbox backgroundColor="rgba(0,0,0,0.5)" color="#fff" iconColor="rgba(0,0,0,0.5)" :value="value6" @change="change6"></fui-numberbox>
		</view>
		<view class="fui-number-box">
			<view class="fui-title"> 获取输入的值：{{value7}}</view>
			<fui-numberbox :value="value7" @change="change7"></fui-numberbox>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				value: 0,
				value2: 1,
				value3: 1,
				value4: 0,
				value5: 1,
				value6: 1,
				value7: 1
			}
		},
		methods: {
			change: function(e) {
				this.value = e.value
			},
			change2: function(e) {
				this.value2 = e.value
			},
			change3: function(e) {
				this.value3 = e.value
			},
			change4: function(e) {
				this.value4 = e.value
			},
			change5: function(e) {
				this.value5 = e.value
			},
			change6: function(e) {
				this.value6 = e.value
			},
			change7: function(e) {
				this.value7 = e.value
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

	.fui-number-box {
		padding: 40rpx;
		box-sizing: border-box;
		margin-bottom: 30rpx;
		background: #fff;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
</style>