<template>
	<view class="container">
		<!--header-->
		<view class="fui-header-box" :style="{ height: height + 'px', background: 'rgba(255,255,255,' + opcity + ')' }">
			<view class="fui-header" :style="{ paddingTop: top + 'px', opacity: opcity }">商品详情</view>
			<view class="fui-header-icon" :style="{ marginTop: top + 'px' }">
				<view class="fui-icon-box" :style="{ backgroundColor: 'rgba(0, 0, 0,' + iconOpcity + ')' }" @tap="back">
					<fui-icon name="arrowleft" :size="30" :color="opcity >= 1 ? '#000' : '#fff'"></fui-icon>
				</view>

				<view class="fui-icon-box fui-icon-ml" :style="{backgroundColor: 'rgba(0, 0, 0,' + iconOpcity + ')'}" @tap.stop="openMenu">
					<fui-icon name="more-fill" :size="20" :color="opcity >= 1 ? '#000' : '#fff'"></fui-icon>
					<fui-badge type="red" :scaleRatio="0.8" absolute top="0" right="-4rpx">5</fui-badge>
				</view>

			</view>
		</view>
		<!--header-->

		<!--banner-->
		<view class="fui-banner-swiper">
			<swiper :autoplay="true" :interval="5000" :duration="150" :circular="true" :style="{ height: scrollH + 'px' }"
			 @change="bannerChange">
				<block v-for="(item, index) in banner" :key="index">
					<swiper-item :data-index="index" @tap.stop="previewImage">
						<image :src="item" class="fui-slide-image" :style="{ height: scrollH + 'px' }" />
					</swiper-item>
				</block>
			</swiper>
			<view class="fui-banner-tag">
				<fui-tag padding="12rpx 18rpx" type="translucent" shape="circleLeft" :scaleMultiple="0.82" originRight>{{ bannerIndex + 1 }}/{{ banner.length }}</fui-tag>
			</view>
		</view>

		<!--banner-->

		<view class="fui-pro-detail">
			<view class="fui-product-title fui-border-radius">
				<view class="fui-pro-pricebox fui-padding">
					<view class="fui-pro-price">
						<view>
							<text>￥</text>
							<text class="fui-price">49</text>
							<text>.00</text>
						</view>
						<fui-tag padding="10rpx 20rpx" size="24rpx" plain type="high-green" shape="circle" :scaleMultiple="0.8">新品</fui-tag>
					</view>
					<view class="fui-collection fui-size" @tap="collecting">
						<fui-icon :name="collected ? 'like-fill' : 'like'" :color="collected ? '#ff201f' : '#333'" :size="20"></fui-icon>
						<view class="fui-scale-collection" :class="{'fui-icon-red':collected}">收藏</view>
					</view>
				</view>
				<view class="fui-original-price fui-gray">
					价格
					<text class="fui-line-through">￥199.00</text>
				</view>
				<view class="fui-pro-titbox">
					<view class="fui-pro-title">谈判官明星同款耳坠韩国气质简约显脸瘦的耳环女百搭个性长款耳钉 个性水滴耳环【A2】</view>
					<button open-type="share" class="fui-share-btn fui-share-position" @tap="onShare">
						<fui-tag type="gray" shape="circleLeft" padding="12rpx 16rpx">
							<view class="fui-share-box">
								<fui-icon name="partake" color="#999" :size="15"></fui-icon>
								<text class="fui-share-text fui-gray fui-size">分享</text>
							</view>
						</fui-tag>
					</button>
				</view>
				<view class="fui-padding">
					<view class="fui-sub-title fui-size fui-gray">此商品将于2019-06-28,10点结束闪购特卖，时尚美饰联合专场</view>
					<view class="fui-sale-info fui-size fui-gray">
						<view>快递：0.00</view>
						<view>月销2000</view>
						<view>浙江杭州</view>
					</view>
				</view>
			</view>

			<view class="fui-discount-box fui-radius-all fui-mtop">
				<view class="fui-list-cell" @tap="coupon">
					<view class="fui-bold fui-cell-title">领券</view>
					<view class="fui-flex-center">
						<fui-tag type="red" shape="circle" padding="12rpx 24rpx" size="24rpx">满99减8</fui-tag>
						<fui-tag margin="0 0 0 20rpx" type="red" padding="12rpx 24rpx" size="24rpx" shape="circle">满59减5</fui-tag>
					</view>
					<view class="fui-ml-auto">
						<fui-icon name="more-fill" :size="20" color="#666"></fui-icon>
					</view>
				</view>

				<view class="fui-list-cell fui-last" @tap="showPopup">
					<view class="fui-bold fui-cell-title">促销</view>
					<view>
						<view class="fui-promotion-box">
							<fui-tag originLeft padding="12rpx 24rpx" :scaleMultiple="0.8" shape="circle" type="red" plain>多买优惠</fui-tag>
							<text>满1件，立减最低1件商品价格，包邮（限中国内地）</text>
						</view>
						<view class="fui-promotion-box">
							<fui-tag originLeft padding="12rpx 24rpx" :scaleMultiple="0.8" shape="circle" type="red" plain>满额返券</fui-tag>
							<text>满2件，立减最低2件商品价格，包邮（限中国内地）</text>
						</view>
						<view class="fui-promotion-box">
							<fui-tag originLeft padding="12rpx 24rpx" :scaleMultiple="0.8" shape="circle" type="red" plain>特别赠品</fui-tag>
							<text>满3件，立减最低3件商品价格，包邮（限中国内地）</text>
						</view>
					</view>
					<view class="fui-right">
						<fui-icon name="more-fill" :size="20" color="#666"></fui-icon>
					</view>
				</view>
			</view>

			<view class="fui-basic-info fui-mtop fui-radius-all">
				<view class="fui-list-cell" @tap="showPopup">
					<view class="fui-bold fui-cell-title">已选</view>
					<view class="fui-selected-box">个性水滴耳环【A2】,1个，可选服务</view>
					<view class="fui-ml-auto">
						<fui-icon name="more-fill" :size="20" color="#666"></fui-icon>
					</view>
				</view>
				<view class="fui-list-cell" @tap="showPopup">
					<view class="fui-bold fui-cell-title">送至</view>
					<view class="fui-addr-box">
						<view class="fui-addr-item">北京朝阳区三环到四环之间</view>
						<view class="fui-addr-item">今日23:59前完成下单，预计6月28日23:30前发货，7月1日24:00前送达</view>
					</view>
					<view class="fui-right">
						<fui-icon name="more-fill" :size="20" color="#666"></fui-icon>
					</view>
				</view>
				<view class="fui-list-cell fui-last">
					<view class="fui-bold fui-cell-title">运费</view>
					<view class="fui-selected-box">在线支付免运费</view>
				</view>
				<view class="fui-guarantee">
					<view class="fui-guarantee-item">
						<fui-icon name="circle-selected" :size="14" color="#999"></fui-icon>
						<text class="fui-pl">可配送海外</text>
					</view>
					<view class="fui-guarantee-item">
						<fui-icon name="circle-selected" :size="14" color="#999"></fui-icon>
						<text class="fui-pl">店铺发货&售后</text>
					</view>
					<view class="fui-guarantee-item">
						<fui-icon name="circle-selected" :size="14" color="#999"></fui-icon>
						<text class="fui-pl">7天无理由退货</text>
					</view>
					<view class="fui-guarantee-item">
						<fui-icon name="circle-selected" :size="14" color="#999"></fui-icon>
						<text class="fui-pl">闪电退款</text>
					</view>
					<view class="fui-guarantee-item">
						<fui-icon name="circle-selected" :size="14" color="#999"></fui-icon>
						<text class="fui-pl">极速审核</text>
					</view>
				</view>
			</view>

			<view class="fui-cmt-box fui-mtop fui-radius-all">
				<view class="fui-list-cell fui-last fui-between">
					<view class="fui-bold fui-cell-title">评价</view>
					<view class="fui-flex-center" @tap="common">
						<text class="fui-cmt-all">查看全部</text>
						<fui-icon name="more-fill" :size="20" color="#ff201f"></fui-icon>
					</view>
				</view>

				<view class="fui-cmt-content fui-padding">
					<view class="fui-cmt-user">
						<image src="/static/images/news/avatar_2.jpg" class="fui-acatar"></image>
						<view>z***9</view>
					</view>
					<view class="fui-cmt">物流很快，很适合我的风格❤</view>
					<view class="fui-attr">颜色：叠层钛钢流苏耳环（A74）</view>
				</view>

				<view class="fui-cmt-btn">
					<fui-button width="240rpx" height="64rpx" :size="24" type="black" plain shape="circle" @click="common">查看全部评价</fui-button>
				</view>
			</view>

			<view class="fui-nomore-box">
				<fui-nomore text="宝贝详情" backgroundColor="#f7f7f7"></fui-nomore>
			</view>
			<view class="fui-product-img fui-radius-all">
				<image :src="'https://www.thorui.cn/img/detail/' + (index + 1) + '.jpg'" v-for="(img, index) in 20" :key="index"
				 mode="widthFix"></image>
			</view>
			<fui-nomore text="已经到最底了" backgroundColor="#f7f7f7"></fui-nomore>
			<view class="fui-safearea-bottom"></view>
		</view>

		<!--底部操作栏-->
		<view class="fui-operation">
			<view class="fui-operation-left fui-col-5">
				<view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
					<fui-icon name="kefu" :size="22" color="#333"></fui-icon>
					<view class="fui-operation-text fui-scale-small">客服</view>
				</view>
				<view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
					<fui-icon name="shop" :size="22" color="#333"></fui-icon>
					<view class="fui-operation-text fui-scale-small">店铺</view>
				</view>
				<view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
					<fui-icon name="cart" :size="22" color="#333"></fui-icon>
					<view class="fui-operation-text fui-scale-small">购物车</view>
					<fui-badge type="red" absolute :scaleRatio="0.8" right="10rpx" top="-4rpx">9</fui-badge>
				</view>
			</view>
			<view class="fui-operation-right fui-right-flex fui-col-7 fui-btnbox-4">
				<view class="fui-flex-1">
					<fui-button height="68rpx" :size="26" type="danger" shape="circle" @click="showPopup">加入购物车</fui-button>
				</view>
				<view class="fui-flex-1">
					<fui-button height="68rpx" :size="26" type="warning" shape="circle" @click="submit">立即购买</fui-button>
				</view>
			</view>
		</view>

		<!--底部操作栏--->

		<!--顶部下拉菜单-->
		<fui-top-dropdown backgroundColor="rgba(76, 76, 76, 0.95)" :show="menuShow" :height="0" @close="closeMenu">
			<view class="fui-menu-box fui-padding fui-ptop">
				<view class="fui-menu-header" :style="{ paddingTop: top + 'px' }">功能直达</view>
				<view class="fui-menu-itembox">
					<block v-for="(item, index) in topMenu" :key="index">
						<view class="fui-menu-item" hover-class="fui-opcity" :hover-stay-time="150" @tap="btnTopMenu(index)">
							<view class="fui-badge-box">
								<fui-icon :name="item.icon" color="#fff" :size="item.size"></fui-icon>
								<fui-badge type="red" :scaleRatio="0.8" absolute right="-8rpx" v-if="item.badge">{{ item.badge }}</fui-badge>
							</view>
							<view class="fui-menu-text">{{ item.text }}</view>
						</view>
					</block>
				</view>
				<view class="fui-icon-up_box">
					<fui-icon name="up" color="#fff" :size="26" @click="closeMenu"></fui-icon>
				</view>
			</view>
		</fui-top-dropdown>
		<!---顶部下拉菜单-->

		<!--底部选择层-->
		<fui-bottom-popup :show="popupShow" @close="hidePopup">
			<view class="fui-popup-box">
				<view class="fui-product-box fui-padding">
					<image src="https://www.thorui.cn/img/product/11.jpg" class="fui-popup-img"></image>
					<view class="fui-popup-price">
						<view class="fui-amount fui-bold">￥49.00</view>
						<view class="fui-number">编号:4373299399393</view>
					</view>
				</view>
				<scroll-view scroll-y class="fui-popup-scroll">
					<view class="fui-scrollview-box">
						<view class="fui-bold fui-attr-title">颜色</view>
						<view class="fui-attr-box">
							<view class="fui-attr-item">五角星钻耳线</view>
							<view class="fui-attr-item">米子珍珠耳线</view>
							<view class="fui-attr-item">花朵镶钻耳线</view>
							<view class="fui-attr-item">扇子珍珠流苏耳线</view>
							<view class="fui-attr-item fui-attr-active">扇子珍珠流苏耳线耳线</view>
						</view>

						<view class="fui-number-box fui-bold fui-attr-title">
							<view class="fui-attr-title">数量</view>
							<fui-numberbox :max="99" :min="1" :value="value" @change="change"></fui-numberbox>
						</view>
						<view class="fui-bold fui-attr-title">尺寸</view>
						<view class="fui-attr-box">
							<view class="fui-attr-item">5cm</view>
							<view class="fui-attr-item">8cm</view>
							<view class="fui-attr-item">12cm</view>
							<view class="fui-attr-item">16cm</view>
							<view class="fui-attr-item fui-attr-active">18cm</view>
						</view>

						<view class="fui-bold fui-attr-title">保障服务</view>
						<view class="fui-attr-box">
							<view class="fui-attr-item">半年掉钻保 ￥4.0</view>
						</view>

						<view class="fui-bold fui-attr-title">只换不修</view>
						<view class="fui-attr-box">
							<view class="fui-attr-item">三月意外换￥2.0</view>
							<view class="fui-attr-item">半年意外换￥2.0</view>
						</view>
					</view>
				</scroll-view>
				<view class="fui-operation fui-operation-right fui-right-flex fui-popup-btn">
					<view class="fui-flex-1">
						<fui-button height="72rpx" :size="28" type="danger" shape="circle" @click="hidePopup">加入购物车</fui-button>
					</view>
					<view class="fui-flex-1">
						<fui-button height="72rpx" :size="28" type="warning" shape="circle" @click="submit">立即购买</fui-button>
					</view>
				</view>
				<view class="fui-right">
					<fui-icon name="close-fill" color="#999" :size="20" @click="hidePopup"></fui-icon>
				</view>
			</view>
		</fui-bottom-popup>
		<!--底部选择层-->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: 64, //header高度
				top: 26, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
				banner: [
					'https://www.thorui.cn/img/product/11.jpg',
					'https://www.thorui.cn/img/product/2.png',
					'https://www.thorui.cn/img/product/33.jpg',
					'https://www.thorui.cn/img/product/4.png',
					'https://www.thorui.cn/img/product/55.jpg',
					'https://www.thorui.cn/img/product/6.png',
					'https://www.thorui.cn/img/product/7.jpg',
					'https://www.thorui.cn/img/product/8.jpg'
				],
				bannerIndex: 0,
				topMenu: [{
						icon: 'message',
						text: '消息',
						size: 26,
						badge: 3
					},
					{
						icon: 'home',
						text: '首页',
						size: 23,
						badge: 0
					},
					{
						icon: 'people',
						text: '我的',
						size: 26,
						badge: 0
					},
					{
						icon: 'cart',
						text: '购物车',
						size: 23,
						badge: 2
					},
					{
						icon: 'kefu',
						text: '客服小蜜',
						size: 26,
						badge: 0
					},
					{
						icon: 'feedback',
						text: '我要反馈',
						size: 23,
						badge: 0
					},
					{
						icon: 'share',
						text: '分享',
						size: 26,
						badge: 0
					}
				],
				menuShow: false,
				popupShow: false,
				value: 1,
				collected: false
			};
		},
		onLoad: function(options) {
			let obj = {};
			// #ifdef MP-WEIXIN
			obj = wx.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-BAIDU
			obj = swan.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-ALIPAY
			my.hideAddToDesktopMenu();
			// #endif

			setTimeout(() => {
				uni.getSystemInfo({
					success: res => {
						this.width = obj.left || res.windowWidth;
						this.height = obj.top ? obj.top + obj.height + 8 : res.statusBarHeight + 44;
						this.top = obj.top ? obj.top + (obj.height - 32) / 2 : res.statusBarHeight + 6;
						this.scrollH = res.windowWidth;
					}
				});
			}, 0);
		},
		methods: {
			bannerChange: function(e) {
				this.bannerIndex = e.detail.current;
			},
			previewImage: function(e) {
				let index = e.currentTarget.dataset.index;
				uni.previewImage({
					current: this.banner[index],
					urls: this.banner
				});
			},
			back: function() {
				uni.navigateBack();
			},
			openMenu: function() {
				this.menuShow = true;
			},
			closeMenu: function() {
				this.menuShow = false;
			},
			showPopup: function() {
				this.popupShow = true;
			},
			hidePopup: function() {
				this.popupShow = false;
			},
			change: function(e) {
				this.value = e.value;
			},
			collecting: function() {
				this.collected = !this.collected;
			},
			common: function() {
				this.fui.toast('功能开发中~');
			},
			btnTopMenu(index) {
				this.closeMenu()
				if (index == 4) {
					uni.makePhoneCall({
						phoneNumber: "10086"
					})
				} else if (index == 6) {
                    // #ifdef MP
                    this.common()
                    // #endif
					
					// #ifndef MP
					this.onShare()
					// #endif
				} else {
					let url = {
						0: '../message/message',
						1: "../mall/mall",
						2: '../my/my',
						3: '../shopcart/shopcart',
						5: '/pages/my/feedback/feedback?page=mall'
					} [index];
					url && this.fui.href(url)
				}
			},
			submit() {
				this.popupShow = false;
				uni.navigateTo({
					url: '../submitOrder/submitOrder'
				});
			},
			coupon() {
				uni.navigateTo({
					url: '../coupon/coupon'
				});
			},
			onShare() {
				//#ifdef APP-PLUS
				plus.share.sendWithSystem({
						content: 'ThorUI商城模板',
						href: 'https://www.thorui.cn/'
					},
					function() {
						console.log('分享成功');
					},
					function(e) {
						console.log('分享失败：' + JSON.stringify(e));
					}
				);
				//#endif
				// #ifdef H5
				location.href = "https://www.thorui.cn/"
				// #endif
			}
		},
		onPageScroll(e) {
			let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
			let opcity = scroll / this.scrollH;
			if (this.opcity >= 1 && opcity >= 1) {
				return;
			}
			this.opcity = opcity;
			this.iconOpcity = 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity);
		}
	};
