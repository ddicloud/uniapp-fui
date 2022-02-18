<template>
	<view class="container">
		<view class="fui-order-header">
			<view class="fui-text">订单编号：
				<text class="fui-bold">9136257866</text>
			</view>
			<view class="fui-text">国内承运人：华南众包站</view>
			<view class="fui-text">预计送达：
				<text class="fui-bold">5</text>月<text class="fui-bold">1</text>日</view>
		</view>
		<view class="fui-order-tracking">
			<fui-time-axis>

				<fui-timeaxis-item backgroundColor="transparent">
					<template v-slot:node>
						<view class="fui-node" :style="{backgroundColor:backgroundColor}">
							<fui-icon name="check" color="#fff" :size="14" :bold="true"></fui-icon>
						</view>
					</template>

					<template v-slot:content>
						<view>
							<view class="fui-order-title">已签收</view>
							<view class="fui-order-desc">您的订单已由本人签收。感谢您在商城购物，欢迎再次光临。</view>
							<view class="fui-order-time fui-gray">2019-05-01 18:48:26</view>
						</view>
					</template>
				</fui-timeaxis-item>

				<fui-timeaxis-item backgroundColor="transparent">
					<template v-slot:node>
						<view class="fui-node">
							<fui-icon name="people" color="#fff" :size="13"></fui-icon>
						</view>
					</template>
					<template v-slot:content>
						<view class="fui-order-title fui-gray">派送中</view>
						<view class="fui-order-desc fui-light-gray">您的订单正在配送途中（快递员：echo.，电话：
							<text class='fui-primary'>13822448855</text>），请您耐心等待。</view>
						<view class="fui-order-time fui-gray">2019-05-01 16:29:07</view>
					</template>
				</fui-timeaxis-item>

				<fui-timeaxis-item backgroundColor="transparent">
					<template v-slot:node>
						<view class="fui-node">
							<fui-icon name="transport" color="#fff" :size="13"></fui-icon>
						</view>
					</template>
					<template v-slot:content>
						<view class="fui-order-title fui-gray">运输中</view>
						<view class="fui-order-desc fui-light-gray">您的订单已到达XX【北京XX营业部】</view>
						<view class="fui-order-time fui-gray">2019-05-01 16:17:32</view>
					</template>
				</fui-timeaxis-item>

				<fui-timeaxis-item backgroundColor="transparent">
					<template v-slot:node>
						<view class="fui-node-dot"></view>
					</template>

					<template v-slot:content>
						<view class="fui-order-desc fui-light-gray fui-ptop">您的订单已在XX【北京XX营业部】收货完成</view>
						<view class="fui-order-time fui-gray">2019-05-01 08:40:32</view>
					</template>
				</fui-timeaxis-item>

				<fui-timeaxis-item backgroundColor="transparent">
					<template v-slot:node>
						<view class="fui-node-dot"></view>
					</template>
					<template v-slot:content>
						<view class="fui-order-desc fui-light-gray fui-ptop">您的订单由XXXX送往XX【北京XX营业部】</view>
						<view class="fui-order-time fui-gray">2019-05-01 08:17:32</view>
					</template>
				</fui-timeaxis-item>

				<fui-timeaxis-item backgroundColor="transparent">
					<template v-slot:node>
						<view class="fui-node">
							<fui-icon name="home" color="#fff" :size="12"></fui-icon>
						</view>
					</template>
					<template v-slot:content>
						<view class="fui-order-title fui-gray">仓库处理中</view>
						<view class="fui-order-desc fui-light-gray">打包完成</view>
						<view class="fui-order-time fui-gray">2019-05-01 08:09:16</view>
					</template>
				</fui-timeaxis-item>

				<fui-timeaxis-item backgroundColor="transparent">
					<template v-slot:node>
						<view class="fui-node">
							<fui-icon name="order" color="#fff" :size="12"></fui-icon>
						</view>
					</template>
					<template v-slot:content>
						<view class="fui-order-title fui-gray">已下单</view>
						<view class="fui-order-desc fui-light-gray">您的订单将下传XXX仓库，准备出库</view>
						<view class="fui-order-time fui-gray">2019-05-01 02:09:16</view>
					</template>
				</fui-timeaxis-item>

				<fui-timeaxis-item backgroundColor="transparent">
					<template v-slot:node>
						<view class="fui-node">
							<fui-icon name="notice" color="#fff" :size="12"></fui-icon>
						</view>
					</template>
					<template v-slot:content>
						<view class="fui-order-title fui-gray">温馨提示</view>
						<view class="fui-order-desc fui-light-gray">您的订单预计5月1日送达您手中</view>
						<view class="fui-order-time fui-gray">2019-05-01 02:05:16</view>
					</template>
				</fui-timeaxis-item>

				<fui-timeaxis-item backgroundColor="transparent">
					<template v-slot:node>
						<view class="fui-node">
							<fui-icon name="order" color="#fff" :size="12"></fui-icon>
						</view>
					</template>
					<template v-slot:content>
						<view class="fui-order-title fui-gray">已下单</view>
						<view class="fui-order-desc fui-light-gray">您提交了订单，请等待第三方卖家系统弄确认</view>
						<view class="fui-order-time fui-gray">2019-05-01 02:04:16</view>
					</template>
				</fui-timeaxis-item>

			</fui-time-axis>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
               backgroundColor:"#5677fc"
			}
		},
		onLoad(options){
            let page=options.page || ""
			if(page=='mall'){
				this.backgroundColor="#EB0909";
				uni.setNavigationBarTitle({
					title:"查看物流"
				})
				setTimeout(()=>{
					uni.setNavigationBarColor({
						backgroundColor:this.backgroundColor,
						frontColor:"#ffffff"
					})
				},50)
			}
		}
	}
</script>

<style>
	.fui-order-header {
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
	}

	.fui-text {
		font-size: 28rpx;
		color: #333;
		padding: 4rpx;
	}

	.fui-bold {
		font-weight: bold;
	}

	.fui-node {
		height: 44rpx;
		width: 44rpx;
		border-radius: 50%;
		background-color: #ddd;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		flex-shrink: 0;
	}

	.fui-node-dot {
		height: 16rpx;
		width: 16rpx;
		background-color: #ddd;
		border-radius: 50%;
		/* transform: translateY(45%); */
		margin-top: 6rpx;
	}

	.fui-bg-primary {
		background: #EB0909 !important;
	}

	.fui-order-tracking {
		padding: 30rpx 30rpx 30rpx 40rpx;
		background: #fff;
		margin-top: 20rpx;
		box-sizing: border-box;
	}

	.fui-order-title {
		padding-bottom: 12rpx;
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
	}

	.fui-order-desc {
		padding-bottom: 12rpx;
		font-size: 28rpx;
		color: #333;
	}

	.fui-ptop {
		display: flex;
		justify-content: flex-start;
		line-height: 28rpx;
	}

	.fui-order-time {
		font-size: 24rpx;
		font-weight: bold;
	}

	.fui-gray {
		color: #848484 !important;
	}

	.fui-light-gray {
		color: #888 !important;
	}

	.fui-primary {
		color: #5677fc;
	}
</style>
