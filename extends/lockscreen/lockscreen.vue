<template>
	<view class="container">
		<view class="fui-userinfo">
			<image class='fui-avatar' src='../../static/images/my/mine_def_touxiang_3x.png'></image>
			<view class="fui-nickname">echo.</view>
		</view>
		<view class="fui-pwd-tips">请输入密码</view>
		<fui-keyboard-input :inputvalue="pwdArr"></fui-keyboard-input>
		<fui-keyboard :show="true" :action="false" :mask="false" @click="keyboardClick">
			<view class="fui-flex">
				<view hover-class="opcity" :hover-stay-time="150">忘记密码</view>
				<view class="fui-fingerprint-box" hover-class="opcity" :hover-stay-time="150">
					<fui-icon name="fingerprint" :size='18' color='#5677fc'></fui-icon>
					<text class="fui-text">指纹解锁</text>
				</view>
			</view>
		</fui-keyboard>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				numberArr: [],
				pwdArr: ["", "", "", ""]
			}
		},
		methods: {
			closeKeyboard: function() {
				this.numberArr = [];
				this.pwdArr = ["", "", "", ""]
			},
			getPwd: function() {
				//判断并取出密码
				if (this.numberArr.length === this.pwdArr.length) {
					uni.showLoading({
						title: '模拟提交...',
						mask: true
					})
					setTimeout(() => {
						let pwd = this.numberArr.join('')
						this.closeKeyboard();
						this.fui.toast("您输入的密码为：" + pwd);
					}, 800);
				}
			},
			keyboardClick: function(e) {
				let numberArr = this.numberArr;
				let pwdArr = this.pwdArr;
				let index = e.index;
				if (numberArr.length === pwdArr.length || index == undefined) {
					return;
				}
				if (index == 9) { //取消键
					this.closeKeyboard();
					return;
				} else if (index == 11) {
					//退格键
					let len = numberArr.length;
					if (len) {
						pwdArr.splice(len - 1, 1, "");
					} else {
						pwdArr = ["", "", "", ""];
					}
					numberArr.pop()
				} else if (index == 10) {
					numberArr.push(0);
					pwdArr.splice(numberArr.length - 1, 1, "●");
				} else {
					numberArr.push(index + 1);
					pwdArr.splice(numberArr.length - 1, 1, "●");
				}
				this.numberArr = numberArr;
				this.pwdArr = pwdArr;
				this.getPwd()
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #fff;
	}

	.fui-userinfo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-top: 80rpx;
	}

	.fui-avatar {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
	}

	.fui-nickname {
		font-weight: bold;
		font-size: 40rpx;
		color: #333;
		padding: 20rpx 0;
	}

	.fui-pwd-tips {
		text-align: center;
		font-size: 30rpx;
		color: #666;
		padding: 60rpx 0 20rpx 0;
	}

	.fui-flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 20rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		color: #333;
	}

	.fui-fingerprint-box {
		display: flex;
		align-items: center;
	}

	.fui-text {
		margin-left: 16rpx;
		vertical-align: middle;
	}
</style>
