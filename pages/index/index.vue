<template>
	<view class="container" :style="'height:'+pageHeight +'px'">
		<scroll-view :scroll-top="0"
		:style="'height:'+ pageHeight+'px'"
		scroll-y="true"
		 @scroll="scroll"
		class="scroll-Y" 
		@scrolltoupper="upper" 
		@scrolltolower="lower"
		   > 
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
				<view class="container-main-header">
					欢迎回来，王显苗
				</view>
				
				   <view class="menu-main">
						<view class="menu-list-header">业务审批</view>
						<view class="menu-list-content">
							<view class="menu-li" v-for="item in 10" :key="item">
								<view class="iconfont iconshenpi"></view>
								<view>准入审批</view>
							</view>
						</view>
				   </view>
				   <view class="menu-main">
						<view class="menu-list-header">业务审批</view>
						<view class="menu-list-content">
							<view class="menu-li" v-for="item in 10" :key="item">
								<view class="iconfont iconshenpi"></view>
								<view>准入审批</view>
							</view>
						</view>
				   </view>
					
		   </view>
						 
	   </scroll-view>
	

	 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageHeight: 0,
				current: 1,
				size: 10
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
			this.getData()
		},
		methods: {
			getData () {
				this.$request(this.$urlConfig.oa + `/srm/oa/reviewListByUserId?current=${this.current}&size=${this.size}`,'POST').then(res => {
					console.log(res)
					// console.log(this.$myDecrypt(res))
				  // 打印调用成功回调
				})
			},
			upper:function(e){
				
			},
			lower:function(e) {
				console.log('底部了哦---')
			},
			scroll: function(e){
			}
		},
		created () {
			// this.getData()
		}
	}
</script>

<style lang="scss" scoped>
	.menu-main{
		margin-bottom: 14px;
	}
	 .iconfont{
		  font-size: 30px;
		  color: #333333;
	  }
		 
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
	  height: calc(100% - 100px);
	  background-color: #F5F5F5;
	  padding: 10px;
	  
	}
	.container-main-header{
		font-size: 14px;
		font-weight: bold;
		color: #333;
		text-align: left;
		margin: 10px 0;
	}
		
	.menu-list-header{
		font-size: 14px;
		color: #999;
		text-align: left;
		margin-bottom: 10px;
	}
	.menu-list-content{
		// width: calc()100%;
		box-shadow: 4px 0px 7px #ccc;
		background: #fff;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;   
	   .menu-li{
		  width: calc(100% / 3); 
		  margin-bottom: 15px;
		  text-align: center;
		  font-size: 14px;
		  color: #999;
		  .iconfont{
			 
		  }
		}
	}
		
</style>
