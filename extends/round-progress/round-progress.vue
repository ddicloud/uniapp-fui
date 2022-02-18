<template>
	<view class="container">
		<view class="header">
			<view class="title">Circular Progress</view>
			<view class="sub-title">圆形进度条，可设置大小颜色等基本样式，可设置动画执行速度...renderjs实现</view>
		</view>
		<view class="fui-title">
			默认进度条
			<switch class="fui-switch" color="#5677fc" @change="switchChange(1,$event)"></switch>
		</view>
		<view class="fui-progress-box" v-if="status[0]">
			<fui-round-progress :percentage="0"></fui-round-progress>
			<fui-round-progress progressColor="#EB0909" fontColor="#EB0909" :percentage="70"></fui-round-progress>
			<fui-round-progress progressColor="#19be6b" fontColor="#19be6b" :percentage="100"></fui-round-progress>
		</view>
		<view class="fui-title">
			不显示进度 | 自定义文字 | 换底色
			<switch class="fui-switch" color="#5677fc" @change="switchChange(2,$event)"></switch>
		</view>
		<view class="fui-progress-box" v-if="status[1]">
			<fui-round-progress :fontShow="false" progressColor="#ff7900" fontColor="#ff7900" defaultColor="rgba(255,121,0,0.1)"
			 :percentage="50"></fui-round-progress>
			<fui-round-progress percentText="拼团" progressColor="#EB0909" fontColor="#EB0909" defaultColor="rgba(235,9,9,0.1)"
			 :percentage="80"></fui-round-progress>
			<fui-round-progress percentText="投标" progressColor="#19be6b" fontColor="#19be6b" defaultColor="rgba(25,190,107,0.1)"
			 :percentage="80"></fui-round-progress>
		</view>

		<view class="fui-title">
			渐变色 | 无底色
			<switch class="fui-switch" color="#5677fc" @change="switchChange(3,$event)"></switch>
		</view>
		<view class="fui-progress-box" v-if="status[2]">
			<fui-round-progress :defaultShow="false" progressColor="#ff7900" fontColor="#5677fc" gradualColor="#5677fc" :percentage="80"></fui-round-progress>
			<fui-round-progress  progressColor="#EB0909" fontColor="#EB0909" gradualColor="#ff7900"
			 :percentage="100"></fui-round-progress>
		</view>

		<view class="fui-title">
			改变大小
			<switch class="fui-switch" color="#5677fc" @change="switchChange(4,$event)"></switch>
		</view>
		<view class="fui-progress-box" v-if="status[3]">
			<fui-round-progress :percentage="60" :diam="80" :fontSize="16"></fui-round-progress>
			<fui-round-progress :percentage="60" :diam="100" :lineWidth="10" :fontSize="20"></fui-round-progress>
		</view>

		<view class="fui-title">
			弧度的方向逆时针（100-20）
			<switch class="fui-switch" color="#5677fc" @change="switchChange(5,$event)"></switch>
		</view>
		<view class="fui-progress-box" v-if="status[4]">
			<fui-round-progress :percentage="progress" counterclockwise activeMode="forwards"></fui-round-progress>
			<fui-button type="green" :disabled="progress===100" disabledGray width="220rpx" height="80rpx" margin="0 0 0 40rpx" @click="setProgress">进度控制-20</fui-button>
		</view>
		
		<view class="fui-title">
			半圆进度
			<switch class="fui-switch" color="#5677fc" @change="switchChange(6,$event)"></switch>
		</view>
		<!--百分比/2-->
		<view class="fui-progress-box" v-if="status[5]">
			<fui-round-progress :fontShow="false" :percentage="40"  :sAngle="sAngle" :diam="240" :height="130"  :lineWidth="12" progressColor="#19be6b" fontColor="#19be6b" defaultColor="rgba(25,190,107,0.1)"  @change="change">
				<view class="fui-progress-text">
					<view>血压测量进度</view>
					<view class="fui-progress-num">{{progress2}}%</view>
				</view>
			</fui-round-progress>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				sAngle:-1,
				progress: 20,
				progress2:0,
				status:[false,false,false,false,false,false]
			}
		},
		methods: {
			setProgress() {
				let num = this.progress + 20
				if (num > 100) return;
				this.progress = num
			},
			change(e){
				//半圆 进度 * 2
				this.progress2=e.percentage * 2
			},
			switchChange(type,e){
				this.$set(this.status,type-1,e.target.value)
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

	.fui-title {
		width: 100%;
		padding: 40rpx 30rpx 30rpx;
		box-sizing: border-box;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.fui-switch{
		transform: scale(0.8);
		transform-origin: 100% center;
	}

	.fui-progress-box {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	.fui-progress-text{
		width: 100%;
		height: 130px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-top: 40rpx;
		position: absolute;
		left: 0;
		top: 0;
	}
	.fui-progress-num{
		font-size: 60rpx;
		padding-top: 20rpx;
	}
</style>
