<template>
	<view class="body" :style="{height: pageHeight+'px'}">
		<view class="content">
			<view class="feedback">
				<text>个人资料</text>
				<text class="icon-right iconfont iconxiangyou"></text>
			</view>
			<view class="setting" @click="linkUrl()">
				<text>账户安全</text>
				<text class="icon-right iconfont iconxiangyou"></text>
			</view>
		</view>
		<view class="btn-warp">
			<button type="default" @click="">退出登录</button>
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
			linkUrl(){
				uni.navigateTo({url: '/pages/safe/safe'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body{
		position: relative;
		overflow: hidden;
	}
	.content{
		width: calc(100% - 20px);
		background: #fff;
		margin: 5px auto;
		padding: 10px 10px 20px;
		box-sizing: border-box;
	}
	.feedback,.setting{
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #F5F5F5;
		
		.icon-right{
			float: right;
			color: #999999;
		}
	}
	.setting{
		margin-top: 20px;
	}
	.btn-warp{
		width: calc(100% - 20px);
		position: absolute;
		left: 10px;
		bottom: 20px;
		button{
			width: 100%;
			color: #fff;
			font-size: 1rem;
			background-color: #2f5bc2;
			border-radius: 5px;
		}
	}
	
	
</style>
