<template>
	<view class="container">
		<view class="fui-dot" :class="['fui-dot-'+(index+1)]" v-for="(item,index) in circleList" :key="index"></view>
		<view class="fui-container-in">
			<view class="fui-content-out" :class="['fui-award-'+(index+1),index==indexSelect?'fui-awardSelect':'']" v-for="(item,index) in awardList"
			 :key="index">
				<image class="fui-award-image" :src="item.img"></image>
			</view>
			<view class="fui-btn-start" :class="[isRunning?'fui-ative':'']" @tap="startDrawing">立即抽奖</view>
		</view>
		<view class="jilu" v-show="jilu">
			中奖详情：获取{{jilu}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jilu:'',
				circleList: 24, //圆点
				awardList: [{
					img: "../../static/images/luck/luck-1.png",
					name: ".top域名 1元/年"
				}, {
					img: "../../static/images/luck/luck-2.png",
					name: "VPS 1元/30天"
				}, {
					img: "../../static/images/luck/luck-3.png",
					name: "免费主机1年"
				}, {
					img: "../../static/images/luck/luck-4.png",
					name: "虚拟主机1元/年"
				}, {
					img: "../../static/images/luck/luck-1.png",
					name: ".top域名 1元/年"
				}, {
					img: "../../static/images/luck/luck-2.png",
					name: "VPS 1元/30天"
				}, {
					img: "../../static/images/luck/luck-3.png",
					name: "免费主机1年"
				}, {
					img: "../../static/images/luck/luck-4.png",
					name: "虚拟主机1元/年"
				}], //奖品数组
				indexSelect: 0, //被选中的奖品index
				isRunning: false //是否正在抽奖
			}
		},
		methods: {
			//获取随机数
			getRandom: function(u) {
				let rnd = Math.random() > 0.5 ? "2" : "1";
				u = u || 3;
				for (var i = 0; i < u; i++) {
					rnd += Math.floor(Math.random() * 10);
				}
				return Number(rnd);
			},
			//开始抽奖
			startDrawing: function() {
				if (this.isRunning) return
				this.isRunning = true;
				let indexSelect = 0;
				let i = 0;
				let randomNum = this.getRandom(3);
				let timer = setInterval(() => {
					++indexSelect;
					//这里用y=30*x+150函数做的处理.可根据自己的需求改变转盘速度
					indexSelect = indexSelect % 8;
					this.indexSelect = indexSelect;
					i += 40;
					if (i > randomNum) {
						//去除循环
						clearInterval(timer)
						timer = null;
						//获奖提示
						uni.showModal({
							title: '恭喜您',
							content: '获得了奖品【' + this.awardList[indexSelect].name + '】',
							confirmColor: '#5677FC',
							showCancel: false, //去掉取消按钮
							success: (res) => {
								if (res.confirm) {
									this.isRunning = false
								}
							}
						})
						this.jilu=this.awardList[indexSelect].name
					}
				}, (70 + i))
			}
		}
	}
</script>

