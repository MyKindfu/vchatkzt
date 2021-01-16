<template>
	<view class="body">
		<view class="title">审批情况</view>
		<view class="succ">
			填写同意理由*
		</view>
		<textarea placeholder-style="color:#ccc" placeholder="填写同意理由"/>
		<view class="btn-warp">
			<button type="default" @click="">登 录</button>
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
		padding: 10px;
		font-size: 14px;
		color: #333;
	}
	
	.title{
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #C0CFE4;
		opacity: 0.6;
	}
	.succ{
		margin-top: 25px;
	}
	textarea{
		border: 1px solid #C0CFE4;
		width: 100%;
		margin-top: 5px;
		padding: 5px;
		box-sizing: border-box;
		border-radius: 5px;
	}

</style>
