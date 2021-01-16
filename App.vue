<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss" scoped>
	/*每个页面公共css */
	@import url("~@/static/iconfont.css");
	/*设置字体图标*/
	.iconfont {
	    font-family: "iconfont" !important;
	    font-size: 1em;
	    font-style: normal;
	}
</style>
