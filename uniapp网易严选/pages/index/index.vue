<template>
	<view id="indexContainer">
		<!-- 页面头部 -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search_div">
				<view class="iconfont icon-sousuo"></view>
				<input type="text" placeholder="搜索商品" placeholder-class="search_text" />
			</view>
			<button class="btn">
				七月
			</button>
		</view>
		<!-- 导航滚动条 -->
		<scroll-view scroll-x="true" enable-flex class="navScroll" v-if="indexData.kingKongModule">
			<view class="navItem" :class="navIndex === -1?'active':''" @click="change(-1)">推荐</view>
			<view class="navItem" :class="navIndex === index?'active':''" @click="change(index)" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">{{item.text}}</view>
		</scroll-view>
		<!-- 内容区域 -->
		<scroll-view scroll-y="true" class="recommendScroll">
			<Recommend v-if="navIndex===-1"/>
			<CateList v-else :navIndex="navIndex"/>
		</scroll-view>
	</view>
</template>

<script>
	import {mapActions,mapState} from 'vuex';
	import request from '../../utils/request.js';
	import indexData from '../../api/datas/index.json';
	import Recommend from '../../components/recommend/recommend.vue';
	import CateList from '../../components/cateList/cateList.vue';
	export default {
		data(){
			return {
				navIndex:-1
			}
		},
		// 发送请求的时机
		// 小程序 -> onLoad  -> 页面开始加载
		// Vue	 -> mounted -> 页面渲染完毕,挂载结束
		// uniapp中既可以使用小程序的生命周期函数,也可以使用Vue的生命周期函数
		// 无论是uniapp还是mpvue,都推荐使用Vue生命周期函数,不推荐小程序的
		// onLoad(){
		// 	console.log('onLoad')
		// },
		mounted(){
			// console.log('mounted')
			// this.sendAjax('/getIndexData')
			// this.$store.dispatch('getIndexData')
			this.getIndexData()
		},
		methods:{
			async sendAjax(url){
				let result = await request(url);
				if(!result){
					result = indexData;
				}
				// console.log(result)
				this.indexData=indexData;
			},
			change(index){
				this.navIndex=index;
			},
			...mapActions({
				getIndexData:'getIndexData'
			})
		},
		computed:{
			...mapState({
				indexData:state=>state.home.indexData
			})
		},
		components:{
			Recommend,
			CateList
		}
	}
</script>

<style lang="stylus">
#indexContainer
	.header
		display flex
		align-items center
		margin-top 20upx
		.logo
			width 140upx
			height 40upx
			margin 0 20upx
		.search_div
			position relative
			background #ededed
			height 60upx
			border-radius 10upx
			padding-left 65upx
			.iconfont
				position absolute
				left 20upx
				top 25%
			input
				height 100%
				.search_text
					text-align center
					font-size 24upx
					text-indent -60upx
		.btn
			width 144upx
			height 60upx
			font-size 24upx
			text-align center
			color #b4282d
			line-height 60upx
			white-space nowrap
			overflow hidden
			text-overflow ellipsis
			margin 0 20upx
	.navScroll
		display flex
		white-space nowrap
		height 80upx
		.navItem
			display inline-block
			font-size 28upx
			margin 0 10upx
			height 80upx
			line-height 80upx
			width 140upx
			text-align center
			box-sizing border-box
			&.active
				border-bottom 1upx solid #bb2c08
	.recommendScroll
		height calc(100vh - 160upx)
</style>
