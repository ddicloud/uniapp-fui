<template>
	<view class="container">
		<view class="fui-title">
			默认卡片
		</view>
		<fui-card :image="card[0].img" :title="card[0].title" :tag="card[0].tag">
			<template v-slot:body>
				<view class="fui-default">
					默认卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="fui-default">
					默认卡片底部 slot=>footer
				</view>
			</template>
		</fui-card>
		<view class="fui-title">
			header图片设置，字体设置
		</view>
		<fui-card :image="card[1].img" :title="card[1].title" :tag="card[1].tag">
			<template v-slot:body>
				<view class="fui-default">
					卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="fui-default">
					卡片底部 slot=>footer
				</view>
			</template>
		</fui-card>

		<view class="fui-title">
			无图片，无tag
		</view>
		<fui-card :title="card[0].title">
			<template v-slot:body>
				<view class="fui-default">
					卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="fui-default">
					卡片底部 slot=>footer
				</view>
			</template>

		</fui-card>

		<view class="fui-title">
			header背景设置，去线条
		</view>
		<fui-card :image="card[0].img" :title="card[0].title" :tag="card[0].tag" :header="card[0].header">
			<template v-slot:body>
				<view class="fui-default">
					卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="fui-default">
					卡片底部 slot=>footer
				</view>
			</template>
		</fui-card>

		<view class="fui-title">
			通栏
		</view>
		<fui-card :image="card[0].img" :title="card[0].title" :tag="card[0].tag" :full="true">
			<template v-slot:body>
				<view class="fui-default">
					卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="fui-default">
					卡片底部 slot=>footer
				</view>
			</template>
		</fui-card>

		<view class="fui-title">
			去阴影，加border
		</view>
		<fui-card :image="card[0].img" :title="card[0].title" :tag="card[0].tag" :border="true">
			<template v-slot:body>
				<view class="fui-default">
					卡片内容部分 slot=>body
				</view>
			</template>
			<template v-slot:footer>
				<view class="fui-default fui-flex">
					<fui-tag type="light-green" padding="8rpx 12rpx" size="24rpx">卡片底部 slot=>footer</fui-tag>
				</view>
			</template>
		</fui-card>

		<view class="fui-title">
			card 卡片
		</view>
		<fui-card :image="card[2].img" :title="card[2].title" :tag="card[2].tag" :header="card[2].header" @click="detail">
			<template v-slot:body>
				<view class="fui-article">
					<image src="https://fireui.cn/images/mall/banner/2.jpg" class="fui-article-img"></image>
					<view class="fui-article-title">Vue+Node+高德地图+Echart做一款出行可视化全栈webapp</view>
				</view>
				<fui-list-cell>
					<view class="fui-flex">
						<view class='fui-cell-title'>.NET Core使用Exceptionless分布式日志收集</view>
						<image src="/static/images/news/avatar_1.jpg" class="fui-cell-img" mode="widthFix"></image>
					</view>
				</fui-list-cell>
			</template>
			<template v-slot:footer>
				<view class="fui-default fui-flex">
					<text>余下3篇</text>
					<fui-icon name="arrowdown" :size="20" color="#ccc" class="fui-right"></fui-icon>
				</view>
			</template>
		</fui-card>

		<view class="fui-title">
			card 卡片
		</view>
		<fui-card :image="card[2].img" :title="card[2].title" :tag="card[2].tag" :header="card[2].header" @click="detail">
			<template v-slot:body>
				<fui-list-cell>
					<view class="fui-flex">
						<view class='fui-cell-title'>.NET Core使用Exceptionless分布式日志收集</view>
						<image src="/static/images/product/44.jpg" class="fui-cell-img" mode="widthFix"></image>
					</view>
				</fui-list-cell>
				<fui-list-cell>
					<view class="fui-flex">
						<view class='fui-cell-title'>高德地图+Echart做一款出行可视化全栈</view>
						<image src="/static/images/product/11.jpg" class="fui-cell-img" mode="widthFix"></image>
					</view>
				</fui-list-cell>
				<fui-list-cell unlined>
					<view class="fui-flex">
						<view class='fui-cell-title'>高德地图+Echart做一款出行可视化全栈</view>
						<image src="/static/images/product/22.jpg" class="fui-cell-img" mode="widthFix"></image>
					</view>
				</fui-list-cell>
			</template>
		</fui-card>

		<view class="fui-title">
			card 卡片
		</view>
		<fui-card :image="card[1].img" :title="card[0].title" :full="true" :header="card[3].header" :border="true" @click="detail"
		 @longclick="detail">
			<template v-slot:body>
				<view class="fui-content">
					现实是此岸，成功是彼岸，中间隔着湍急的河流，兴趣便是河上的桥，只要行动就可以通过。
				</view>
				<view class="fui-default fui-flex-pic">
					<image src="/static/images/product/1.jpg" mode="widthFix"></image>
					<image src="/static/images/product/2.jpg" mode="widthFix"></image>
					<image src="/static/images/product/3.jpg" mode="widthFix"></image>
					<image src="/static/images/product/4.jpg" mode="widthFix"></image>
					<image src="/static/images/product/5.jpg" mode="widthFix"></image>
					<image src="/static/images/product/1.jpg" mode="widthFix"></image>
					<image src="/static/images/product/5.jpg" mode="widthFix"></image>
					<image src="/static/images/product/2.jpg" mode="widthFix"></image>
					<image src="/static/images/product/3.jpg" mode="widthFix"></image>
				</view>

			</template>
			<template v-slot:footer>
				<view class="fui-default fui-pleft">
					<view>深圳.世界之窗</view>
					<view class="fui-color-gray">7小时前</view>
				</view>
			</template> 
		</fui-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				card: [{
						img: {
							url: "/static/images/news/avatar_1.jpg"
						},
						title: {
							text: "CSDN云计算"
						},
						tag: {
							text: "1小时前"
						},
						header: {
							bgcolor: "#F7F7F7",
							line: true
						}
					},
					{
						img: {
							url: "/static/images/news/avatar_2.jpg",
							width: 80,
							height: 80,
							circle: true
						},
						title: {
							text: "CSDN云计算",
							color: "#ed3f14",
							size: 34
						},
						tag: {
							text: "1小时前",
							color: "#ed3f14",
							size: 28
						}
					},
					{
						img: {
							url: "/static/images/news/avatar_1.jpg",
							circle: true
						},
						title: {
							text: "JavaScript"
						},
						tag: {
							text: "昨天"
						},
						header: {
							line: true,
							bgcolor: "#F7F7F7"
						}
					},
					{
						header: {
							line: true
						}
					}
				]
			}
		},
		methods: {
			detail: function() {
				this.fui.toast('详情功能尚未完善~')
			}
		}
	}
