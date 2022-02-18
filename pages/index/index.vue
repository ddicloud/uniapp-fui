<template>
	<view class="container">
	  <view class="page_bd page_bd_spacing">
	  	<view class="kind-list">
	  		<view class="kind-list_item" v-for="(item, index) in list" :key="index">
	  			<view :id="item.id" class="fui-flex kind-list_item-hd" :class="{ 'kind-list_item-hd_show': item.open }" @tap="kindToggle">
	  				<view class="fui-flex_item">{{ item.name }}</view>
	  			</view>
	  			<view class="kind-list_item-bd" :class="{ 'kind-list_item-bd_show': item.open }">
	  				<view class="fui-cells" :class="{ 'fui-cells_show': item.open }">
	  					<block v-for="(page, index2) in item.pages" :key="index2">
	  						<navigator :url="page.page" class="fui-cell fui-cell_access">
	  							<view class="fui-cell_bd">{{ page.name }}</view>
	  							<view class="fui-cell_ft fui-cell_ft_in-access"></view>
	  						</navigator>
	  					</block>
	  				</view>
	  			</view>
	  		</view>
	  	</view>
	  </view>
	</view>
</template>

<script>
	const fireui = require('@/components/common/fui-clipboard/fui-clipboard.js');
	import {
		mapActions,
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				platform: 'uni-app',
				list: [],
				listOnline: [{
						id: 'basic',
						name: '基础组件',
						open: false,
						pages: [{
								name: 'Color 色彩',
								page: '/pages/index/color/color'
							},
							{
								name: 'Flex 布局',
								page: '/pages/index/flex/flex'
							},
							{
								name: 'Icon 图标',
								page: '/extends/icon/icon'
							},
							{
								name: 'Button 按钮',
								page: '/extends/button/button'
							},
							{
								name: 'Tag 标签',
								page: '/extends/tag/tag'
							},
							{
								name: 'Badge 徽章',
								page: '/extends/badge/badge'
							},
							{
								name: 'List 列表',
								page: '/extends/list/list'
							},
							{
								name: 'Card 卡片',
								page: '/extends/card/card'
							},
							{
								name: 'Grid 宫格',
								page: '/extends/grid/grid'
							},
							{
								name: 'Loading 加载',
								page: '/extends/loading/loading'
							},
							{
								name: 'Footer 页脚',
								page: '/extends/footer/footer'
							},
							{
								name: 'Layout 布局',
								page: '/pages/index/layout/layout'
							}	
						]
					},
					{
						id: 'map',
						name: '地图',
						open: false,
						pages: [
							// #ifndef MP-QQ
							{
								name: '拖拽定位',
								page: '/pages/index/location/location'
							},
							{
								name: '周边兴趣点',
								page: '/pages/index/maps/maps'
							},
							// #endif
							{
								name: '地址解析',
								page: '/pages/index/longlat/longlat'
							},
							{
								name: '天气',
								page: '/pages/index/weather/weather'
							}
						]
					},
					{
						id: 'index',
						name: '索引列表',
						open: false,
						pages: [{
								name: '城市选择',
								page: '/pages/index/selectCity/selectCity'
							},
							{
								name: '索引列表',
								page: '/pages/index/indexList/indexList'
							},
							{
								name: '索引&吸顶效果',
								page: '/pages/index/contacts/contacts'
							}
						]
					},
					{
						id: 'nav',
						name: '三级联动',
						open: false,
						pages: [
							// #ifndef MP-ALIPAY
							{
								name: 'picker三级联动',
								page: '/pages/index/picker/picker'
							},
							// #endif
							{
								name: 'picker-view三级联动',
								page: '/pages/index/picker-view/picker-view'
							}
						]
					},
					{
						id: 'canvas',
						name: '二维码生成',
						open: false,
						pages: [{
							name: '二维码生成',
							page: '/pages/index/qrcode/qrcode'
						}]
					},
					{
						id: 'drawer',
						name: 'drawer抽屉',
						open: false,
						pages: [{
							name: 'drawer抽屉',
							page: '/pages/index/drawer/drawer'
						}]
					},
					{
						id: 'swipe',
						name: '滑动菜单',
						open: false,
						pages: [{
							name: '滑动菜单',
							page: '/pages/index/swipe-action/swipe-action'
						}]
					},
					{
						id: 'class',
						name: '分类菜单',
						open: false,
						pages: [{
								name: '顶部选项卡',
								page: '/pages/index/navbar/navbar'
							},
							{
								name: '垂直分类',
								page: '/pages/index/mall/classify/classify'
							},
							{
								name: '垂直分类联动',
								page: '/pages/index/classify/classify'
							}
						]
					},
					{
						id: 'refresh',
						name: '上拉加载下拉刷新',
						open: false,
						pages: [{
								name: '新闻列表',
								page: '/pages/index/news/news'
							},
							{
								name: '商品列表',
								page: '/pages/index/product/product'
							}, // #ifdef APP-PLUS
							{
								name: '商品列表Nvue',
								page: '/pages/index/productNvue/productNvue'
							}
							// #endif
						]
					},
					{
						id: 'msgTip',
						name: '消息提示',
						open: false,
						pages: [{
							name: '消息提示',
							page: '/pages/index/msgTip/msgTip'
						}]
					},
					{
						id: 'sticky',
						name: '吸顶容器',
						open: false,
						pages: [{
							name: '吸顶容器',
							page: '/extends/sticky/sticky'
						}]
					},
					{
						id: 'keyboard',
						name: '数字键盘',
						open: false,
						pages: [{
							name: '数字键盘',
							page: '/extends/keyboard/keyboard'
						}]
					},
					{
						id: 'timeaxis',
						name: '时间轴',
						open: false,
						pages: [{
							name: '时间轴',
							page: '/extends/timeaxis/timeaxis'
						}]
					},
					{
						id: 'rollingNews',
						name: '滚动消息',
						open: false,
						pages: [{
							name: '滚动消息',
							page: '/extends/rollingNews/rollingNews'
						}]
					},
					{
						id: 'popup',
						name: '弹层下拉选择',
						open: false,
						pages: [{
							name: '弹层下拉选择',
							page: '/extends/popup/popup'
						}]
					},
					{
						id: 'actionsheet',
						name: '操作菜单',
						open: false,
						pages: [{
							name: '操作菜单',
							page: '/extends/actionsheet/actionsheet'
						}]
					},
					{
						id: 'numberbox',
						name: '数字框',
						open: false,
						pages: [{
							name: '数字框',
							page: '/extends/numberbox/numberbox'
						}]
					},
					{
						id: 'rate',
						name: '评分',
						open: false,
						pages: [{
							name: '评分',
							page: '/extends/rate/rate'
						}]
					},
					{
						id: 'modal',
						name: '弹框',
						open: false,
						pages: [{
							name: '弹框',
							page: '/extends/modal/modal'
						}]
					},
					{
						id: 'countdown',
						name: '倒计时',
						open: false,
						pages: [{
							name: '倒计时',
							page: '/extends/countdown/countdown'
						}]
					},
					{
						id: 'divider',
						name: '分隔符',
						open: false,
						pages: [{
							name: '分隔符',
							page: '/extends/divider/divider'
						}]
					},
					{
						id: 'carousel',
						name: '卡片轮播',
						open: false,
						pages: [{
							name: '卡片轮播',
							page: '/extends/carousel/carousel'
						}]
					},
					{
						id: 'goTop',
						name: '回到顶部',
						open: false,
						pages: [{
							name: '回到顶部',
							page: '/extends/goTop/goTop'
						}]
					},
					{
						id: 'alert',
						name: 'alert弹窗',
						open: false,
						pages: [{
							name: 'alert弹窗',
							page: '/extends/alert/alert'
						}]
					},
					{
						id: 'nodata',
						name: '无数据显示',
						open: false,
						pages: [{
							name: '无数据显示',
							page: '/extends/nodata/nodata'
						}]
					},
					{
						id: 'toast',
						name: 'toast提示',
						open: false,
						pages: [{
							name: 'toast提示',
							page: '/extends/toast/toast'
						}]
					},
					{
						id: 'formValidation',
						name: '表单验证',
						open: false,
						pages: [{
							name: '表单验证',
							page: '/extends/formValidation/formValidation'
						}]
					},
					{
						id: 'picker-dateTime',
						name: '日期时间选择',
						open: false,
						pages: [{
							name: '日期时间选择',
							page: '/extends/picker-dateTime/picker-dateTime'
						}]
					},
					{
						id: 'clipboard',
						name: '复制文本',
						open: false,
						pages: [{
							name: '复制文本',
							page: '/extends/clipboard/clipboard'
						}]
					},
					{
						id: 'fab',
						name: '悬浮按钮',
						open: false,
						pages: [{
							name: '悬浮按钮',
							page: '/extends/fab/fab'
						}]
					},
					{
						id: 'tabbar',
						name: 'tabbar',
						open: false,
						pages: [{
							name: 'tabbar',
							page: '/extends/tabbar/tabbar'
						}]
					},
					{
						id: 'tabs',
						name: 'tabs标签页',
						open: false,
						pages: [{
							name: 'tabs标签页',
							page: '/extends/tabs/tabs'
						}]
					},
					{
						id: 'collapse',
						name: '折叠面板',
						open: false,
						pages: [{
							name: '折叠面板',
							page: '/extends/collapse/collapse'
						}]
					},
					{
						id: 'upload',
						name: '图片上传',
						open: false,
						pages: [{
							name: '图片上传',
							page: '/extends/upload/upload'
						}]
					},
					{
						id: 'skeleton',
						name: '骨架屏',
						open: false,
						pages: [{
							name: '骨架屏',
							page: '/extends/skeleton/skeleton'
						}]
					},
					{
						id: 'calendar',
						name: '日历',
						open: false,
						pages: [{
							name: '日历',
							page: '/extends/calendar/calendar'
						}]
					},
					{
						id: 'steps',
						name: '步骤条',
						open: false,
						pages: [{
							name: '步骤条',
							page: '/extends/steps/steps'
						}]
					},
					{
						id: 'drawers',
						name: 'drawer抽屉',
						open: false,
						pages: [{
							name: 'drawer抽屉',
							page: '/extends/drawer/drawer'
						}]
					},
					{
						id: 'swipeAction',
						name: '滑动菜单',
						open: false,
						pages: [{
							name: '滑动菜单',
							page: '/extends/swipeAction/swipeAction'
						}]
					},
					{
						id: 'bottom-navigation',
						name: '底部导航菜单',
						open: false,
						pages: [{
							name: '滑底部导航菜单',
							page: '/extends/bottom-navigation/bottom-navigation'
						}]
					},
					{
						id: 'selection',
						name: '级联选择',
						open: false,
						pages: [{
							name: '级联选择',
							page: '/extends/selection/selection'
						}]
					},
					{
						id: 'circular-progress',
						name: '圆形进度条',
						open: false,
						pages: [{
							name: '圆形进度条',
							page: '/extends/circular-progress/circular-progress'
						}]
					},
					{
						id: 'cropper',
						name: '图片裁剪',
						open: false,
						pages: [{
							name: '图片裁剪',
							page: '/extends/cropper/cropper'
						}]
					},
					{
						id: 'navigation-bar',
						name: 'navbar',
						open: false,
						pages: [{
							name: 'navbar',
							page: '/extends/navigation-bar/navigation-bar'
						}]
					},
					{
						id: 'bubble',
						name: '气泡弹框',
						open: false,
						pages: [{
							name: '气泡弹框',
							page: '/extends/bubble/bubble'
						}]
					},
					{
						id: 'image',
						name: '图片组合',
						open: false,
						pages: [{
							name: '图片组合',
							page: '/extends/image/image'
						}]
					},
					{
						id: 'color-analysis',
						name: '颜色分析器',
						open: false,
						pages: [{
							name: '颜色分析器',
							page: '/extends/color-analysis/color-analysis'
						}]
					},
					{
						id: 'zhToPinYin',
						name: '中文转拼音',
						open: false,
						pages: [{
							name: '中文转拼音',
							page: '/extends/zhToPinYin/zhToPinYin'
						}]
					},
					{
						id: 'request',
						name: '网络请求',
						open: false,
						pages: [{
							name: '网络请求',
							page: '/extends/request/request'
						}]
					},
					{
						id: 'luckdraw',
						name: '抽奖转盘',
						open: false,
						pages: [{
							name: '抽奖转盘',
							page: '/extends/luckdraw/luckdraw'
						}]
					}
				]
			};
		},
		computed: {
			...mapState(['networkConnected', 'isOnline'])
		},
		watch: {
			networkConnected(isConnected) {
				if (isConnected) {
					this.menuHandle();
				}
			},
			isOnline(val) {
				if (val) {
					this.menuHandle();
				}
			}
		},
		onLoad() {
			// #ifdef MP
			this.platform = '小程序';
			// #endif
			this.$eventHub.$on('emit', data => {
				setTimeout(() => {
					this.fui.toast('您选择了：' + data);
				}, 350);
			});

			// #ifdef MP-QQ
			let appbox = qq.createAppBox({
				adUnitId: '5a1174cf3a58b4b47be85b54388c5e56'
			});
			appbox.load().then(() => {
				appbox.show();
			});
			// #endif

			// #ifdef MP-WEIXIN
			let interstitialAd = null;
			if (wx.createInterstitialAd) {
				interstitialAd = wx.createInterstitialAd({
					adUnitId: 'adunit-44bbe9a9087910e3'
				});
				interstitialAd.onLoad(() => {});
				interstitialAd.onError(err => {});
				interstitialAd.onClose(() => {});
			}
			if (interstitialAd) {
				interstitialAd.show().catch(err => {
					console.error(err);
				});
			}
			// #endif

			setTimeout(() => {
				this.menuHandle();
			}, 50);
		},
		methods: {
			...mapActions(['getOnlineStatus']),
			async menuHandle() {
				let list = [...this.listOnline];
				this.list = list;
			},
			kindToggle: function(e) {
				var id = e.currentTarget.id,
					list = this.list;
				for (var i = 0, len = list.length; i < len; ++i) {
					if (list[i].id == id) {
						list[i].open = !list[i].open;
					} else {
						list[i].open = false;
					}
				}
				this.list = list;
			},
			github: function(event) {
				//event 当需要异步请求返回数据再进行复制时，需要传入此参数，或者异步方法转为同步方法（H5端）
				fireui.getClipboardData('https://github.com/dingyong0214/fireui-uniapp', res => {
					// #ifdef H5 || MP-ALIPAY
					if (res) {
						this.fui.toast('链接复制成功');
					} else {
						this.fui.toast('链接复制失败');
					}
					// #endif
				},event);
			},
			mall: function() {
				if (this.list.length < 8) return;
				uni.navigateTo({
					url: '../../template/mall/mall/mall'
				});
			},
			doc: function() {
				uni.navigateTo({
					url: '../../doc/doc/doc'
				});
			}
		}
	};
