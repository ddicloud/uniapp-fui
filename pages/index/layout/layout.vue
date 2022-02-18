<template>
	<view class="container">
		<view class="fui-padding">
			<view class="fui-title">
				三角形
			</view>
			<view class="fui-flex">
				<view class="fui-triangle fui-triangle-left"></view>
				<view class="fui-triangle fui-triangle-right"></view>
				<view class="fui-triangle fui-triangle-top"></view>
				<view class="fui-triangle fui-triangle-bottom"></view>
			</view>
			<view class="fui-title">
				平行四边形
			</view>
			<view class="fui-parallelogram"></view>
			<view class="fui-title">
				月牙c
			</view>
			<view class="fui-crescent"></view>

			<view class="fui-title fui-top40">
				聊天框【fui-popup组件可以当聊天框使用】
			</view>

			<view>
				<view class="fui-chatbox fui-chatbox-left">
					哈喽~，欢迎关注Fire UI！
				</view>
			</view>

			<view class='fui-flex fui-align-right'>
				<view class="fui-chatbox fui-chatbox-right fui-top40">
					哈喽~，欢迎关注Fire UI！ 请说出您想加入或者优化的功能！
				</view>
			</view>

			<view class="fui-title fui-top40">
				checkbox默认和自定义样式
			</view>
			<view class="fui-flex">
				<checkbox></checkbox>
				<checkbox class="fui-checkbox" color="#FFFFFF"></checkbox>
			</view>
			<view class="fui-title fui-top40">问题描述框</view>
			<view class="fui-textarea-box">
				<textarea class="fui-textarea" name="desc" placeholder="我望加入XXXX功能，我希望优化XXXX功能，XX功能在XX情况下会出现bug" maxlength="500"
				 placeholder-class="fui-phcolor-color" />
				<view class="fui-textarea-counter">0/500</view>
           </view>
	

    <view class="fui-title fui-top40">图片上传（可直接使用组件fui-upload）</view>

    <view class="fui-upload-box">
      <view class="fui-upload-item" v-for="(item,index) in files" :key="index">
        <image :src="item" class='fui-upload-img' @tap="previewImage" mode="aspectFill" :id="item"></image>
        <view class="fui-upload-del">
			<fui-icon color="#ed3f14" :size="18" name="close-fill"  :index="index" @click="deleteImage"></fui-icon>
		</view>
      </view>
      <view class="fui-upload-item fui-upload-add" v-if="files.length < 9" hover-class="fui-opcity" :hover-stay-time="150" @tap="chooseImage">
        <fui-icon name="plus"></fui-icon>
      </view>
    </view>
    <view class="fui-title">操作条</view>
  </view>

  <view class="fui-operation">
    <view class="fui-operation-left fui-col-7">
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="kefu" :size="22" color='#333'></fui-icon>
        <view class="fui-operation-text fui-scale-small">客服</view>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="shop" :size="22" color='#333'></fui-icon>
        <view class="fui-operation-text fui-scale-small">店铺</view>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
		<view class="fui-relative">
			<fui-icon name="cart" :size="22" color='#333' ></fui-icon>
			<fui-badge type="danger"  absolute  :scaleRatio="0.8" translateX="60%" top="-6rpx">18</fui-badge>
		</view>
        <view class="fui-operation-text fui-scale-small">购物车</view>

      </view>
    </view>
    <view class="fui-operation-right fui-col-5">
		<fui-button type="danger" shape="rightAngle" height="100rpx" :size="30">立即购买</fui-button>
    </view>
  </view>

  <view class="fui-operation fui-top40">
    <view class="fui-operation-left fui-col-4">
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="kefu" :size="22" color='#333'></fui-icon>
        <view class="fui-operation-text fui-scale-small">客服</view>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <view class="fui-relative">
        	<fui-icon name="cart" :size="22" color='#333' ></fui-icon>
        	<fui-badge type="danger"  absolute  :scaleRatio="0.8" translateX="60%" top="-6rpx">9</fui-badge>
        </view>
        <view class="fui-operation-text fui-scale-small">购物车</view>
      </view>
    </view>
   <view class="fui-center fui-operation-right  fui-col-8">
	   <view class="fui-flex-1">
		   <fui-button type="danger" shape="rightAngle" height="100rpx"  :size="30">加入购物车</fui-button>
	   </view>
	   <view class="fui-flex-1">
	   		<fui-button type="warning" shape="rightAngle" height="100rpx" :size="30">立即购买</fui-button>
	   </view>
   </view>
  </view>

  <view class="fui-operation fui-top40">
    <view class="fui-operation-left fui-col-5">
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="kefu" :size="22" color='#333'></fui-icon>
        <view class="fui-operation-text fui-scale-small">客服</view>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="shop" :size="22" color='#333'></fui-icon>
        <view class="fui-operation-text fui-scale-small">店铺</view>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <view class="fui-relative">
        	<fui-icon name="cart" :size="22" color='#333' ></fui-icon>
        	<fui-badge type="danger"  absolute  :scaleRatio="0.8" translateX="60%" top="-6rpx">2</fui-badge>
        </view>
        <view class="fui-operation-text fui-scale-small">购物车</view>
      </view>
    </view>
    <view class="fui-center fui-operation-right fui-col-7">
		<view class="fui-flex-1">
			<fui-button type="danger" shape="rightAngle" height="100rpx" :size="30">加入购物车</fui-button>
		</view>
		<view class="fui-flex-1">
			<fui-button type="warning" shape="rightAngle" height="100rpx" :size="30">立即购买</fui-button>
		</view>
    </view>
  </view>

  <view class="fui-operation fui-top40">
    <view class="fui-operation-left fui-col-7">
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="kefu" :size="22" color='#333'></fui-icon>
        <view class="fui-operation-text fui-scale-small">客服</view>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="shop" :size="22" color='#333'></fui-icon>
        <view class="fui-operation-text fui-scale-small">店铺</view>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <view class="fui-relative">
        	<fui-icon name="cart" :size="22" color='#333' ></fui-icon>
        	<fui-badge type="danger"  absolute  :scaleRatio="0.8" translateX="60%" top="-6rpx">99+</fui-badge>
        </view>
        <view class="fui-operation-text fui-scale-small">购物车</view>
      </view>
    </view>
    <view class="fui-operation-right fui-center  fui-col-5">
       <view class="fui-flex-1 fui-center">
		   <fui-button type="danger"  shape="circle" :size="28"  width="80%" height="72rpx">立即购买</fui-button>
	   </view>
    </view>
  </view>

  <view class="fui-operation fui-top40">
    <view class="fui-operation-left fui-col-5">
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="kefu" :size="22" color='#333'></fui-icon>
        <view class="fui-operation-text fui-scale-small">客服</view>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
       <view class="fui-relative">
       	<fui-icon name="cart" :size="22" color='#333' ></fui-icon>
       	<fui-badge type="danger"  absolute  :scaleRatio="0.8" translateX="60%" top="-6rpx">9</fui-badge>
       </view>
        <view class="fui-operation-text fui-scale-small">购物车</view>
      </view>
    </view>
    <view class="fui-operation-right fui-center  fui-col-7">
         <view class="fui-flex-1">
			 <fui-button type="danger"  shape="circle" :size="28" height="72rpx" width="90%">加入购物车</fui-button>
		 </view>
		 <view class="fui-flex-1">
		 	<fui-button type="warning" shape="circle" :size="28" height="72rpx" width="90%">立即购买</fui-button>
		 </view>
    </view>
  </view>

  <view class="fui-operation fui-top40">
    <view class="fui-operation-left fui-col-5">
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="kefu" :size="22" color='#333'></fui-icon>
        <view class="fui-operation-text fui-scale-small">客服</view>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="shop" :size="22" color='#333'></fui-icon>
        <view class="fui-operation-text fui-scale-small">店铺</view>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
       <view class="fui-relative">
       	<fui-icon name="cart" :size="22" color='#333' ></fui-icon>
       	<fui-badge type="danger"  absolute  :scaleRatio="0.8" translateX="60%" top="-6rpx">9</fui-badge>
       </view>
        <view class="fui-operation-text fui-scale-small">购物车</view>
      </view>
    </view>
    <view class="fui-operation-right fui-center fui-col-7 ">
		<view class="fui-flex-1">
		  <fui-button type="danger"  shape="circle" :size="28" height="72rpx" width="90%">加入购物车</fui-button>
		</view>
		<view class="fui-flex-1">
		  <fui-button type="warning" shape="circle" :size="28" height="72rpx" width="90%">立即购买</fui-button>
		</view>
    </view>
  </view>


  <view class="fui-operation fui-top40">
    <view class="fui-operation-left fui-col-7 fui-height-full fui-ptop-zero">
      <view class="fui-btn-comment">发表你的fireui言论</view>
    </view>
    <view class="fui-center fui-operation-right fui-col-5">
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
		<view class="fui-relative">
			<fui-icon name="message" :size="30" color='#444'></fui-icon>
			<fui-badge type="danger"  absolute  :scaleRatio="0.8" translateX="60%" top="-6rpx">18</fui-badge>
		</view>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="star" :size="30" color='#444'></fui-icon>
      </view>
      <view class="fui-operation-item" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="share" :size="30" color='#444'></fui-icon>
      </view>
    </view>
  </view>

  <view class="fui-operation fui-chat-operation fui-top40">
    <view class='fui-center fui-input-box'>
      <view class="fui-voice-icon" hover-class="fui-opcity" :hover-stay-time="150">
        <fui-icon name="imvoice" :size="26" color='#333' ></fui-icon>
      </view>
      <input class="fui-chat-input"></input>
    </view>
    <view hover-class="fui-opcity" :hover-stay-time="150">
      <fui-icon name="imface" :size="26" color='#333'></fui-icon>
    </view>
    <view hover-class="fui-opcity" :hover-stay-time="150">
      <fui-icon name="immore" :size="26" color='#333'></fui-icon>
    </view>
  </view>
  
  <view class="fui-title fui-pl-30">Input输入框</view>
   
 
  	<fui-list-cell :hover="false">
  		<view class="fui-input-item">
  			<view class="fui-input-title">姓名</view>
  			<input class="fui-input" placeholder="请输入姓名" placeholder-class="fui-phcolor" />
  		</view>
  	</fui-list-cell>
  	<fui-list-cell :hover="false" unlined>
  		<view class="fui-input-item">
  			<view class="fui-input-title">联系电话</view>
  			<input class="fui-input" placeholder="请输入手机号" placeholder-class="fui-phcolor" maxlength="11"/>
  		</view>
  	</fui-list-cell>
  
  <view class="fui-title fui-pl-30">无标题输入框</view>

  	<fui-list-cell :hover="false">
  		<input class="fui-input" placeholder="请输入姓名" placeholder-class="fui-phcolor" />
  	</fui-list-cell>
  <fui-list-cell :hover="false" unlined>
  	<input class="fui-input" placeholder="请输入姓名" placeholder-class="fui-phcolor" />
  </fui-list-cell>
  
  <view class="fui-title fui-pl-30">圆角输入框</view>
   <fui-list-cell :hover="false" unlined>
	   <view class="fui-input-border">
	   	<input class="fui-input" placeholder="请输入姓名" placeholder-class="fui-phcolor" />
	   </view>
   </fui-list-cell>
    <fui-list-cell :hover="false" unlined>
   	   <view class="fui-input-border fui-flex fui-align-between">
		 <view class="fui-input-title">联系电话</view>
   	   	 <input class="fui-input" placeholder="请输入手机号" placeholder-class="fui-phcolor" />
   	   </view>
    </fui-list-cell>
	<fui-list-cell :hover="false" unlined>
	   <view class="fui-input-border fui-flex fui-align-between">
		 <view class="fui-input-title">消费总额</view>
	   	 <input class="fui-input fui-text-right" placeholder="请输入消费总额" placeholder-class="fui-phcolor" />
	   </view>
	</fui-list-cell>
