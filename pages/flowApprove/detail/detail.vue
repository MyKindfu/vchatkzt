<template>
	<view class="body">
		<view class="header"></view>
		<view class="content">
			<view class="detail-ul">
				<text>计划名称：</text>
				<text>{{flowApproveItem.form.planName}}</text>
			</view>
			<view class="detail-ul">
				<text>计划编号：</text>
				<text>{{flowApproveItem.form.coded ? flowApproveItem.coded : '无'}}</text>
			</view>
			<view class="detail-ul">
				<text>计划类型：</text>
				<text>{{pagesQuery.name}}</text>
			</view>
			<view class="detail-ul">
				<text>申请人：</text>
				<text>{{flowApproveItem.form.applyName}}</text>
			</view>
			<view class="detail-ul">
				<text>申请部门：</text>
				<text>{{flowApproveItem.form.department}}</text>
			</view>
			<view class="detail-ul">
				<text>物料名称：</text>
				<text>{{flowApproveItem.form.materiel.name}}</text>
			</view>
			<view class="detail-ul">
				<text>物料类型：</text>
				<text>{{flowApproveItem.form.materiel.typeName}}</text>
			</view>
			<view class="detail-ul">
				<text>规格型号：</text>
				<text>{{flowApproveItem.form.materiel.model}}</text>
			</view>
			<view class="detail-ul">
				<text>计件单位：</text>
				<text>{{flowApproveItem.form.materiel.unit}}</text>
			</view>
			<view class="detail-ul">
				<text>原品牌推荐：</text>
				<text>{{flowApproveItem.form.materiel.recommend}}</text>
			</view>
			<view class="detail-ul">
				<text>使用位置：</text>
				<text>{{flowApproveItem.form.useLocal}}</text>
			</view>
			<view class="detail-ul">
				<text>需求数量：</text>
				<text>{{flowApproveItem.form.total}}</text>
			</view>
			<view class="detail-ul">
				<text>需求日期：</text>
				<text>{{flowApproveItem.form.demandDate}}</text>
			</view>
			<view class="detail-ul">
				<text>提交日期：</text>
				<text>{{flowApproveItem.form.createDatetime | formatDate}}</text>
			</view>
			<view class="detail-ul">
				<text>审核状态：</text>
				<text class="status">{{flowApproveItem.enumStatus | filterPlanEnumStatus}}</text>
				<!-- <view class="more" @click="checkDetail(flowApproveItem)">查看更多
					<text class="iconfont iconxiangyou" style="font-size: 12px;"></text>
				</view> -->
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
		mounted() {
			
		},
		onLoad() {
			console.log(getCurrentPages())
			var pages = getCurrentPages();
			console.log(JSON.parse(pages[pages.length - 1].options.flowApprove))
			this.flowApproveItem = JSON.parse(pages[pages.length - 1].options.flowApprove)
		},
		data() {
			return {
				flowApproveItem: {}
			}
		},
		onReady:function(){
			
			
			
		},
		methods: {
			
		},
		created() {
		
		},
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
			>text:last-child{
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