</script>

<style>
	page {
		background-color: #f7f7f7;
	}

	.container {
		padding-bottom: 110rpx;
	}

	.fui-header-box {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 995;
	}

	.fui-header {
		width: 100%;
		font-size: 18px;
		line-height: 18px;
		font-weight: 500;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fui-header-icon {
		position: fixed;
		top: 0;
		left: 10px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		height: 32px;
		transform: translateZ(0);
		z-index: 9999;
	}

	.fui-header-icon .fui-badge {
		background: #e41f19 !important;
		position: absolute;
		right: -4px;
	}

	.fui-icon-ml {
		margin-left: 20rpx;
	}

	.fui-icon-box {
		position: relative;
		height: 20px !important;
		width: 20px !important;
		padding: 6px !important;

		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fui-banner-swiper {
		position: relative;
	}

	.fui-banner-tag {
		position: absolute;
		color: #fff;
		bottom: 30rpx;
		right: 0;
	}

	.fui-slide-image {
		width: 100%;
		display: block;
	}

	/*顶部菜单*/

	.fui-menu-box {
		box-sizing: border-box;
	}

	.fui-menu-header {
		font-size: 34rpx;
		color: #fff;
		height: 32px;
		display: flex;
		align-items: center;
	}

	.fui-menu-itembox {
		color: #fff;
		padding: 40rpx 10rpx 0 10rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		font-size: 26rpx;
	}

	.fui-menu-item {
		width: 22%;
		height: 160rpx;
		border-radius: 24rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		background: rgba(0, 0, 0, 0.4);
		margin-right: 4%;
		margin-bottom: 4%;
	}

	.fui-menu-item:nth-of-type(4n) {
		margin-right: 0;
	}

	.fui-badge-box {
		position: relative;
	}

	.fui-badge-box .fui-badge-class {
		position: absolute;
		top: -8px;
		right: -8px;
	}

	.fui-msg-badge {
		top: -10px;
	}

	.fui-icon-up_box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fui-menu-text {
		padding-top: 12rpx;
	}

	.fui-opcity .fui-menu-text,
	.fui-opcity .fui-badge-box {
		opacity: 0.5;
		transition: opacity 0.2s ease-in-out;
	}

	/*顶部菜单*/

	/*内容 部分*/

	.fui-padding {
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.fui-ml-auto {
		margin-left: auto;
	}

	/* #ifdef H5 */
	.fui-ptop {
		padding-top: 44px;
	}

	/* #endif */

	.fui-size {
		font-size: 24rpx;
		line-height: 24rpx;
	}

	.fui-gray {
		color: #999;
	}

	.fui-icon-red {
		color: #ff201f;
	}

	.fui-border-radius {
		border-bottom-left-radius: 24rpx;
		border-bottom-right-radius: 24rpx;
		overflow: hidden;
	}

	.fui-radius-all {
		border-radius: 24rpx;
		overflow: hidden;
	}

	.fui-mtop {
		margin-top: 26rpx;
	}

	.fui-pro-detail {
		box-sizing: border-box;
		color: #333;
	}

	.fui-product-title {
		background: #fff;
		padding: 30rpx 0;
	}

	.fui-pro-pricebox {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #ff201f;
		font-size: 36rpx;
		font-weight: bold;
		line-height: 44rpx;
	}

	.fui-pro-price {
		display: flex;
		align-items: center;
	}

	.fui-price {
		font-size: 58rpx;
	}

	.fui-original-price {
		font-size: 26rpx;
		line-height: 26rpx;
		padding: 10rpx 30rpx;
		box-sizing: border-box;
	}

	.fui-line-through {
		text-decoration: line-through;
	}

	.fui-collection {
		color: #333;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		height: 44rpx;
	}

	.fui-scale-collection {
		transform: scale(0.7);
		transform-origin: center 90%;
		line-height: 24rpx;
		font-weight: normal;
		margin-top: 4rpx;
	}

	.fui-pro-titbox {
		font-size: 32rpx;
		font-weight: 500;
		position: relative;
		padding: 0 150rpx 0 30rpx;
		box-sizing: border-box;
	}

	.fui-pro-title {
		padding-top: 20rpx;
	}

	.fui-share-btn {
		display: block;
		background: transparent;
		margin: 0;
		padding: 0;
		border-radius: 0;
		border: 0;
	}

	.fui-share-btn::after {
		border: 0;
	}

	.fui-share-box {
		display: flex;
		align-items: center;
	}

	.fui-share-position {
		position: absolute;
		right: 0;
		top: 30rpx;
	}

	.fui-share-text {
		padding-left: 8rpx;
	}

	.fui-sub-title {
		padding: 20rpx 0;
		line-height: 32rpx;
	}

	.fui-sale-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 30rpx;
	}

	.fui-discount-box {
		background: #fff;
	}

	.fui-list-cell {
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		font-size: 26rpx;
		line-height: 26rpx;
		padding: 36rpx 30rpx;
		box-sizing: border-box;
	}

	.fui-right {
		position: absolute;
		right: 30rpx;
		top: 30rpx;
	}

	.fui-top40 {
		top: 40rpx !important;
	}

	.fui-bold {
		font-weight: bold;
	}

	.fui-list-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 126rpx;
	}

	.fui-last::after {
		border-bottom: 0 !important;
	}

	.fui-flex-center {
		display: flex;
		align-items: center;
	}


	.fui-cell-title {
		width: 66rpx;
		padding-right: 30rpx;
		flex-shrink: 0;
	}

	.fui-promotion-box {
		display: flex;
		align-items: center;
		padding: 10rpx 0;
		width: 80%;
	}

	.fui-promotion-box text {
		width: 70%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.fui-basic-info {
		background: #fff;
	}

	.fui-addr-box {
		width: 76%;
	}

	.fui-addr-item {
		padding: 10rpx;
		line-height: 34rpx;
	}

	.fui-guarantee {
		background: #fdfdfd;
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx 30rpx 30rpx 30rpx;
		font-size: 24rpx;
	}

	.fui-guarantee-item {
		color: #999;
		padding-right: 30rpx;
		padding-top: 10rpx;
	}

	.fui-pl {
		padding-left: 4rpx;
	}

	.fui-cmt-box {
		background: #fff;
	}

	.fui-between {
		justify-content: space-between !important;
	}

	.fui-cmt-all {
		color: #ff201f;
		padding-right: 8rpx;
	}

	.fui-cmt-content {
		font-size: 26rpx;
	}

	.fui-cmt-user {
		display: flex;
		align-items: center;
	}

	.fui-acatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 30rpx;
		display: block;
		margin-right: 16rpx;
	}

	.fui-cmt {
		padding: 14rpx 0;
	}

	.fui-attr {
		font-size: 24rpx;
		color: #999;
		padding: 6rpx 0;
	}

	.fui-cmt-btn {
		padding: 50rpx 0 30rpx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fui-nomore-box {
		padding-top: 10rpx;
	}

	.fui-product-img {
		display: flex;
		flex-direction: column;
		transform: translateZ(0);
	}

	.fui-product-img image {
		width: 100%;
		display: block;
	}

	/*底部操作栏*/

	.fui-col-7 {
		width: 58.33333333%;
	}

	.fui-col-5 {
		width: 41.66666667%;
	}

	.fui-operation {
		width: 100%;
		height: 100rpx;
		background: rgba(255, 255, 255, 0.98);
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 10;
		bottom: 0;
		left: 0;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.fui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}

	.fui-operation::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1rpx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.fui-operation-left {
		display: flex;
		align-items: center;
	}

	.fui-operation-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
	}

	.fui-operation-text {
		font-size: 22rpx;
		color: #333;
	}

	.fui-opacity {
		opacity: 0.5;
	}

	.fui-scale-small {
		transform: scale(0.9);
		transform-origin: center center;
	}

	.fui-operation-right {
		height: 100rpx;
		padding-top: 0;
	}

	.fui-right-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fui-flex-1 {
		flex: 1;
		padding: 16rpx;
	}

	/*底部操作栏*/

	/*底部选择弹层*/

	.fui-popup-class {
		border-top-left-radius: 24rpx;
		border-top-right-radius: 24rpx;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.fui-popup-box {
		position: relative;
		padding: 30rpx 0 100rpx 0;
	}

	.fui-popup-btn {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	/* .fui-popup-btn .fui-btn-class {
		width: 90% !important;
		display: block !important;
		font-size: 28rpx !important;
	} */

	/* .fui-icon-close {
		position: absolute;
		top: 30rpx;
		right: 30rpx;
	} */

	.fui-product-box {
		display: flex;
		align-items: flex-end;
		font-size: 24rpx;
		padding-bottom: 30rpx;
	}

	.fui-popup-img {
		height: 200rpx;
		width: 200rpx;
		border-radius: 24rpx;
		display: block;
	}

	.fui-popup-price {
		padding-left: 20rpx;
		padding-bottom: 8rpx;
	}

	.fui-amount {
		color: #ff201f;
		font-size: 36rpx;
	}

	.fui-number {
		font-size: 24rpx;
		line-height: 24rpx;
		padding-top: 12rpx;
		color: #999;
	}

	.fui-popup-scroll {
		height: 600rpx;
		font-size: 26rpx;
	}

	.fui-scrollview-box {
		padding: 0 30rpx 60rpx 30rpx;
		box-sizing: border-box;
	}

	.fui-attr-title {
		padding: 10rpx 0;
		color: #333;
	}

	.fui-attr-box {
		font-size: 0;
		padding: 20rpx 0;
	}

	.fui-attr-item {
		max-width: 100%;
		min-width: 200rpx;
		height: 64rpx;
		display: -webkit-inline-flex;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: #f7f7f7;
		padding: 0 26rpx;
		box-sizing: border-box;
		border-radius: 32rpx;
		margin-right: 20rpx;
		margin-bottom: 20rpx;
		font-size: 26rpx;
	}

	.fui-attr-active {
		background: #fcedea !important;
		color: #e41f19;
		font-weight: bold;
		position: relative;
	}

	.fui-attr-active::after {
		content: '';
		position: absolute;
		border: 1rpx solid #e41f19;
		width: 100%;
		height: 100%;
		border-radius: 40rpx;
		left: 0;
		top: 0;
	}

	.fui-number-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 0 30rpx 0;
		box-sizing: border-box;
	}

	/*底部选择弹层*/
</style>
