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
					<view class="left-header-text">管理你的工作让你的生活更有品质</view>
				</view>
				<view class="right-header">
					<image src="../../static/image/indeximg.png" mode=""></image>
				</view>
		   </view>
			
		   <view class="container-main">
				<view class="container-main-header">
					欢迎回来，{{loginUser.name}}
				</view>
				   <view class="menu-main" v-for="(item, index) in menuDataList" :key="index" v-if="item.menuChildList.length > 0">
						<view class="menu-list-header">{{item.name}}</view>
						<view class="menu-list-content" v-if="item.menuChildList.length > 0">
							<view class="menu-li" v-for="(menu,index2) in item.menuChildList" :key="index2" @click="checkMenu(menu)">
								<view class="iconfont" :class="menu.minniAppIcon"></view>
								<view>{{menu.name}}</view>
								<uni-badge style="position: absolute; right: 22px;top: 0;" v-if="menu.count" :text="menu.count" type="error"></uni-badge>
							</view>
						</view>
				   </view>	
		   </view>		 
	   </scroll-view>
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default {
		components: {uniBadge},
		data() {
			return {
				pageHeight: 0,
				current: 1,
				size: 10,
				menuData: [],
				loginUser: uni.getStorageSync('loginUser'),
				BadgeKey: [],
				DataNum: [],
				menuDataList: []
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
				this.$request(this.$urlConfig.user + `/srm/users/getMobileMenu`,'GET').then(res => {
					if(res.code == 0){
						this.menuData = res.data
						this.getBadgeKey(res.data)
						this.getDataNum()
					}
				})
			},
			getBadgeKey(data) {
				data.forEach((item, index) => {
					if(item.badgeKey) this.BadgeKey.push(item.badgeKey)
					if(item.menuChildList.length > 0) this.getBadgeKey(item.menuChildList)
				})
			},
			getDataNum() {
				console.log(this.BadgeKey)
			   	this.$request(this.$urlConfig.oa + `/srm/oa/reviewCount?processKey=${this.BadgeKey.join(',')}`,'GET').then(res => {
			   		console.log(res)
					if(res.code == 0){
						this.DataNum = res.data
						this.menuDataList = this.setMenu(this.menuData)
							console.log('获取后==',this.menuDataList)
			   		}
			   	})
			},
			setMenu(data) {
				data.forEach((item) => {
					this.DataNum.forEach((obj) =>{
						if(item.badgeKey == obj.processKey){
							item.count = obj.count
						}
						if(item.menuChildList.length > 0) this.setMenu(item.menuChildList)
					})
				})
				console.log(data)
				return data
			},
			/**
			 * 选择菜单
			 * @param {Object} item
			 */
			checkMenu(item) {
				let count = null
				if(item.count > 0) count = item.count
				let url = ''
				console.log(item)
				if(item.router.indexOf("?") != -1){
					url = `/pages/${item.router.split("?")[0]}/${item.router}&count=${count}&name=${item.name}`
				} else{
					url = `/pages/${item.router}/${item.router}?processKey=${item.badgeKey}&count=${count}&name=${item.name}`
				}
				console.log(url)
				uni.navigateTo({
				    url: url
				});
			},
			upper:function(e){
				
			},
			lower:function(e) {
				
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
		  position: relative;
		  .iconfont{
			 
		  }
		}
	}
		
</style>
