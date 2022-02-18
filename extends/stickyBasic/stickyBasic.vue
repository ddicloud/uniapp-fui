<template>
	<view class="container">
		<view class="fui-title">
			基本用法
		</view>
		<fui-sticky :scrollTop="scrollTop" stickyHeight="80rpx">
			<template v-slot:header>
				<view class="fui-tag">基本用法</view>
			</template>
		</fui-sticky>

		<view class="fui-title">
			吸顶距离
		</view>
		<fui-sticky :scrollTop="scrollTop" :stickyTop="stickyTop" stickyHeight="80rpx">
			<template v-slot:header>
				<view class="fui-center">
					<view class="fui-tag fui-green">吸顶距离</view>
				</view>
			</template>
		</fui-sticky>

		<view class="fui-title">
			指定容器
		</view>
		<fui-sticky :scrollTop="scrollTop" stickyHeight="80rpx" container>
			<template v-slot:header>
				<view class="fui-right">
					<view class="fui-tag fui-danger">指定容器</view>
				</view>
			</template>
			<template v-slot:content>
				<view class="fui-box">
					容器内容
				</view>
			</template>
		</fui-sticky>
		<view style="height: 800px;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				stickyTop: uni.upx2px(80)
			}
		},
		onLoad() {
			// #ifdef H5
			this.stickyTop += 44;
			// #endif
		},
		methods: {

		},
		//页面滚动执行方式
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style>
	.fui-title {
		padding: 50rpx 30rpx 30rpx;
		color: #2C405A;
	}

	.fui-tag {
		width: 200rpx;
		height: 80rpx;
		margin-left: 30rpx;
		background-color: #5677fc;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 6rpx;
	}

	.fui-green {
		background-color: #19be6b !important;
	}

	.fui-danger {
		background-color: #EB0909 !important;
	}

	.fui-center {
		display: flex;
		justify-content: center;
	}

	.fui-right {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-end;
	}

	.fui-box {
		width: 100%;
		height: 300rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
	}
</style>
