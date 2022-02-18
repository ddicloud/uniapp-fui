<template>
	<view class="container">
		<view class="fui-searchbox">
			<view class="fui-search-input">
				<icon type="search" :size='13' color='#333'></icon>
				<input confirm-type="search" placeholder="大家都在搜：服装" :focus="true" auto-focus placeholder-class="fui-input-plholder"
				 class="fui-input" v-model.trim="key" @input="inputKey"/>
				<icon type="clear" :size='13' color='#bcbcbc' @tap="cleanKey" v-show="key"></icon>
			</view>
			<view class="fui-cancle" @tap="back">取消</view>
		</view>

		<view class="fui-search-history" v-show="history.length>0 && !key">
			<view class="fui-history-header">
				<view class="fui-search-title">搜索历史</view>
				<fui-icon name="delete" :size='14' color='#333' @tap="openActionSheet" class="fui-icon-delete"></fui-icon>
			</view>
			<view class="fui-history-content">
				<block v-for="(item,index) in history" :key="index">
					<fui-tag margin="0 24rpx 24rpx 0" type="gray" shape="circle">{{item}}</fui-tag>
				</block>
			</view>
		</view>
		<view v-show="key">
			<view class="fui-header">
				<view class="fui-header-left fui-noboredr">搜索 “{{key}}”</view>
			</view>
			<view class="fui-result-box">
				<block v-for="(item,index) in searchList" :key="index">
					<view class="fui-result-item" hover-class="fui-opcity" :hover-stay-time="150">
						<rich-text :nodes="item.showKey"></rich-text>
					</view>
				</block>
			</view>
		</view>

		<!-- <view class="fui-search-hot">
			<view class="fui-hot-header">
				<view class="fui-search-title">大家正在搜</view>
			</view>
			<view class="fui-hot-content">
				<block v-for="(item,index) in hot" :key="index">
					<fui-tag type="gray" shape="circle">{{item}}</fui-tag>
				</block>
			</view>
		</view> -->
		<fui-actionsheet :show="showActionSheet" :tips="tips" @click="itemClick" @cancel="closeActionSheet"></fui-actionsheet>
	</view>

</template>

<script>
	const util = require("@/utils/util.js")
	export default {
		data() {
			return {
				history: [
					"连衣裙"
				],
				hot: [
					"华为手机"
				],
				key: "",
				showActionSheet: false,
				tips: "确认清空搜索历史吗？",
				searchResult:["按照展示的列表输入关键词看效果","搜索关键词高亮显示","模拟搜索结果集","开源不易，需要鼓励","人人为我，我为人人"],
				searchList:[]
			}
		},
		methods: {
			back: function() {
				uni.navigateBack();
			},
			cleanKey: function() {
				this.key = ''
			},
			closeActionSheet: function() {
				this.showActionSheet = false
			},
			openActionSheet: function() {
				this.showActionSheet = true
			},
			itemClick: function(e) {
				let index = e.index;
				if (index == 0) {
					this.showActionSheet = false;
					this.history = []
				}
			},
			inputKey: function(e) {
				this.key = util.trim(e.detail.value);
				if (!this.key) {
					this.searchList = [];
					return;
				}
				//根据关键词查找
				let arr = []
				//实际开发中，根据搜索返回结果集，此处只是做展示提示搜索哪些文字
				this.searchResult.forEach((item) => {
					arr.push({
						key: item,
						showKey: util.replaceAll(item, this.key, `<label style="color:#E41F19">${this.key}</label>`)
					})
				})
				this.searchList = arr
			}
		}
	}
</script>

<style>
	page {
		color: #333;
		background: #fff;
	}

	.container {
		padding: 0 30rpx 30rpx 30rpx;
		box-sizing: border-box;
	}

	.fui-searchbox {
		padding: 30rpx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.fui-search-input {
		width: 100%;
		height: 66rpx;
		border-radius: 35rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		background: #f2f2f2;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
	}

	.fui-input {
		flex: 1;
		color: #333;
		padding: 0 16rpx;
		font-size: 28rpx;
	}

	.fui-input-plholder {
		font-size: 28rpx;
		color: #b2b2b2;
	}

	.fui-cancle {
		color: #888;
		font-size: 28rpx;
		padding-left: 30rpx;
		flex-shrink: 0;
	}

	.fui-history-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30rpx 0;
	}
	.fui-history-content{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.fui-icon-delete {
		padding: 10rpx;
	}

	.fui-search-title {
		font-size: 28rpx;
		font-weight: bold;
	}

	.fui-hot-header {
		padding: 30rpx 0;
	}
	
	.fui-header {
		padding: 26rpx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.fui-header-left {
		font-size: 30rpx;
		color: #222;
		border-left: 4rpx solid #EB0909;
		padding-left: 10rpx;
		word-break: break-all;
	}
	
	.fui-noboredr {
		border-left: 0 !important;
	}

	.fui-result-box {
		font-size: 28rpx;
	}
	
	.fui-result-item {
		line-height: 28rpx;
		padding: 28rpx 0;
	}
</style>