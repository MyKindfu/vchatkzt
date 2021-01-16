<template>
	<view class="container" :style="'height:'+pageHeight +'px'">
	  <view class="app-header">
	  	<view class="left-header">
			<view class="left-header-title">任务管理系统</view>
			<view class="left-header-text">	管理你的工作，让你的生活更有品质</view>
		</view>
		<view class="right-header">
			<image src="../../static/image/indeximg.png" mode=""></image>
		</view>
	  </view>
	  <view class="container-main">
	  	
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
	.container {
		height: 100%;
		width: 100%;
		.app-header{
			padding: 10px;
			height: 100px;
			background: #2f5bc2;
			color: #fff;
			font-size: 12px;
			text-align: left;
			display: flex;
			justify-content: space-between;
			
		}
		.left-header-title{
			 margin-top: 10px;
			font-size: 16px;
			margin-bottom: 20px;
			position: relative;
		}
		.left-header-title:after{
			content: '';
			width: 100px;
			height: 1px;
			background-color: #fff;
			position: absolute;
			bottom: -10px;
			left: 0;
		}
		.left-header-text{
			font-size: 12px;
		}
		.right-header{
			image{
				width: 137px;
				height: 87px;
			}
		}
				
	}
	.container-main{
	  height: calc(100% - 100px)
	}
		
</style>
