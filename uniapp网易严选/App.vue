<script>
	import request from 'utils/request.js';
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		mounted(){
			wx.login({
				success:async ({code})=>{
					let token=await request('/getOpenId',{code});
					wx.setStorageSync('token',token);
				}
			})
		}
	}
</script>

<style lang="stylus">
	/*每个页面公共css */
@import url(./static/iconfont/iconfont.styl);
page
	height 100%
</style>
