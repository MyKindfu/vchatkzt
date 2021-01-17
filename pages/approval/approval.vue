<template>
	<view class="body">
		<view class="title">审批情况</view>
		<view class="succ">
			填写同意理由*
		</view>
		<textarea placeholder-style="color:#ccc" placeholder="填写同意理由"/>
		<view class="btn-warp">
			<button type="default" @click="" class="btnAgreen">同意批准</button>
			<button type="default" @click=""class="btnCancel"  plain="true">取 消</button>
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
		    /* border-bottom: 1px solid #C0CFE4; */
		    opacity: 0.6;
		    padding: 5px;
		    box-shadow: 0px 0px 8px #ccc;
		    margin-top: 10px;
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
	
	.btn-warp{
		width: 80%;
		margin: 20px auto;
		.btnAgreen,.btnCancel{
			width: 45%;
			font-size: 1rem;
			float: left;
			
		}
		.btnAgreen{
			background-color: green;
			color: #fff;
		}
		
		.btnCancel{
			float: right;
			border: 1px solid #ccc;
		}
	}

</style>