</script>

<style>
	page {
		background: #EDEDED;
	}

	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.fui-title {
		width: 100%;
		padding: 70rpx 30rpx 30rpx 30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		line-height: 30rpx;
		color: #666;
	}

	.fui-default {
		padding: 20rpx 30rpx;
	}

	.fui-article {
		position: relative;
	}

	.fui-article-img {
		width: 100%;
		height: 300rpx;
		display: block;
	}

	.fui-article-title {
		position: absolute;
		left: 0;
		bottom: 0;
		color: #fff;
		font-size: 32rpx;
		font-weight: 500;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
	}

	.fui-cell-title {
		font-size: 32rpx;
		font-weight: 500;
		padding: 0 10rpx;
		word-break: break-all;
		word-wrap: break-word;
	}

	.fui-cell-img {
		height: 160rpx;
		width: 160rpx;
	}

	.fui-flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.fui-mr {
		margin-right: 20rpx;
	}


	.fui-flex-pic {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		background: #fff;
		padding: 0 120rpx;
	}

	.fui-flex-pic image {
		width: 32%;
		margin-bottom: 2%;
	}

	.fui-content {
		padding: 0rpx 30rpx 20rpx 120rpx;
		box-sizing: border-box;
		font-size: 34rpx;
		font-weight: 400;
		color: #333;
	}

	.fui-color-gray {
		color: #ccc;
	}

	.fui-pleft {
		padding-left: 120rpx;
	}
</style>
