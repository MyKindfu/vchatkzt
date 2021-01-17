<template>
	<view class="body">
		<view class="header"></view>
		<view class="content">
			<view class="detail-ul">
				<text>计划类型：</text>
				<text class="detail-right"> 采购方案</text>
			</view>
			<view class="detail-ul">
				<text>计划类型：</text>
				<text class="detail-right"> 采购方案</text>
			</view>
			<view class="detail-ul">
				<text>采购方案名称：</text>
				<text class="detail-right"> 12月计划</text>
			</view>
			<view class="detail-ul">
				<text>采购方式：</text>
				<text class="detail-right"> 邀请</text>
			</view>
			<view class="detail-ul">
				<text>采购流程：</text>
				<text class="detail-right"> 采购方案计划</text>
			</view>
			<view class="detail-ul">
				<text>定标流程：</text>
				<text class="detail-right"> 采购方案</text>
			</view>
			<view class="detail-ul">
				<text>计划类型：</text>
				<text class="detail-right"> 定标方案流程</text>
			</view>
			<view class="detail-ul">
				<text>是否报名：</text>
				<text class="detail-right"> 是</text>
			</view>
			<view class="detail-ul">
				<text>报名开始：</text>
				<text class="detail-right"> 2015-01-01</text>
			</view>
			<view class="detail-ul">
				<text>报名结束：</text>
				<text class="detail-right"> 2019-02-01</text>
			</view>
			<view class="detail-ul">
				<text>限定付款方式：</text>
				<text class="detail-right"> 125996</text>
			</view>
			
			<view class="detail-ul">
				<text>预付金额：</text>
				<text class="detail-right"> 59688</text>
			</view>
			<view class="detail-ul">
				<text>是否发布：</text>
				<text class="detail-right"> 是</text>
			</view>
			<view class="detail-ul">
				<text>澄清发布人：</text>
				<text class="detail-right"> 张三</text>
			</view>
			<view class="detail-ul">
				<text>澄清人电话：</text>
				<text class="detail-right"> 1838026568</text>
			</view>
			<view class="detail-ul">
				<text>报价开始：</text>
				<text class="detail-right"> 2019-01-01</text>
			</view>
			<view class="detail-ul">
				<text>报价截止：</text>
				<text class="detail-right"> 2019-01-01</text>
				<view class="more">查看详情
					<text class="iconfont iconxiangyou" style="font-size: 12px;"></text>
				</view>
			</view>
		</view>
		<view class="tips">
			进度进展
		</view>
		<view class="content content-step">
			<view class="detail-ul">
				<uni-steps :options="[{title:'张三',detail: '业务员',desc:'流程发起人'},{title:'卖家发货',detail: '业务员',desc:'同意'},{title:'买家签收',desc:'2018-11-13'},{title:'交易完成',desc:'2018-11-14'}]" direction="column" :active="2"></uni-steps>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	
	export default {
		components: {uniSteps},
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
		background-color: #2f5bc2;
		z-index: -1;
	}
	.content{
		width: calc(100% - 20px);
		background: #fff;
		box-shadow: 0 0 10px #E5E5E5;
		margin: 20px auto;
		padding: 15px 20px 10px;
		box-sizing: border-box;
		.detail-ul{
			font-size: 14px;
			color: #333;
			margin-top: 8px;
			.detail-right{
				color: #ACACAC;
			}
			.more{
				width: 68px;
				float: right;
				color: #ACACAC;
			}
		}
	}
	.tips{
		font-size: 14px;
		margin-left: 10px;
	}
	.content-step{
		margin-top: 10px;
	}
</style>
