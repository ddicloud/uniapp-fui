<template>
	<view class="container">
		<fui-grid>
			<block v-for="(item,index) in iconList" :key="index">
				<fui-grid-item>
					<view class="fui-grid-icon">
						<iconfont :className="item.name" :size="item.size" :color="item.color || '#999'" @click="show(item.name)"></iconfont>
					</view>
					<text class="fui-grid-label">{{item.name}}</text>
				</fui-grid-item>
			</block>
		</fui-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconList: [
                       {
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
                       },
                       {
                           "name": "icon-guanzhuang",
                           "size": 20
                       },
                       {
                           "name": "icon-kaisuo",
                           "size": 20
                       },
                       {
                           "name": "icon-ceshi1",
                           "size": 20
                       },
                       {
                           "name": "icon-unie62e",
                           "size": 20
                       },
                       {
                           "name": "icon-buhuo",
                           "size": 20
                       },
                       {
                           "name": "icon-buzheng",
                           "size": 20
                       },
                       {
                           "name": "icon-ceshi",
                           "size": 20
                       },
                       {
                           "name": "icon-Frame1",
                           "size": 20
                       },
                       {
                           "name": "icon-icon-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-youhuiquanquanmian",
                           "size": 20
                       },
                       {
                           "name": "icon-ico",
                           "size": 20
                       },
                       {
                           "name": "icon-qrcode",
                           "size": 20
                       },
                       {
                           "name": "icon-ico1",
                           "size": 20
                       },
                       {
                           "name": "icon-creditcard-fill",
                           "size": 20
                       },
                       {
                           "name": "icon-coupon",
                           "size": 20
                       },
                       {
                           "name": "icon-saoyisao1",
                           "size": 20
                       },
                       {
                           "name": "icon-fenxiang2",
                           "size": 20
                       },
                       {
                           "name": "icon-fenxiang4",
                           "size": 20
                       },
                       {
                           "name": "icon-saoyisao2",
                           "size": 20
                       },
                       {
                           "name": "icon-tubiao_meiyoudingdan",
                           "size": 20
                       },
                       {
                           "name": "icon-qinninhuanmeiyoudingdano",
                           "size": 20
                       },
                       {
                           "name": "icon-meiyoudingdan1",
                           "size": 20
                       },
                       {
                           "name": "icon-weiwancheng",
                           "size": 20
                       },
                       {
                           "name": "icon-yizhifu",
                           "size": 20
                       },
                       {
                           "name": "icon-geren4",
                           "size": 20
                       },
                       {
                           "name": "icon-yizhifu1",
                           "size": 20
                       },
                       {
                           "name": "icon-dingdan-yizhifu",
                           "size": 20
                       },
                       {
                           "name": "icon-ka",
                           "size": 20
                       },
                       {
                           "name": "icon-tubiaozhizuomoban-01",
                           "size": 20
                       },
                       {
                           "name": "icon-caozuo-gengduo",
                           "size": 20
                       },
                       {
                           "name": "icon-kefu",
                           "size": 20
                       },
                       {
                           "name": "icon-tuikuan1",
                           "size": 20
                       },
                       {
                           "name": "icon-tuikuan",
                           "size": 20
                       },
                       {
                           "name": "icon-xuanzhong3",
                           "size": 20
                       },
                       {
                           "name": "icon-xuanzhong2",
                           "size": 20
                       },
                       {
                           "name": "icon-yiwancheng1",
                           "size": 20
                       },
                       {
                           "name": "icon-ziyuan137",
                           "size": 20
                       },
                       {
                           "name": "icon-mima",
                           "size": 20
                       },
                       {
                           "name": "icon-SIMqiaguanli",
                           "size": 20
                       },
                       {
                           "name": "icon-haibaofenxiang",
                           "size": 20
                       },
                       {
                           "name": "icon-fenxiang1",
                           "size": 20
                       },
                       {
                           "name": "icon-bianji",
                           "size": 20
                       },
                       {
                           "name": "icon-fenxiang",
                           "size": 20
                       },
                       {
                           "name": "icon-xuanzhong1",
                           "size": 20
                       },
                       {
                           "name": "icon-dengdaiyuan",
                           "size": 20
                       },
                       {
                           "name": "icon-sanjiaoxing",
                           "size": 20
                       },
                       {
                           "name": "icon-cuowu1",
                           "size": 20
                       },
                       {
                           "name": "icon-hongdian",
                           "size": 20
                       },
                       {
                           "name": "icon-jiazai",
                           "size": 20
                       },
                       {
                           "name": "icon-jiazaicuowu",
                           "size": 20
                       },
                       {
                           "name": "icon-load1",
                           "size": 20
                       },
                       {
                           "name": "icon-weibiaoti2xingbie",
                           "size": 20
                       },
                       {
                           "name": "icon-xingbienanxianxing",
                           "size": 20
                       },
                       {
                           "name": "icon-xuanzhong",
                           "size": 20
                       },
                       {
                           "name": "icon-uniEC",
                           "size": 20
                       },
                       {
                           "name": "icon-wenzi",
                           "size": 20
                       },
                       {
                           "name": "icon-yishouqing",
                           "size": 20
                       },
                       {
                           "name": "icon-lianxi-yishouqing",
                           "size": 20
                       },
                       {
                           "name": "icon-tubiaolunkuo-",
                           "size": 20
                       },
                       {
                           "name": "icon-dianhua2",
                           "size": 20
                       },
                       {
                           "name": "icon-dianpu11",
                           "size": 20
                       },
                       {
                           "name": "icon-dingdan3",
                           "size": 20
                       },
                       {
                           "name": "icon-mendianzitidaihexiaosvg",
                           "size": 20
                       },
                       {
                           "name": "icon-youhuiquan1",
                           "size": 20
                       },
                       {
                           "name": "icon-qianbao1",
                           "size": 20
                       },
                       {
                           "name": "icon-shezhi11",
                           "size": 20
                       },
                       {
                           "name": "icon-wodetuangou",
                           "size": 20
                       },
                       {
                           "name": "icon-xinxi1",
                           "size": 20
                       },
                       {
                           "name": "icon-dizhi1",
                           "size": 20
                       },
                       {
                           "name": "icon-hudongshequ",
                           "size": 20
                       },
                       {
                           "name": "icon-shangjialiebiaoicon",
                           "size": 20
                       },
                       {
                           "name": "icon-chengshi1",
                           "size": 20
                       },
                       {
                           "name": "icon-chanpin_xiantiao",
                           "size": 20
                       },
                       {
                           "name": "icon-hexiao",
                           "size": 20
                       },
                       {
                           "name": "icon-shangpin1",
                           "size": 20
                       },
                       {
                           "name": "icon-iconzhengli-",
                           "size": 20
                       },
                       {
                           "name": "icon-leijishouyi",
                           "size": 20
                       },
                       {
                           "name": "icon-woshou",
                           "size": 20
                       },
                       {
                           "name": "icon-chongzhijiaofei",
                           "size": 20
                       },
                       {
                           "name": "icon-tixian",
                           "size": 20
                       },
                       {
                           "name": "icon-pengyou",
                           "size": 20
                       },
                       {
                           "name": "icon-youhuiquan011",
                           "size": 20
                       },
                       {
                           "name": "icon-shijian1",
                           "size": 20
                       },
                       {
                           "name": "icon-huiyuanquerendaodian",
                           "size": 20
                       },
                       {
                           "name": "icon-dingdan1",
                           "size": 20
                       },
                       {
                           "name": "icon-dianpu1",
                           "size": 20
                       },
                       {
                           "name": "icon-dingdan11",
                           "size": 20
                       },
                       {
                           "name": "icon-zhifu",
                           "size": 20
                       },
                       {
                           "name": "icon-ziliao",
                           "size": 20
                       },
                       {
                           "name": "icon-jinhangzhong",
                           "size": 20
                       },
                       {
                           "name": "icon-chenggong",
                           "size": 20
                       },
                       {
                           "name": "icon-shibai",
                           "size": 20
                       },
                       {
                           "name": "icon-dingdanwancheng",
                           "size": 20
                       },
                       {
                           "name": "icon-daifahuo1",
                           "size": 20
                       },
                       {
                           "name": "icon-daifukuan2",
                           "size": 20
                       },
                       {
                           "name": "icon-wodedaijinquan",
                           "size": 20
                       },
                       {
                           "name": "icon-discount-coupon_icon",
                           "size": 20
                       },
                       {
                           "name": "icon-gengduopintuan",
                           "size": 20
                       },
                       {
                           "name": "icon-shinshoplipinqia",
                           "size": 20
                       },
                       {
                           "name": "icon-tianjiagouwuche",
                           "size": 20
                       },
                       {
                           "name": "icon-hongbaolishi",
                           "size": 20
                       },
                       {
                           "name": "icon-huiyuanvip-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-gouwuche2-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-kefu-copy-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-tuijianyoujiang2-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-youhuiquan01-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-shouhoufuwu-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-config-rule",
                           "size": 20
                       },
                       {
                           "name": "icon-icon50",
                           "size": 20
                       },
                       {
                           "name": "icon-huo1",
                           "size": 20
                       },
                       {
                           "name": "icon-xianshiqianggou",
                           "size": 20
                       },
                       {
                           "name": "icon-VIPprice",
                           "size": 20
                       },
                       {
                           "name": "icon-huiyuanjia",
                           "size": 20
                       },
                       {
                           "name": "icon-shanchu",
                           "size": 20
                       },
                       {
                           "name": "icon-tuijianren",
                           "size": 20
                       },
                       {
                           "name": "icon-c-tequan",
                           "size": 20
                       },
                       {
                           "name": "icon-huiyuanjifen1",
                           "size": 20
                       },
                       {
                           "name": "icon-feijifen",
                           "size": 20
                       },
                       {
                           "name": "icon-huiyuanjifen",
                           "size": 20
                       },
                       {
                           "name": "icon-dachulailiaojiav",
                           "size": 20
                       },
                       {
                           "name": "icon-huangguan",
                           "size": 20
                       },
                       {
                           "name": "icon-vip",
                           "size": 20
                       },
                       {
                           "name": "icon-vip1",
                           "size": 20
                       },
                       {
                           "name": "icon-VIP-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-yiwancheng",
                           "size": 20
                       },
                       {
                           "name": "icon-daifahuo",
                           "size": 20
                       },
                       {
                           "name": "icon-daifukuan1",
                           "size": 20
                       },
                       {
                           "name": "icon-daipingjia1",
                           "size": 20
                       },
                       {
                           "name": "icon-daishouhuo",
                           "size": 20
                       },
                       {
                           "name": "icon-shezhi1",
                           "size": 20
                       },
                       {
                           "name": "icon-jiazaizhong",
                           "size": 20
                       },
                       {
                           "name": "icon-shangpin",
                           "size": 20
                       },
                       {
                           "name": "icon-dengji-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-mp-dalei",
                           "size": 20
                       },
                       {
                           "name": "icon-chengshi",
                           "size": 20
                       },
                       {
                           "name": "icon-tuiguang2",
                           "size": 20
                       },
                       {
                           "name": "icon-jiaru1",
                           "size": 20
                       },
                       {
                           "name": "icon-xinshoubangzhu",
                           "size": 20
                       },
                       {
                           "name": "icon-tuiguang1",
                           "size": 20
                       },
                       {
                           "name": "icon-gonggao",
                           "size": 20
                       },
                       {
                           "name": "icon-dui",
                           "size": 20
                       },
                       {
                           "name": "icon-ticket",
                           "size": 20
                       },
                       {
                           "name": "icon-duiwu",
                           "size": 20
                       },
                       {
                           "name": "icon-text",
                           "size": 20
                       },
                       {
                           "name": "icon-you",
                           "size": 20
                       },
                       {
                           "name": "icon-circle-selected",
                           "size": 20
                       },
                       {
                           "name": "icon-querenyuanzhengqueduigoutijiaochenggongwancheng1",
                           "size": 20
                       },
                       {
                           "name": "icon-dianhua1",
                           "size": 20
                       },
                       {
                           "name": "icon-pintuan",
                           "size": 20
                       },
                       {
                           "name": "icon-pintuan1",
                           "size": 20
                       },
                       {
                           "name": "icon-renwu1",
                           "size": 20
                       },
                       {
                           "name": "icon-dingdan",
                           "size": 20
                       },
                       {
                           "name": "icon-gerenzhongxin-xuanzhong",
                           "size": 20
                       },
                       {
                           "name": "icon-icon--copy-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-gerenzhongxin-xuanzhong-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-Shapecopy",
                           "size": 20
                       },
                       {
                           "name": "icon-Shapecopy-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-index-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-zan",
                           "size": 20
                       },
                       {
                           "name": "icon-shangjiamingcheng",
                           "size": 20
                       },
                       {
                           "name": "icon-paixing",
                           "size": 20
                       },
                       {
                           "name": "icon-yaoqinghaoyoupengyou3",
                           "size": 20
                       },
                       {
                           "name": "icon-xinshouketang",
                           "size": 20
                       },
                       {
                           "name": "icon-aui-icon-mobile",
                           "size": 20
                       },
                       {
                           "name": "icon-qisongjia",
                           "size": 20
                       },
                       {
                           "name": "icon-baoyou",
                           "size": 20
                       },
                       {
                           "name": "icon-yingyeshijian",
                           "size": 20
                       },
                       {
                           "name": "icon-renwu",
                           "size": 20
                       },
                       {
                           "name": "icon-dianhua",
                           "size": 20
                       },
                       {
                           "name": "icon-shangjia",
                           "size": 20
                       },
                       {
                           "name": "icon-tuiguang",
                           "size": 20
                       },
                       {
                           "name": "icon-huoqushouyi",
                           "size": 20
                       },
                       {
                           "name": "icon-movement_icon_notice",
                           "size": 20
                       },
                       {
                           "name": "icon-jiudianjianjie",
                           "size": 20
                       },
                       {
                           "name": "icon-navicon-psf",
                           "size": 20
                       },
                       {
                           "name": "icon-shouyi1",
                           "size": 20
                       },
                       {
                           "name": "icon-woderenwu",
                           "size": 20
                       },
                       {
                           "name": "icon-wodeshouyi",
                           "size": 20
                       },
                       {
                           "name": "icon-weibiaoti-1",
                           "size": 20
                       },
                       {
                           "name": "icon-xiangxidizhi",
                           "size": 20
                       },
                       {
                           "name": "icon-faburenwu",
                           "size": 20
                       },
                       {
                           "name": "icon-fujinmendian-gonggao",
                           "size": 20
                       },
                       {
                           "name": "icon-41",
                           "size": 20
                       },
                       {
                           "name": "icon-dizhi",
                           "size": 20
                       },
                       {
                           "name": "icon-sigelanmulianjieshangquan",
                           "size": 20
                       },
                       {
                           "name": "icon-keyongyue",
                           "size": 20
                       },
                       {
                           "name": "icon-fl-renminbi",
                           "size": 20
                       },
                       {
                           "name": "icon-jifen",
                           "size": 20
                       },
                       {
                           "name": "icon-1zhenshixingming",
                           "size": 20
                       },
                       {
                           "name": "icon-shangquanxiao",
                           "size": 20
                       },
                       {
                           "name": "icon-home",
                           "size": 20
                       },
                       {
                           "name": "icon-94",
                           "size": 20
                       },
                       {
                           "name": "icon-guanggao",
                           "size": 20
                       },
                       {
                           "name": "icon-touzi",
                           "size": 20
                       },
                       {
                           "name": "icon-huiyuanqiaguanli",
                           "size": 20
                       },
                       {
                           "name": "icon-045zhuanqulirun",
                           "size": 20
                       },
                       {
                           "name": "icon-shouyi",
                           "size": 20
                       },
                       {
                           "name": "icon-hezuo",
                           "size": 20
                       },
                       {
                           "name": "icon-shangping",
                           "size": 20
                       },
                       {
                           "name": "icon-weibiaoti-",
                           "size": 20
                       },
                       {
                           "name": "icon-daifukuan",
                           "size": 20
                       },
                       {
                           "name": "icon-nogoods",
                           "size": 20
                       },
                       {
                           "name": "icon-daipingjia",
                           "size": 20
                       },
                       {
                           "name": "icon-tuanduicankaoxian-",
                           "size": 20
                       },
                       {
                           "name": "icon-meiyoudingdan-01",
                           "size": 20
                       },
                       {
                           "name": "icon-ai62",
                           "size": 20
                       },
                       {
                           "name": "icon-jianhaocu",
                           "size": 20
                       },
                       {
                           "name": "icon-jiahao",
                           "size": 20
                       },
                       {
                           "name": "icon-add_circle",
                           "size": 20
                       },
                       {
                           "name": "icon-jianhao",
                           "size": 20
                       },
                       {
                           "name": "icon-naozhong",
                           "size": 20
                       },
                       {
                           "name": "icon-saoyisao",
                           "size": 20
                       },
                       {
                           "name": "icon-shangfan",
                           "size": 20
                       },
                       {
                           "name": "icon-shezhi",
                           "size": 20
                       },
                       {
                           "name": "icon-shengyin",
                           "size": 20
                       },
                       {
                           "name": "icon-shijian",
                           "size": 20
                       },
                       {
                           "name": "icon-shouhuodizhi",
                           "size": 20
                       },
                       {
                           "name": "icon-shouye",
                           "size": 20
                       },
                       {
                           "name": "icon-shuaxin",
                           "size": 20
                       },
                       {
                           "name": "icon-sousuo",
                           "size": 20
                       },
                       {
                           "name": "icon-suo",
                           "size": 20
                       },
                       {
                           "name": "icon-tishi",
                           "size": 20
                       },
                       {
                           "name": "icon-wancheng",
                           "size": 20
                       },
                       {
                           "name": "icon-wodedingdan",
                           "size": 20
                       },
                       {
                           "name": "icon-wodefankui",
                           "size": 20
                       },
                       {
                           "name": "icon-wodehongbao",
                           "size": 20
                       },
                       {
                           "name": "icon-wodejuhuasuan",
                           "size": 20
                       },
                       {
                           "name": "icon-wodeyouhuiquan",
                           "size": 20
                       },
                       {
                           "name": "icon-xiafan",
                           "size": 20
                       },
                       {
                           "name": "icon-xiala",
                           "size": 20
                       },
                       {
                           "name": "icon-xiangshangjiantou",
                           "size": 20
                       },
                       {
                           "name": "icon-xiangxiajiantou",
                           "size": 20
                       },
                       {
                           "name": "icon-xiangsjiantou-copy",
                           "size": 20
                       },
                       {
                           "name": "icon-gouwuche",
                           "size": 20
                       },
                       {
                           "name": "icon-lajixiang",
                           "size": 20
                       },
                       {
                           "name": "icon-lianjie",
                           "size": 20
                       },
                       {
                           "name": "icon-iconfont5",
                           "size": 20
                       },
                       {
                           "name": "icon-xiangyoujiantou",
                           "size": 20
                       },
                       {
                           "name": "icon-xiangzuojiantou",
                           "size": 20
                       },
                       {
                           "name": "icon-yanjing",
                           "size": 20
                       },
                       {
                           "name": "icon-yijianfankui",
                           "size": 20
                       },
                       {
                           "name": "icon-zhaoxiangji",
                           "size": 20
                       },
                       {
                           "name": "icon-zhengque",
                           "size": 20
                       },
                       {
                           "name": "icon-xiaoxizhongxin",
                           "size": 20
                       },
                       {
                           "name": "icon-lingcunwei",
                           "size": 20
                       },
                       {
                           "name": "icon-new",
                           "size": 20
                       },
                       {
                           "name": "icon-huo",
                           "size": 20
                       },
                       {
                           "name": "icon-201",
                           "size": 20
                       },
                       {
                           "name": "icon-7",
                           "size": 20
                       },
                       {
                           "name": "icon-mian",
                           "size": 20
                       },
                       {
                           "name": "icon-jushoucanggift",
                           "size": 20
                       },
                       {
                           "name": "icon-liwu",
                           "size": 20
                       },
                       {
                           "name": "icon-yuyin",
                           "size": 20
                       },
                       {
                           "name": "icon-jiantou",
                           "size": 20
                       },
                       {
                           "name": "icon-gouwuchetianjia",
                           "size": 20
                       },
                       {
                           "name": "icon-cuowu",
                           "size": 20
                       },
                       {
                           "name": "icon-erweima",
                           "size": 20
                       },
                       {
                           "name": "icon-jushoucang",
                           "size": 20
                       },
                       {
                           "name": "icon-dianpu",
                           "size": 20
                       },
                       {
                           "name": "icon-jinrixiadan",
                           "size": 20
                       },
                       {
                           "name": "icon-jiaru",
                           "size": 20
                       },
                       {
                           "name": "icon-ERP_xiadan",
                           "size": 20
                       },
                       {
                           "name": "icon-weixinzhifu",
                           "size": 20
                       },
                       {
                           "name": "icon-navicon-wxgl",
                           "size": 20
                       }
                ]   
			}
		},
		methods:{
			show(name){
				this.fui.toast(name)
			}
		}
	}
</script>

<style>
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.fui-grid-icon {
		width: 64rpx;
		height: 64rpx;
		margin: 0 auto;
		text-align: center;
		vertical-align: middle;
	}

	.fui-grid-icon+.fui-grid-label {
		margin-top: 10rpx;
	}

	.fui-grid-label {
		display: block;
		text-align: center;
		font-weight: 400;
		color: #333;
		font-size: 20rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
