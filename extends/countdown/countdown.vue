<template>
	<view class="container">
		<view class="header">
			<view class="title">Countdown</view>
			<view class="sub-title">倒计时 </view>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">默认使用</view>
			<fui-countdown :time="timeList[0]"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">改变颜色,缩放字体</view>
			<fui-countdown :time="timeList[1]" color="#e41f19" borderColor="#e41f19" colonColor="#e41f19" :scale="true"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">边框与背景重合</view>
			<fui-countdown :time="timeList[1]" borderColor="#fff"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">改变背景</view>
			<fui-countdown :time="timeList[0]" color="#fff" borderColor="#e41f19" backgroundColor="#e41f19" colonColor="#e41f19"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">改变大小</view>
			<fui-countdown :time="timeList[1]" :height="30" :width="30" :size="26" :colonSize="32"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">去掉小时</view>
			<fui-countdown :time="timeList[2]" :hours="false" :scale="true"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">去掉小时分钟</view>
			<fui-countdown :time="timeList[5]" :hours="false" :minutes="false" scale  :isColon="false"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">秒数单位使用英文缩写</view>
			<fui-countdown :time="timeList[5]" :hours="false" :minutes="false" scale unitEn  :isColon="false"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">倒计时结束执行事件</view>
			<fui-countdown :time="timeList[3]" color="#e41f19" borderColor="#e41f19" colonColor="#e41f19" :scale="true" @end="endOfTime"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">冒号替换成文字</view>
			<fui-countdown :time="timeList[4]" :scale="true" :isColon="false"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">去掉边框</view>
			<fui-countdown :time="timeList[4]" borderColor="transparent" :isColon="false"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">显示剩余天数</view>
			<fui-countdown :time="timeList[4]" :scale="true" :isColon="false" :days="true"></fui-countdown>
		</view>
		<view class="fui-countdown">
			<view class="fui-countdown-text">去掉秒数</view>
			<fui-countdown :time="timeList[4]" :scale="true" :isColon="false" :days="true" :seconds="false" ></fui-countdown>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timeList: [1000, 2000, 3000, 20, 240000,60]
			}
		},
		methods: {
			endOfTime: function() {
				this.fui.toast("倒计时结束，事件执行")
			}
		}
	}
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

	.fui-countdown {
		width: 100%;
		padding: 40rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		margin-top: 20rpx;
	}

	.fui-countdown-text {
		font-size: 30rpx;
		line-height: 30rpx;
		color: #555;
	}
</style>
