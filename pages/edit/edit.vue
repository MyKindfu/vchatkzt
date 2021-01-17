<template>
	<view class="body">
		<view class="header"></view>
		<view class="content">
			<view class="loginout-list">
				<input class="uni-input" focus placeholder="手机号或邮箱" />
			</view>
			<view class="loginout-list verifiy">
				<input class="uni-input" focus placeholder="验证码" />
				<view class="send-warp">
					<button type="default" @click="">发 送</button>
				</view>
			</view>
			<view class="loginout-list">
				<input class="uni-input" focus placeholder="请输入6至12位数字或字母密码" />
			</view>
			<view class="loginout-list">
				<input class="uni-input" focus placeholder="确认新密码" />
			</view>
			<view class="btn-warp">
				<button type="default" @click="">完 成</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.body{
		height: auto;
		overflow: hidden;
	}
	.header{
		width: 100%;
		height: 100px;
		border-radius: 0 0 15px 15px;
		background-color: #fff;//2f5bc2
		z-index: -1;
	}
	.content{
		width: calc(100% - 20px);
		background: #fff;
		margin: 10px auto;
		box-sizing: border-box;
		.loginout-list{
			width: 80%;
			height: 34px;
			margin: 20px auto 0;
			border-bottom: 1px solid #C0CFE4;
			input{
				height: 100%;
				padding-left: 5px;
			}
		}
		.verifiy{
			border-bottom-style: hidden;
		}
	}
	.verifiy input{
		width: calc(90% - 90px);
		float: left;
		border-bottom: 1px solid #C0CFE4;
	}
	.send-warp{
		width: 80px;
		float: right;
		button{
			height: 32px;
			line-height: 32px;
			font-size: 14px;
			margin-top: 3px;
			color: #fff;
			background-color: #2f5bc2;
		}
	}
	.btn-warp{
		width: 80%;
		margin:35px auto 30px;
		button{
			color: #fff;
			font-size: 1.1rem;
			background-color: #2f5bc2;
			border-radius: 5px;
		}
	}
</style>
