<template>
	<view class="body" :style="'height:'+ pageHeight+'px'">
		<view class="title">
			<view class="title-bef" @click="checkTab(0)">
				<text :class="seletedTab == 0 ? 'seleted' : ''">待我审批</text>
			</view>
			<view class="title-aft" @click="checkTab(1)">
				<text  :class="seletedTab == 1 ? 'seleted' : ''">历史审批</text>
			</view>
		</view>
		
		<view class="list">
			<view class="list-tip" @click="screen"><text>筛选</text>
				<text class="iconfont iconpaixu"></text>
			</view>
			<scroll-view :scroll-top="0"
			:style="'height:'+ scrollHeight+'px;'"
			scroll-y="true"
			 @scroll="scroll"
			class="scroll-Y" 
			@scrolltoupper="upper" 
			@scrolltolower="lower">
				 <view class="detail" v-for="item in 10" :key='item'>
					<view class="detail-ul">
						<text>计划名称：</text>
						<text>2020-10-25月度备件计划</text>
					</view>
					<view class="detail-ul">
						<text>计划类型：</text>
						<text>采购方案</text>
					</view>
					<view class="detail-ul">
						<text>提交日期：</text>
						<text>2020-10-25</text>
					</view>
						
					<view class="detail-ul">
						<text>审核通过日期：</text>
						<text>2020-10-25</text>
					</view>
					
					<view class="detail-ul">
						<text>审核状态：</text>
						<text class="status">待审核</text>
						<view class="more">查看更多
							<text class="iconfont iconxiangyou" style="font-size: 12px;"></text>
						</view>
					</view>
				 </view>
		   </scroll-view>
			
		</view>
		<uni-popup ref="onlyhover" type="bottom" :maskClick=true>
			<view class="date-select">
				<view class="demo-flex">
					<view class="select-time">
						审批状态
					</view>
					<view class="of-sourceof" @click="closemask">
						确认 
					</view>
				</view>
				<picker-view
				indicator-style="height: 40px;"
				 class="picker-view" 
				v-model="defaultValue"  
				@pickstart="pickstart"
				@change="bindChange">
					<picker-view-column>
						<view class="item" v-for="(item,index) in captureOptions" :key="index">{{item.text}}</view>
					</picker-view-column>
				</picker-view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defaultValue: '',
				captureOptions: [
					{
						text: '全部',
						value: ''
					},
					{
						text: '已通过',
						value: ''
					},
					{
						text: '已驳回',
						value: ''
					},
				],
				selectscooldata: null,
				pageHeight: 0,
				scrollHeight: 0,
				seletedTab: 0
			}
		},
		onReady: function() {
			let t = this
			uni.getSystemInfo({
				success: function(res) {
					console.log('pageHeight',res.windowHeight)
					t.pageHeight = res.windowHeight
					t.scrollHeight = res.windowHeight - 70
				}
			})
		},
		methods: {
			checkTab(index) {
				this.seletedTab = index
			},
			upper:function(e){
				
			},
			lower:function(e) {
			},
			scroll: function(e){
			},
			closemask() {
				this.$refs.onlyhover.close();
			},
			screen() {
				this.$refs.onlyhover.open();
			},
			bindChange(e) {
					this.selectscooldata=e;
					if(e.detail&&e.detail.value ){
					
					}else{
						// 用户没有滚动，说明用户选择的是我们给用户展示的默认值
					}
			},
			pickstart(e) {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.demo-flex{
		display: flex;
		align-items: center;
		.select-time{
		height:96rpx;
		line-height: 96rpx;
		font-size: 32rpx;
		font-family: "PingFangSC, PingFangSC-Medium";
		font-weight: 500;
		text-align: center;
		color: #323233;
		flex: 1;
		padding-left: 90rpx;
		
		}
		.of-sourceof{
		
		height:96rpx;
		line-height: 96rpx;
		font-size: 30rpx;
		font-family: "PingFangSC, PingFangSC-Regular";
		text-align: center;
		color: #3388ff;
		padding-right: 32rpx;
		}
	}
	.item{
		height: 40px !important;
	}
	.date-select {
	width: 100%;
	height: 500rpx;
	border-top-left-radius: 40rpx;
	border-top-right-radius: 40rpx;
	background-color: #FFFFFF;
	position: relative;
	.picker-view {
	background-color: #EEEEEE;
	position: absolute;
	width: 100%;
	height: 388rpx;
	bottom: 20rpx;
	.item {
		height: 88rpx;
		line-height: 68rpx;
		font-size: 32rpx;
		text-align: center;
	}
	}
	.btn{
		width: 100%;
		height: 100rpx;
		box-sizing: border-box;
		
		.btn-left,.btn-right{
			color: #FFFFFF;
			width: 150upx;
			height: 90upx;
			line-height: 90upx;
			text-align: center;
			border-radius: 15upx;
		}
		
	}
	}
	.body{
		padding: 10px 0;
		font-size: 14px;
		color: #333;
		padding-top: 0px;
		.title{
			    /* width: 75%; */
			    height: 40px;
			    padding: 0 12.5%;
			    margin: 0 auto;
			    -webkit-box-shadow: 0px 0px 10px #E5E5E5;
			    box-shadow: 0px 2px 5px #E5E5E5;
				margin-bottom: 8px;
				padding-top: 10px;
			.title-bef,.title-aft{
				width: 50%;
				font-size: 1.1rem;
				font-weight: 500;
				text-align: left;
				float: left;
				.seleted{
					height: 30px;
					color: #0859A8;
					display: inline-block;
					border-bottom: 2px solid #0859A8;
				}
			}
			.title-aft{
				text-align: right;
				
			}
		}
		.list{
			text-align: right;
			.list-tip{
				color: #ACACAC;
				margin-bottom: 8px;
				padding-right: 10px;
			}
		}
		.detail:first-child{
			margin-top: 7px;
		}
		.detail{
			    width: calc(100% - 20px);
			    bottom: 1px solid #0859A8;
			    -webkit-box-shadow: 0px 0px 10px #E5E5E5;
			    box-shadow: 0px 0px 10px #E5E5E5;
			    padding-bottom: 8px;
			    padding-left: 8px;
			    margin-left: 10px;
			    text-align: left;
			    background: #fff;
			    overflow: hidden;
			    -webkit-box-sizing: border-box;
			    box-sizing: border-box;
			    margin-bottom: 10px;
			.detail-ul{
				font-size: 14px;
				color: #333;
				margin-top: 8px;
				.status{
					color: #ACACAC;
				}
				.more{
					width: 66px;
					font-size: 0.7rem;
					float: right;
					color: #ACACAC;
				}
			}
		}
	}

</style>