</script>

<style>
	.container {
		width: 100%;
		padding-bottom: 30rpx;
	}

	.fui-page-title {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 70rpx 0 30rpx 0;
	}

	.fui-logo {
		height: 108rpx;
		width: 108rpx;
		border-radius: 50%;
	}

	.fui-title {
		font-size: 64rpx;
		padding-left: 20rpx;
		color: #333;
		position: relative;
	}

	.fui-link {
		color: #5677fc;
	}

	.fui-cell {
		padding: 10px 15px;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.fui-cell:before {
		content: ' ';
		position: absolute;
		top: 0;
		right: 0;
		border-top: 1px solid #eaeef1;
		color: #eaeef1;
		left: 15px;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
	}

	.fui-cell:first-child:before {
		display: none;
	}

	.fui-cell_active {
		background-color: #f7f7f9;
	}

	.fui-cell_bd {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}

	.fui-cell_ft {
		text-align: right;
		color: #999;
	}

	.fui-cell_access {
		color: inherit;
	}

	.fui-cell_ft_in-access {
		padding-right: 13px;
		position: relative;
	}

	.fui-cell_ft_in-access:after {
		content: ' ';
		height: 11px;
		width: 11px;
		border-width: 2px 2px 0 0;
		border-color: #b2b2b2;
		border-style: solid;
		-webkit-transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
		transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
		position: absolute;
		top: 50%;
		margin-top: -7px;
		right: 2px;
	}

	.fui-form-preview_item {
		overflow: hidden;
	}

	.fui-flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}

	.fui-flex_item {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}

	.fui-page-desc {
		color: #666;
		font-size: 28rpx;
		text-align: center;
		padding-bottom: 50rpx;
	}

	.fui-flex {
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.fui-cells {
		margin-top: 0;
		opacity: 0;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		-webkit-transition: 0.3s;
		transition: 0.3s;
	}

	.fui-cells:before,
	.fui-cells:after {
		display: none;
	}

	.fui-cells_show {
		opacity: 1;
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}

	.fui-cell:before {
		right: 15px;
	}

	.kind-list_item {
		margin: 10px 0;
		background-color: #fff;
		border-radius: 2px;
		overflow: hidden;
	}

	.kind-list_item:first-child {
		margin-top: 0;
	}

	.kind-list_img {
		width: 30px;
		height: 30px;
	}

	.fui-img-1,
	.fui-img-2,
	.fui-img-8 {
		width: 32px !important;
		height: 32px !important;
	}

	.fui-img-7 {
		width: 28px !important;
		height: 28px !important;
	}

	.kind-list_item-hd {
		padding: 20px;
		-webkit-transition: opacity 0.3s;
		transition: opacity 0.3s;
	}

	.kind-list_item-hd_show {
		opacity: 0.4;
	}

	.kind-list_item-bd {
		height: 0;
		overflow: hidden;
	}

	.kind-list_item-bd_show {
		height: auto;
	}

	.fui-badge {
		position: absolute;
		width: 80rpx;
		height: 30rpx;
		border-radius: 30rpx 30rpx 30rpx 0;
		color: #fff;
		background: #eb0909;
		font-size: 25rpx;
		font-weight: 400;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: scale(0.8) translateX(100%);
		transform-origin: center center;
		top: -8rpx;
		right: 0;
	}
</style>
