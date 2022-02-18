<template>
	<view class="container">
		<!--内容部分-->
		<fui-list-view title="不带箭头，无点击效果" color="#777">
			<fui-list-cell @click="detail" :hover="false">
				不带箭头，无点击效果
			</fui-list-cell>
			<fui-list-cell @click="detail" :hover="false">
				不带箭头，无点击效果
			</fui-list-cell>
			<fui-list-cell @click="detail" :hover="false">
				不带箭头，无点击效果
			</fui-list-cell>
		</fui-list-view>

		<fui-list-view title="带箭头，有点击效果">
			<fui-list-cell @click="detail" :arrow="true">
				带箭头，有点击效果
			</fui-list-cell>
			<fui-list-cell @click="detail" :arrow="true">
				带箭头，有点击效果
			</fui-list-cell>
			<fui-list-cell @click="detail" :arrow="true">
				带箭头，有点击效果
			</fui-list-cell>
		</fui-list-view>

		<fui-list-view title="无上下线条" unlined="all">
			<fui-list-cell @click="detail" :arrow="true">
				无上下线条,可单独设置，改变颜色
			</fui-list-cell>
			<fui-list-cell @click="detail" :arrow="true" color="#19be6b">
				无上下线条,可单独设置，改变颜色
			</fui-list-cell>
			<fui-list-cell unlined @click="detail" :arrow="true">
				无上下线条,可单独设置，改变颜色
			</fui-list-cell>
		</fui-list-view>

		<fui-list-view title="无线条" unlined="all">
			<fui-list-cell @click="detail" unlined :size="36">
				无线条，无箭头，大字体
			</fui-list-cell>
			<fui-list-cell @click="detail" unlined :size="36">
				无线条，无箭头，大字体
			</fui-list-cell>
			<fui-list-cell @click="detail" unlined :size="36">
				无线条，无箭头，大字体
			</fui-list-cell>
			<fui-list-cell unlined @click="detail" :size="36">
				无线条，无箭头，大字体
			</fui-list-cell>
		</fui-list-view>
		<fui-list-view title="菜单列表">
			<fui-list-cell @click="detail" :arrow="true">
				<view class="fui-item-box">
					<fui-icon name="wealth-fill" :size="24" color="#ff7900"></fui-icon>
					<text class="fui-list-cell_name">我的钱包</text>
				</view>
			</fui-list-cell>
			<fui-list-cell @click="detail" :arrow="true">
				<view class="fui-item-box">
					<fui-icon name="service-fill" :size="24" color="#5677fc"></fui-icon>
					<view class="fui-list-cell_name">服务窗</view>
				</view>
			</fui-list-cell>
			<fui-list-cell @click="detail" :arrow="true">
				<view class="fui-item-box">
					<fui-icon name="explore-fill" :size="24" color="#19be6b"></fui-icon>
					<view class="fui-list-cell_name">发现</view>
					<view class="fui-ml-auto">
						<fui-tag padding="10rpx 12rpx" margin="0 30rpx 0 0" size="24rpx" type="light-green" shape="circle">探索发现</fui-tag>
					</view>
				</view>
			</fui-list-cell>
			<fui-list-cell @click="detail" :arrow="true">
				<view class="fui-item-box">
					<fui-icon name="shop-fill" :size="23" color="#ed3f14"></fui-icon>
					<view class="fui-list-cell_name">我的店铺</view>
					<view class="fui-right">进入店铺</view>
				</view>
			</fui-list-cell>
			<fui-list-cell @click="detail" :arrow="true" last="true">
				<view class="fui-item-box">
					<image src="/static/images/my/fireui.png" class="fui-logo" mode="widthFix"></image>
					<text class="fui-list-cell_name">关于</text>
					<view class="fui-right">Fire UI</view>
				</view>
			</fui-list-cell>
		</fui-list-view>

		<fui-list-view title="消息列表">
			<fui-list-cell :lineLeft="false" @click="detail">
				<view class="fui-item-box">
					<view class="fui-msg-box">
						<image src="/static/images/news/avatar_1.jpg" class="fui-msg-pic" mode="widthFix"></image>
						<view class="fui-msg-item">
							<view class="fui-msg-name">呼噜猪</view>
							<view class="fui-msg-content">上线打游戏了！</view>
						</view>
					</view>
					<view class="fui-msg-right">
						<view class="fui-msg-time">10:22</view>
						<fui-badge type="danger" class="fui-badge">9</fui-badge>
					</view>
				</view>
			</fui-list-cell>
			<fui-list-cell :lineLeft="false" @click="detail">
				<view class="fui-item-box">
					<view class="fui-msg-box">
						<image src="/static/images/news/avatar_2.jpg" class="fui-msg-pic" mode="widthFix"></image>
						<view class="fui-msg-item">
							<view class="fui-msg-name">腾讯金融VIP交流3群</view>
							<view class="fui-msg-content">[分享]我很看好的这款金融产品，推荐给你们</view>
						</view>
					</view>
					<view class="fui-msg-right">
						<view class="fui-msg-time">09:08</view>
						<fui-badge type="gray" class="fui-badge">2</fui-badge>
					</view>
				</view>
			</fui-list-cell>
			<fui-list-cell :lineLeft="false" @click="detail">
				<view class="fui-item-box">
					<view class="fui-msg-box">
						<image src="/static/images/news/3.jpg" class="fui-msg-pic" mode="widthFix"></image>
						<view class="fui-msg-item">
							<view class="fui-msg-name">客服助手</view>
							<view class="fui-msg-content">点击查看您与客服的沟通记录</view>
						</view>
					</view>
					<view class="fui-msg-right fui-right-dot">
						<view class="fui-msg-time">08:16</view>
						<fui-badge type="danger" :dot="true"></fui-badge>
					</view>
				</view>
			</fui-list-cell>
			<fui-list-cell :lineLeft="false" @click="detail">
				<view class="fui-item-box">
					<view class="fui-msg-box">
						<image src="/static/images/news/4.jpg" class="fui-msg-pic" mode="widthFix"></image>
						<view class="fui-msg-item">
							<view class="fui-msg-name">我的资产</view>
							<view class="fui-msg-content">你昨天获得了7张优惠券，总计3000元</view>
						</view>
					</view>
					<view class="fui-msg-right">
						<view class="fui-msg-time">昨天</view>
						<fui-badge type="danger" class="fui-badge">2</fui-badge>
					</view>
				</view>
			</fui-list-cell>
			<fui-list-cell :lineLeft="false" @click="detail">
				<view class="fui-item-box">
					<view class="fui-msg-box">
						<image src="/static/images/news/avatar_1.jpg" class="fui-msg-pic" mode="widthFix"></image>
						<view class="fui-msg-item">
							<view class="fui-msg-name">我的电脑</view>
							<view class="fui-msg-content">[图片]</view>
						</view>
					</view>
					<view class="fui-msg-right">
						<view class="fui-msg-time">昨天</view>
						<fui-badge type="danger" class="fui-badge">3</fui-badge>
					</view>
				</view>
			</fui-list-cell>
			<fui-list-cell :lineLeft="false" @click="detail" unlined>
				<view class="fui-item-box">
					<view class="fui-msg-box">
						<image src="/static/images/news/avatar_2.jpg" class="fui-msg-pic" mode="widthFix"></image>
						<view class="fui-msg-item">
							<view class="fui-msg-name">小短腿</view>
							<view class="fui-msg-content">[表情]</view>
						</view>
					</view>
					<view class="fui-msg-right">
						<view class="fui-msg-time">星期五</view>
						<fui-badge type="danger" class="fui-badge">2</fui-badge>
					</view>
				</view>
			</fui-list-cell>
		</fui-list-view>
		<!--内容部分-->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			detail: function() {
				this.fui.toast("click~")
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.fui-item-box {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.fui-list-cell_name {
		padding-left: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fui-ml-auto {
		margin-left: auto;
	}

	.fui-right {
		margin-left: auto;
		margin-right: 34rpx;
		font-size: 26rpx;
		color: #999;
	}

	.fui-logo {
		height: 52rpx;
		width: 52rpx;
		flex-shrink: 0;
	}

	.fui-flex {
		display: flex;
		align-items: center;
	}

	.fui-msg-box {
		display: flex;
		align-items: center;
	}

	.fui-msg-pic {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		display: block;
		margin-right: 24rpx;
		flex-shrink: 0;
	}

	.fui-msg-item {
		max-width: 500rpx;
		min-height: 80rpx;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.fui-msg-name {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 34rpx;
		line-height: 1;
		color: #262b3a;
	}

	.fui-msg-content {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 26rpx;
		line-height: 1;
		color: #9397a4;
	}

	.fui-msg-right {
		max-width: 120rpx;
		height: 88rpx;
		margin-left: auto;
		text-align: right;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	.fui-right-dot {
		height: 76rpx !important;
		padding-bottom: 10rpx !important;

	}

	.fui-msg-time {
		width: 100%;
		font-size: 24rpx;
		line-height: 24rpx;
		color: #9397a4;
	}
</style>