</view>
</template>

<script>
	
	export default {
		data() {
			return {
				 files: [] //最多上传9张图片
			}
		},
		methods: {
			 chooseImage: function (e) {
					let that = this;
					if (that.files.length >= 9) {
						this.fui.toast("最多上传9张图片");
						return
					}
					uni.chooseImage({
						count: 9 - that.files.length,
						sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
						success: function (res) {
							// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
							that.files=that.files.concat(res.tempFilePaths)
							//上传功能已移除
							//...
						}
					})
				},
				previewImage: function (e) {
					uni.previewImage({
						current: e.currentTarget.id, 
						urls: this.files 
					})
				},
				deleteImage: function (e) {
					const index = e.index;
					this.files.splice(index, 1);
				}
		}
	}
</script>

<style>
@import '../../../static/css/fireui.css';

.container {
  padding: 30rpx 0 80rpx 0;
  box-sizing: border-box;
  overflow: hidden;
}

.fui-padding {
  padding: 0 30rpx;
  box-sizing: border-box;
  overflow: hidden;
}

.fui-title {
  padding: 55rpx 0 30rpx 0;
  font-size: 32rpx;
  color: #333;
  font-weight: bold
}

.fui-flex {
  align-items: center;
}

.fui-triangle {
  margin-right: 30rpx;
}
.fui-checkbox{
  margin-left: 60rpx;
}
.fui-top40 {
  margin-top: 40rpx;
}

.fui-pl-30{
	padding-left: 30rpx;
}

</style>
