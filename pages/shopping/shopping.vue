<template>
	<view class="item">
		<view class="title">
			<view class="item-name">
				继续狂欢
			</view>
			<view class="one ">
				CONTINUE CARNIVAL
			</view>
			<view class="xt">
				<hr size="1" />
				<view class="zt">跨 / 店 / 满 / 减</view>
				<hr size="1" />
			</view>
			<view class="yt">
				<view class="jian">
					满 399 ---减 20
				</view>
				<view class="jian">
					满 399 ---减 20
				</view>
			</view>
			
		</view>
		<view class="cent">
			<view class="lef">
				<view class="q">
					￥20
				</view>
				<view class="q">
					满199使用
				</view>
				<button type="button"  style="width:80px;height:40px;padding:0px;margin:0px">立即领取</button>
			</view>
		</view>
		<view class="cento">
			<view class="lef">
				<view class="q">
					￥20
				</view>
				<view class="q">
					满199使用
				</view>
				<button type="button"  style="width:80px;height:40px;padding:0px;margin:0px">立即领取</button>
			</view>
		</view>
		<view class="centt">
			<view class="lef">
				<view class="q">
					￥20
				</view>
				<view class="q">
					满199使用
				</view>
				<button type="button"  style="width:80px;height:40px;padding:0px;margin:0px">立即领取</button>
			</view>
		</view>
		<view class="cenn">
			<view class="lett">
				连衣裙
			</view>
			<view class="lettt">
				dress
			</view>
		</view>
		<view class="cennn">
			<view class="lett">
				衬衫
			</view>
			<view class="lettt">
				dress
			</view>
		</view>
		<view class="cennnn">
			<view class="lett">
				外套
			</view>
			<view class="lettt">
				dress
			</view>
		</view>
		<view class="cenoo">
			<view class="lett">
				针织衫
			</view>
			<view class="lettt">
				dress
			</view>
		</view>
		<view class="cenooo">
			<view class="lett">
				T血
			</view>
			<view class="lettt">
				dress
			</view>
		</view>
		<view class="ceoooo">
			<view class="lett">
				外套
			</view>
			<view class="lettt">
				dress
			</view>
		</view>
		<view class="dott">
			<view class="nan">
				新品特供
			</view>
		</view>
		<view class="img">
			<!-- <image src='/static/components/OIP%20(1).png' class="fui-applets" mode="widthFix"></image> -->
			<view class="ly">
				<hr size="1" />
				秋冬新款连衣裙
			</view>
			<view class="lyy">
				￥498
			</view>
		</view>
		<view class="imgg">
			<view class="ly">
				<hr size="1" />
				秋冬新款连衣裙
			</view>
			<view class="lyy">
				￥498
			</view>
		</view>
		<view class="imggg">
			<view class="ly">
				<hr size="1" />
				秋冬新款连衣裙
			</view>
			<view class="lyy">
				￥498
			</view>
		</view>
		<view class="imgggg">
			<view class="ly">
				<hr size="1" />
				秋冬新款连衣裙
			</view>
			<view class="lyy">
				￥498
			</view>
		</view>
		
	
	
	<fui-grid>
		<block v-for="(item,index) in dataList" :key="index">
			<fui-grid-item :cell="3" @click="detail">
				<view class="fui-grid-icon">
					<fui-icon :name="item.name" :size="item.size" :color="item.color"></fui-icon>
				</view>
				<text class="fui-grid-label">{{item.name}}</text>
			</fui-grid-item>
		</block>
	</fui-grid>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[
					{
						name:'连衣裙'
					},
					{
						name:'外套',
				    },
					{
						name:'衬衫'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>
  
<style>
  .item{
		height:1500px;
		width:600px;
		background-color:#DDDDDD;
		margin:100px auto;
	}
	.title{
		position: absolute;
		margin-top: 50px;
		margin-left: 200px;
	}
	.item-name{
		font-size: 50px;
		font-family: Fantasy;
		text-align: center;
	}
	.one{
		margin-top: 20px;
	}
	.xt{
		margin-top: 20px;
	}
	.zt{
		text-align: center;
	}
	.yt{
		margin-top: 20px;
		background-color: #00DDDD;
		 border-radius: 25px;
	}
	.jian{
		font-size: 20px;
		font-family: Fantasy;
		text-align: center;
	}
	.cent{
		position: absolute;
		margin-top: 270px;
		margin-left: 100px;
	}
	.q{
		margin-top: 20px;
		font-size: 20px;
		font-family: Fantasy;
	}
	.cento{
		position: absolute;
		margin-top: 280px;
		margin-left: 250px;
	}
	.centt{
		position: absolute;
		margin-top: 270px;
		margin-left: 400px;
	}
	.cenn{
		position: absolute;
		margin-top: 450px;
		margin-left: 108px;
		border:1px solid #000000;
		width:110px;
		height: 90px;
		text-align: center;
	}
	.lett{
		margin-top: 30px;
		font-family: Fantasy;
	}
	.cennn{
		position: absolute;
		margin-top: 450px;
		margin-left: 220px;
		border:1px solid #000000;
		width:110px;
		height: 90px;
		text-align: center;
	}
	.cennnn{
		position: absolute;
		margin-top: 450px;
		margin-left: 330px;
		border:1px solid #000000;
		width:110px;
		height: 90px;
		text-align: center;
	}
	.cenoo{
		position: absolute;
		margin-top: 540px;
		margin-left: 108px;
		border:1px solid #000000;
		width:110px;
		height: 90px;
		text-align: center;
	}
	.cenooo{
		position: absolute;
		margin-top: 540px;
		margin-left: 220px;
		border:1px solid #000000;
		width:110px;
		height: 90px;
		text-align: center;
	}
	.ceoooo{
		position: absolute;
		margin-top: 540px;
		margin-left: 330px;
		border:1px solid #000000;
		width:110px;
		height: 90px;
		text-align: center;
	}
	.dott{
		position: absolute;
		margin-top:640px;
		margin-left: 240px;
		font-size: 25px;
		font-family: Fantasy;
		text-align: center;
		}
		.img{
			border:1px solid #000000;
			width:170px;
			height:200px;
			position: absolute;
			margin-top:740px;
			margin-left: 140px;
			font-size: 15px;
			text-align: center;
		}
		.ly{
			margin-top:140px;
		}
		.imgg{
			border:1px solid #000000;
			width:170px;
			height:200px;
			position: absolute;
			margin-top:740px;
			margin-left: 310px;
			font-size: 15px;
			text-align: center;
		}
		.imggg{
			border:1px solid #000000;
			width:170px;
			height:200px;
			position: absolute;
			margin-top:950px;
			margin-left: 140px;
			font-size: 15px;
			text-align: center;
		}
		.imgggg{
			border:1px solid #000000;
			width:170px;
			height:200px;
			position: absolute;
			margin-top:950px;
			margin-left: 310px;
			font-size: 15px;
			text-align: center;
		}
		image{
			width:100px;
			height:100px;
			z-index: 11;
		}
</style>
