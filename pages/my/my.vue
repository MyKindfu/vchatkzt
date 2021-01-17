<template>
	<view class="body">
		<view class="header"></view>
		<view class="content">
			<view class="warp">
				<view class="img-circle">
					<image src="/" mode=""></image>
				</view>
				<view class="center-info">
					<text class="info-name">张三啊</text>
					<text class="info-desc">业务员</text>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="feedback">
				<text>意见反馈</text>
				<text class="icon-right iconfont iconxiangyou"></text>
			</view>
			<view class="setting" @click="linkUrl()">
				<text>设置</text>
				<text class="icon-right iconfont iconxiangyou"></text>
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
			linkUrl(){
				uni.navigateTo({url: '/pages/setting/setting'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body{
		position: relative;
		height: auto;
		overflow: hidden;
	}
	.header{
		width: 100%;
		height: 100px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 0 0 15px 15px;
		background-color: #4985e1;
		z-index: -1;
	}
	.content{
		width: calc(100% - 20px);
		background: #fff;
		box-shadow: 0 0 10px #E5E5E5;
		margin: 20px auto;
		padding: 15px 20px 60px;
		box-sizing: border-box;
		
		.warp{
			height: 50px;
			.img-circle{
				width: 70px;
				height: 70px;
				border-radius: 50%;
				background: #ccc;
				float: left;
				image{
					width: 100%;
					height: 100%;
					overflow: hidden;
				}
			}
			.center-info{
				width: 200px;
				float: left;
				margin-left: 12px;
				.info-name{
					display: flex;
					margin-top: 12px;
					margin-bottom: 4px;
					font-size: 16px;
				}
				.info-desc{
					font-size: 14px;
					color: #7b7a7a;
				}
			}
		}
	
	}
	.feedback,.setting{
		margin-top: 10px;
		font-size: 14px;
		line-height: 19px;
		height: 30px;
		border-bottom: 1px solid #F5F5F5;
		.icon-right{
			float: right;
			color: #999999;
		}
	}
	.setting{
		margin-top: 20px;
	}
	
	
</style>
