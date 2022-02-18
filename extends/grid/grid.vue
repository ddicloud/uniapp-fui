<template>
	<view class="container">
		<view class="fui-title">
			Grid-2列
		</view>
		<fui-grid>
			<block v-for="(item,index) in dataList" :key="index">
				<fui-grid-item :cell="2" @click="detail">
					<view class="fui-grid-icon">
						<iconfont :className="item.name" :size="item.size" :color="item.color"></iconfont>
					</view>
					<text class="fui-grid-label">{{item.name}}</text>
				</fui-grid-item>
			</block>
		</fui-grid>

		<view class="fui-title">
			Grid-3列
		</view>
		<fui-grid>
			<block v-for="(item,index) in dataList" :key="index">
				<fui-grid-item :cell="3" @click="detail">
					<view class="fui-grid-icon">
						<iconfont :className="item.name" :size="item.size" :color="item.color"></iconfont>
					</view>
					<text class="fui-grid-label">{{item.name}}</text>
				</fui-grid-item>
			</block>
		</fui-grid>

		<view class="fui-title">
			Grid-4列
		</view>
		<fui-grid>
			<block v-for="(item,index) in dataList" :key="index">
				<fui-grid-item :cell="4" @click="detail">
					<view class="fui-grid-icon">
						<iconfont :className="item.name" :size="item.size" :color="item.color"></iconfont>
					</view>
					<text class="fui-grid-label">{{item.name}}</text>
				</fui-grid-item>
			</block>
		</fui-grid>

		<view class="fui-title">
			Grid-5列
		</view>
		<fui-grid>
			<block v-for="(item,index) in iconList" :key="index">
				<fui-grid-item :cell="5" backgroundColor="#fcebef" @click="detail">
					<view class="fui-grid-icon">
						<iconfont :className="item.name" :size="item.size" color="#8a5966"></iconfont>
					</view>
					<text class="fui-grid-label fui-grid-label-5">{{item.name}}</text>
				</fui-grid-item>
			</block>
		</fui-grid>
		<view class="fui-title">
			Grid-5列
		</view>
		<fui-grid>
			<block v-for="(item,index) in iconList" :key="index">
				<fui-grid-item :cell="5" @click="detail">
					<view class="fui-grid-icon">
						<iconfont :className="item.name" :size="item.size" color="#8a5966"></iconfont>
					</view> 
					<text class="fui-grid-label fui-grid-label-5">{{item.name}}</text>
				</fui-grid-item>
			</block>
		</fui-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconList: [{
                           "name": "icon-meiyouyouhuiquan",
                           "size": 20
                       },
                       {
                           "name": "icon-jingweidu",
                           "size": 20
                       },
                       {
                           "name": "icon-dailishang",
                           "size": 20
                       },
                       {
                           "name": "icon-yewutongji",
                           "size": 20
                       },
                       {
                           "name": "icon-yewuyuan",
                           "size": 20
                       },
                       {
                           "name": "icon-yewutongji1",
                           "size": 20
                       },
                       {
                           "name": "icon-yewuyuan1",
                           "size": 20
                       },
                       {
                           "name": "icon-shebeiguanli",
                           "size": 20
                       },
                       {
                           "name": "icon-xiazaibaocuncunchuxianxing1",
                           "size": 20
                       },
                       {
                           "name": "icon-xiazaibaocuncunchuxianxing",
                           "size": 20
                       },
                       {
                           "name": "icon-guanzhuangji",
                           "size": 20
                       },
                       {
                           "name": "icon-shang",
                           "size": 20
                       },
                       {
                           "name": "icon-xiala1",
                           "size": 20
                       },
                       {
                           "name": "icon-qiyong",
                           "size": 20
                       },
                       {
                           "name": "icon-yinyue",
                           "size": 20
                       },
                       {
                           "name": "icon-huishou2",
                           "size": 20
                       },
                       {
                           "name": "icon-jifenduihuan",
                           "size": 20
                       },
                       {
                           "name": "icon-yizhifu3",
                           "size": 20
                       },
                       {
                           "name": "icon-yiwancheng2",
                           "size": 20
                       },
                       {
                           "name": "icon-yiwancheng3",
                           "size": 20
                       },
                       {
                           "name": "icon-zichanrizhi",
                           "size": 20
                       },
                       {
                           "name": "icon-jiageweihu",
                           "size": 20
                       }],
				dataList: [ {
                           "name": "icon-meiyouyouhuiquan",
                           "size": 20
                       },
                       {
                           "name": "icon-jingweidu",
                           "size": 20
                       },
                       {
                           "name": "icon-dailishang",
                           "size": 20
                       },
                       {
                           "name": "icon-yewutongji",
                           "size": 20
                       },
                       {
                           "name": "icon-yewuyuan",
                           "size": 20
                       },
                       {
                           "name": "icon-yewutongji1",
                           "size": 20
                       },
                       {
                           "name": "icon-yewuyuan1",
                           "size": 20
                       },
                       {
                           "name": "icon-shebeiguanli",
                           "size": 20
                       },
                       {
                           "name": "icon-xiazaibaocuncunchuxianxing1",
                           "size": 20
                       },
                       {
                           "name": "icon-xiazaibaocuncunchuxianxing",
                           "size": 20
                       },
                       {
                           "name": "icon-guanzhuangji",
                           "size": 20
                       },
                       {
                           "name": "icon-shang",
                           "size": 20
                       },
                       {
                           "name": "icon-xiala1",
                           "size": 20
                       },
                       {
                           "name": "icon-qiyong",
                           "size": 20
                       },
                       {
                           "name": "icon-yinyue",
                           "size": 20
                       },
                       {
                           "name": "icon-huishou2",
                           "size": 20
                       },
                       {
                           "name": "icon-jifenduihuan",
                           "size": 20
                       },
                       {
                           "name": "icon-yizhifu3",
                           "size": 20
                       },
                       {
                           "name": "icon-yiwancheng2",
                           "size": 20
                       },
                       {
                           "name": "icon-yiwancheng3",
                           "size": 20
                       },
                       {
                           "name": "icon-zichanrizhi",
                           "size": 20
                       },
                       {
                           "name": "icon-jiageweihu",
                           "size": 20
                       }  
				]
			}
		},
		methods: {
			detail: function(e) {
				this.fui.toast("click~");
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.fui-title {
		padding: 50rpx 30rpx 30rpx 30rpx;
		font-size: 32rpx;
		color: #333;
		box-sizing: border-box;
		font-weight: bold;
		clear: both;
	}

	.fui-grid-icon {
		width: 64rpx;
		height: 64rpx;
		margin: 0 auto;
		text-align: center;
		vertical-align: middle;
	}


	

	.fui-grid-label {
		display: block;
		text-align: center;
		font-weight: 400;
		color: #333;
		font-size: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 10rpx;
	}
	.fui-grid-label-5 {
		margin-top: 0 !important;
		color: #8a5966 !important;
	}
</style>