<style>
	.container {
		height: 600rpx;
		width: 650rpx;
		background-color: #fc4034;
		margin: 100rpx auto;
		border-radius: 40rpx;
		box-shadow: 0 10px 0 #d80014;
		position: relative;
	}

	.fui-container-in {
		width: 580rpx;
		height: 530rpx;
		background-color: #d80014;
		border-radius: 40rpx;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}

	/**小圆点 start*/

	.fui-dot {
		position: absolute;
		display: block;
		border-radius: 50%;
		height: 20rpx;
		width: 20rpx;
	}

	.fui-dot:nth-child(odd) {
		background: #fff;
		animation: 0.5s odd linear infinite;
	}

	.fui-dot:nth-child(even) {
		background: #fcf400;
		animation: 0.5s even linear infinite;
	}

	.fui-dot-1 {
		left: 15rpx;
		top: 15rpx;
	}

	.fui-dot-2 {
		left: 117.5rpx;
		top: 7.5rpx;
	}

	.fui-dot-3 {
		left: 220rpx;
		top: 7.5rpx;
	}

	.fui-dot-4 {
		left: 322.5rpx;
		top: 7.5rpx;
	}

	.fui-dot-5 {
		left: 425rpx;
		top: 7.5rpx;
	}

	.fui-dot-6 {
		left: 527.5rpx;
		top: 7.5rpx;
	}

	.fui-dot-7 {
		left: 620rpx;
		top: 15rpx;
	}

	.fui-dot-8 {
		left: 622rpx;
		top: 109rpx;
	}

	.fui-dot-9 {
		left: 622rpx;
		top: 203rpx;
	}

	.fui-dot-10 {
		left: 622rpx;
		top: 297rpx;
	}

	.fui-dot-11 {
		left: 622rpx;
		top: 391rpx;
	}

	.fui-dot-12 {
		left: 622rpx;
		top: 485rpx;
	}

	.fui-dot-13 {
		left: 620rpx;
		top: 565rpx;
	}

	.fui-dot-14 {
		left: 517.5rpx;
		top: 572rpx;
	}

	.fui-dot-15 {
		left: 415rpx;
		top: 572rpx;
	}

	.fui-dot-16 {
		left: 312.5rpx;
		top: 572rpx;
	}

	.fui-dot-17 {
		left: 210rpx;
		top: 572rpx;
	}

	.fui-dot-18 {
		left: 107.5rpx;
		top: 572rpx;
	}

	.fui-dot-19 {
		left: 15rpx;
		top: 565rpx;
	}

	.fui-dot-20 {
		left: 7.5rpx;
		top: 471rpx;
	}

	.fui-dot-21 {
		left: 7.5rpx;
		top: 377rpx;
	}

	.fui-dot-22 {
		left: 7.5rpx;
		top: 283rpx;
	}

	.fui-dot-23 {
		left: 7.5rpx;
		top: 189rpx;
	}

	.fui-dot-24 {
		left: 7.5rpx;
		top: 95rpx;
	}

	@-webkit-keyframes odd {
		0% {
			background: #fff;
		}

		100% {
			background: #fcf400;
		}
	}

	@keyframes odd {
		0% {
			background: #fff;
		}

		100% {
			background: #fcf400;
		}
	}

	@-webkit-keyframes even {
		0% {
			background: #fcf400;
		}

		100% {
			background: #fff;
		}
	}

	@keyframes even {
		0% {
			background: #fcf400;
		}

		100% {
			background: #fff;
		}
	}

	/**小圆点 end*/

	.fui-content-out {
		position: absolute;
		height: 150rpx;
		width: 168rpx;
		background-color: #fcecec;
		border-radius: 15rpx;
		box-shadow: 0 4px 0 #fcc8d0;
	}

	/* 580 530  */

	.fui-award-1 {
		left: 24rpx;
		top: 24rpx;
	}

	.fui-award-2 {
		left: 206rpx;
		top: 24rpx;
	}

	.fui-award-3 {
		left: 388rpx;
		top: 24rpx;
	}

	.fui-award-4 {
		left: 388rpx;
		top: 188rpx;
	}

	.fui-award-5 {
		left: 388rpx;
		top: 352rpx;
	}

	.fui-award-6 {
		left: 206rpx;
		top: 352rpx;
	}

	.fui-award-7 {
		left: 24rpx;
		top: 352rpx;
	}

	.fui-award-8 {
		left: 24rpx;
		top: 188rpx;
	}

	/**居中 加粗*/

	.fui-btn-start {
		position: absolute;
		top: 188rpx;
		left: 206rpx;
		border-radius: 15rpx;
		height: 150rpx;
		width: 168rpx;
		background-color: #fc4034;
		box-shadow: 0 4px 0 #fcc8d0;
		color: #fcf400;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		line-height: 150rpx;
	}

	.fui-ative {
		opacity: 0.6 !important;
	}

	.fui-award-image {
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		height: 134rpx;
		width: 134rpx;
	}

	.fui-awardSelect {
		background-color: #fcf400 !important;
		box-shadow: 0 4px 0 rgb(240, 208, 12) !important;
	}
	.jilu{
		margin-top:700rpx;
	}
</style>
