<template>
	<view class="body">
		<view class="content">
			<view class="edit" @click="linkUrl()">
				<text>修改密码</text>
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
				uni.navigateTo({url: '/pages/edit/edit'})
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
	.edit{
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #F5F5F5;
		
		.icon-right{
			float: right;
			color: #999999;
		}
	}
	
</style>
