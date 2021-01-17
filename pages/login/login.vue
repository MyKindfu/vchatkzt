<template>
    <view class="body" :style="{height: pageHeight+'px'}">
        <view class="img-wrap">
			<image src="/static/image/indeximg.png" mode=""></image>
        </view>
		<view class="login-warp">
			<form>
				<view class="login-list user-name">
					<text class="iconfont icontouxiang"></text>
					<input class="uni-input" v-model="userName" type="text" placeholder="请输入用户名" />
				</view>
				<view class="login-list user-paswd">
					<text class="iconfont iconsuo"></text>
					<input class="uni-input" v-model="pwd" :type="isActivePwd ? 'password' : 'text'" placeholder="请输入密码" />
					<text class="iconfont" :class="isActivePwd ? 'iconyanjing-guan' : 'iconyanjing-'" @click="checkPwd"></text>
				</view>
				<view class="remb-paswd">
					<checkbox color="#333" style="transform:scale(0.5)" :checked="checkedPwd" @click="checkBox($event)" />记住密码
				</view>
				<view class="btn-warp">
					<button type="default" @click="login">登 录</button>
				</view>
				
			</form>
		</view>
    </view>
</template>

<script>
	import CryptoJS from "crypto-js"
	export default {
		data() {
			return {
				pageHeight: 0,
				isActivePwd: true,
				userName:'',
				pwd: '',
				checkedPwd: false,
				sn: null
			}
		},
		onReady: function() {
		   let t = this
		   uni.getSystemInfo({
		    success: function(res) {
		     console.log('pageHeight',res.windowHeight)
		     t.pageHeight = res.windowHeight
		    }
		   })
		  },
		  mounted() {
		  	const userName = uni.getStorageSync('userName')
		  	const pwd = uni.getStorageSync('pwd')
			console.log(pwd, userName)
		  	if(userName !='' && pwd != ''){
		  		this.userName = userName
		  		this.pwd = pwd
		  	}
		  },
		methods: {
			    /*
			            ** randomWord 产生任意长度随机字母数字组合
			            ** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
			            */
			randomWord(randomFlag, min, max){
				var str = "",
					range = min,
					arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
				// 随机产生
				if(randomFlag){
					range = Math.round(Math.random() * (max-min)) + min;
				}
				for(var i=0; i<range; i++){
					let pos = Math.round(Math.random() * (arr.length-1));
					str += arr[pos];
				}
				return str;
			},
			/**
			 * 加密
			 * @param randomWord
			 * @param text
			 * @returns {string}
			 */
			setAse(randomWord, text){
				let key = CryptoJS.enc.Utf8.parse(randomWord);
				let iv = CryptoJS.enc.Utf8.parse(randomWord);
				let srcs = CryptoJS.enc.Utf8.parse(text);
				let encrypted = CryptoJS.AES.encrypt(srcs, key, {
					iv,
					mode: CryptoJS.mode.CBC,
					padding: CryptoJS.pad.ZeroPadding
				});
				return encrypted.toString()
			},
			checkPwd:function() {
				this.isActivePwd = !this.isActivePwd
				console.log(this.isActivePwd)
			},
			  //勾选添加按钮
			checkBox(e) {
				let that = this;
				this.checkedPwd = !this.checkedPwd
			},
			 /**
			 * 获取uuid
			 */
			getUUID () {
				this.sn =  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
					return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
				})
			},
			login() {
				this.getUUID()
				let t = this
				console.log(this.checkedPwd)
				console.log(this.userName)
				console.log(this.pwd)
				if(this.checkedPwd){
					uni.setStorageSync('userName', t.userName)
					uni.setStorageSync('pwd', t.pwd)
				}
			   if(this.userName != '' && this.pwd != ''){
				    let  keyStr = this.randomWord(false, 16)
				   let  keyStr2 = this.randomWord(false, 16)
				   let asePwd = this.setAse(keyStr,  this.pwd)
				   let userName =  this.setAse(keyStr2,  this.userName)
				   let str = `${keyStr.substring(0,4)}${asePwd.substring(0,4)}${keyStr.substring(4,8)}${asePwd.substring(4,8)}${keyStr.substring(8,12)}${asePwd.substring(8,12)}${keyStr.substring(12,16)}${asePwd.substring(12)}`
				   let str2 = `${keyStr2.substring(0,4)}${userName.substring(0,4)}${keyStr2.substring(4,8)}${userName.substring(4,8)}${keyStr2.substring(8,12)}${userName.substring(8,12)}${keyStr2.substring(12,16)}${userName.substring(12)}`
				 let params = {
					 password: this.pwd,
					 username: this.userName
				 }
				   this.$request(
					   this.$urlConfig.user + `/auth/loginByMobile`,
					   params,
					   'POST',
					   {
						   sn: this.sn,
						   from: 'MOBLIE',
					   }).then(res => {
							console.log(res)
							if(res.code == 0){
								 uni.setStorageSync('token', res.data.token)
								  uni.setStorageSync('loginUser', res.data.loginUser)
								uni.switchTab({
									url: `/pages/index/index`,
								});
							}
							uni.switchTab({
								url: `/pages/index/index`,
							});
				   })
			   }else{
				   uni.showToast({
					   icon: 'none',
				       title: '请输入账号或密码！',
				       duration: 2000
				   });
			   }
			}
				
		}
	}
</script>

<style lang="scss" scoped>
	.body{
		background-color: #2f5bc2;
		overflow: hidden;
		font: 0.9rem;
	}
	.img-wrap{
		width: 246px;
		height: 176px;
		margin:15px auto;
		overflow: hidden;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.login-warp{
		width: 90%;
		background-color: #fff;
		color: #333;
		height: auto;
		border-radius: 8px;
		margin: 15px auto;
		overflow: hidden;
		
		.login-list{
			width: 60%;
			height: 50px;
			margin: 20px auto 0;
			line-height: 55px;
			border-bottom: 1px solid #C0CFE4;
		}
		.user-name,.user-paswd{
			margin-top: 10px;
			text{
				float: left;
			}
			input{
				width: calc(100% - 50px);
				margin: 12px 0 0 8px;
				float: left;
				height: 30px;
				text-align: left;
				font-size: 0.9rem;
			}
			.pas-eye{
				float: right;
			}
		}
		.user-name{
			margin-top: 20px;
		}
		
		.remb-paswd{
			width: 60%;
			margin:15px auto;
			color: #333;
			text-align: left;
			font-size: 0.9rem;
			checkbox{
				transform-origin: 0 50%;
				width: 20px;
			}
		}
		.btn-warp{
			width: 60%;
			margin:35px auto 30px;
			button{
				color: #fff;
				font-size: 1.2rem;
				background-color: #2f5bc2;
				border-radius: 50px;
			}
		}
	}

</style>
