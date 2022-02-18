<template>
	<view class="fui-container">
		<!-- <view class="fui-extend-box">
			<view class="fui-extend-item">
				<view class="fui-title fui-light">Tabs标签页</view>
				<view class="fui-sub-title">tabs标签页，支持设置字体颜色，字体大小，背景色，高度等</view>
				<view class="fui-footer">
					<view padding="12rpx 24rpx" size="24rpx" type="white" shape="circle">查看详情</view>
					<view class="">
						<button open-type="share" class="fui-btn">
							<fui-icon name="partake" color="#fff" :size="20"></fui-icon>
						</button>
					</view>
				</view>
			</view>
		</view> -->
		
	<fui-skeleton v-if="skeletonShow" backgroundColor="#fafafa" borderRadius="10rpx"></fui-skeleton>
	<view class="container fui-skeleton">
		<image src="https://www.fireui.cn/img/wait.gif" mode="widthFix" class="fui-banner fui-skeleton-rect"></image>
		<view class="fui-text">
			<text class="fui-skeleton-rect">---我知道你会来，所以我会等</text>
		</view>
		<view class="fui-view">
			<view class="fui-cell">
				<view class="fui-title fui-skeleton-rect">组件文档地址</view>
				<view class="fui-link fui-skeleton-fillet" @tap="getLink" data-link="https://fireui.cn/doc/">https://fireui.cn/doc/</view>
			</view>
			<view class="fui-cell">
				<view class="fui-title fui-skeleton-rect">uni-app版本GitHub地址：</view>
				<view class="fui-link fui-skeleton-fillet" @tap="getLink" data-link="https://ext.dcloud.net.cn/plugin?id=556">https://ext.dcloud.net.cn/plugin?id=556</view>
			</view>
			<view class="fui-cell">
				<view class="fui-title fui-skeleton-rect">uni-app版本插件市场地址：</view>
				<view class="fui-link fui-skeleton-fillet" @tap="getLink" data-link="https://ext.dcloud.net.cn/plugin?id=556">https://ext.dcloud.net.cn/plugin?id=556</view>
			</view>
			<view class="fui-cell">
				<view class="fui-title fui-skeleton-rect">小程序p版本GitHub地址：</view>
				<view class="fui-link fui-skeleton-fillet" @tap="getLink" data-link="https://github.com/dingyong0214/ThorU">https://github.com/dingyong0214/ThorU</view>
			</view>
			<view class="fui-cell">
				<view class="fui-title fui-skeleton-rect">小程序版本插件市场地址：</view>
				<view class="fui-link fui-skeleton-fillet" @tap="getLink" data-link="https://ext.dcloud.net.cn/plugin?id=569">https://ext.dcloud.net.cn/plugin?id=569</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	const fireui=require("@/components/common/fui-clipboard/fui-clipboard.js")
	export default {
		data() {
			return {
				skeletonShow:true
			}
		},
		onLoad(){
			setTimeout(()=>{
				this.skeletonShow=false
			},1800);
		},
		methods: {
			getLink(e){
				let link=e.currentTarget.dataset.link
				fireui.getClipboardData(link,(res) =>{
					// #ifdef H5 || MP-ALIPAY
					if(res){
						this.fui.toast("链接复制成功")
					}else{
						this.fui.toast("链接复制失败")
					}
					// #endif
				})
			}
		}
	}
</script>

<style>
	.container{
		padding-bottom: 80rpx;
	}
	.fui-banner{
		width: 100%;
		height:375rpx;
	}
	.fui-text{
		width: 100%;
		padding: 12rpx 30rpx 20rpx;
		box-sizing: border-box;
		color: #B3B3B3;
		font-size: 26rpx;
		text-align:right;
		margin-top: 8rpx;
	}
	.fui-view{
		width:100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
	}
	.fui-cell{
		padding: 24rpx 0;
		color: #555;
	}
	.fui-title{
		padding: 0 8rpx;
		box-sizing: border-box;
		display: inline-block;
	}
	.fui-link{
		width:100%;
		padding: 30rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: 0px 3rpx 20rpx rgba(183,183,183,0.1);
		border-radius: 10rpx;
		color: #06c;
		margin-top: 20rpx;
		word-break: break-all;
	}
    /* .fui-container{
		 width:100%;
		 padding:40rpx 30rpx;
		 box-sizing: border-box;
         display:flex;
		 flex-direction:row;
		 flex-wrap:wrap;
		 justify-content:space-between;
		 }
		 .fui-extend-box{
			 flex:1;
			 margin-right:10rpx;
		 }
		 .fui-extend-box:last-child{
			 margin-right:0;
		 }
		 .fui-extend-item{
			 width:100%;
			 padding:30rpx 20rpx;
			 margin-bottom:10rpx;
			 border-radius: 20rpx;
			 box-sizing: border-box;
			 color:#FFF;
			 font-family: 'Microsoft YaHei';
			 text-align: justify;
			 word-break:break-all;
			 word-wrap:break-word;
			 position:relative;
		 }
		 .fui-extend-item::before{
			 content: '';
			 position:absolute;
			 width:100%;
			 height:100%;
			 left:0;
			 top:0;
			 background:#D2B48C;
			 border-radius:20rpx;
		 }
		 .fui-title{
			 font-size: 40rpx;
			 line-height:40rpx;
			 font-weight:bold;
			 position:relative;
		 }
		 .fui-sub-title{
			 font-size:32rpx;
			 padding-top:30rpx;
			 color:#fff;
			 position:relative;
			 z-index:10;
		 }
		 .fui-footer{
			 padding-top:60rpx;
			 display:flex;
			 align-items: center;
			 justify-content:space-between;
			 position: relative;
			 z-index: 10;
			 height: 44rpx;
		 }
		 .fui-btn{
			 background: transparent !important;
			 padding: 0 12rpx;
			 margin: 0;
			 display: inline;
			 border: 0;
		 } */
</style>
