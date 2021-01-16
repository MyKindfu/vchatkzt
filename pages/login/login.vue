<template>
    <view class="body" :style="{height: pageHeight+'px'}">
        <view class="img-wrap">
			<image src="/static/image/indeximg.png" mode=""></image>
        </view>
		<view class="login-warp">
			<form @submit="formSubmit" @reset="formReset">
				<view class="login-list user-name">
					<text class="iconfont icontouxiang"></text>
					<input class="uni-input" focus placeholder="请输入用户名" />
				</view>
				<view class="login-list user-paswd">
					<text class="iconfont icontouxiang"></text>
					<input class="uni-input" focus placeholder="请输入密码" />
					<text class="iconfont icontouxiang pas-eye"></text>
				</view>
				<view class="remb-paswd">
					<checkbox value="cb" color="#333" style="transform:scale(0.5)" />记住密码
				</view>
				<view class="btn-warp">
					<button type="default" @click="">登 录</button>
				</view>
				
			</form>
		</view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				pageHeight: 0
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
		methods: {
			
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
