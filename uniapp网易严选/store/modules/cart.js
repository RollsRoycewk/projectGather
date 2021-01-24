import Vue from 'vue';
import {CHANGECARTLISTMUTATION,CHANGECOUNTMUTATION,CHANGESELECTMUTATION,CHANGESELECTEDALLMUTATION} from '../mutation-type.js';
const state = {
	cartList:[
		{
			"count":1,
			"selected":true,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 3532007,
		            "tagId": 128111155,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 3532007,
		    "sellVolume": 2532,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/54e9c325ef69dfead72bdb6859feb2f3.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1569859202422,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1576741386256,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 1099,
		    "categoryL2Id": 0,
		    "retailPrice": 802,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 4,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "极地探险都不怕，女式地表强温鹅绒羽绒服",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/de6493e42fe69d483df949871585c13e.png",
		    "pointsPrice": 0,
		    "simpleDesc": "90%白鹅绒，充沛保暖之选",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 300004186,
		    "displaySkuId": 300004193,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		},
		{
			"count":2,
			"selected":false,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 3533004,
		            "tagId": 128111155,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 3533004,
		    "sellVolume": 1859,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/89c86d80100a5b876a898955c09cd047.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1569859202763,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1576741589742,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 1299,
		    "categoryL2Id": 0,
		    "retailPrice": 896,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 3,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "穿上冬日小火炉，女式地表强温宽松羽绒服",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/cd41af69033066f251c9fbdcb730c517.png",
		    "pointsPrice": 0,
		    "simpleDesc": "90%白鹅绒，温暖有保障",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 300004169,
		    "displaySkuId": 300004207,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		}
	]
}

const mutations = {
	[CHANGECARTLISTMUTATION](state,shopItem){
		// console.log(shopItem)
		//判断该商品是否在cartList里已存在 includes(用于比较的数据)无法实现目前效果
		let good = state.cartList.find(item=>item.id===shopItem.id);
		if(!good){
			//首次加入的商品,没有count属性,需要人为添加
			// shopItem.count=1;
			Vue.set(shopItem,'count',1);
			Vue.set(shopItem,'selected',true);
			state.cartList.push(shopItem);
		}else{
			//再次加入的商品,具有count属性,只需要将数量加一
			good.count += 1;
			console.log(good)
		}
	},
	[CHANGECOUNTMUTATION](state,{isAdd,index}){
		// console.log('mutation',isAdd,index)
		let good = state.cartList[index];
		if(isAdd){
			//当isAdd为true,对应商品的数量需要+1
			good.count+=1;
		}else{
			//当isAdd为false,对应商品的数量需要-1
			//当商品的数量为0时,删除该商品
			if(good.count>1){
				good.count-=1;
			}else{
				// splice能实现CRUD操作
				state.cartList.splice(index,1);
			}
		}
	},
	[CHANGESELECTMUTATION](state,{selected,index}){
		// console.log(selected,index)
		state.cartList[index].selected=selected;
	},
	[CHANGESELECTEDALLMUTATION](state,selected){
		state.cartList.forEach(shopItem => shopItem.selected=selected)
	}
}

const actions = {
	
}

const getters = {
	isSelectAll(state){
		/*
		思路:
			1.遍历cartList,获取每个商品的选中状态进行判断
			2.如果购物车中的商品有一个是未选中状态,全选按钮状态为未选中状态
			3.如果购物车中的商品全部都是选中状态,全选按钮状态为选中状态
			4.如果购物车中没有商品,全选按钮状态为未选中状态
			5.返回值为布尔值		全选->true	未不选->false
		*/
	   // 如果find找到符合要求的元素,返回该元素,否则返回undefined
	   // let result = state.cartList.find(good => !good.selected)
	   // return state.cartList.length&&!result
	   
	   /*
		every()
		  1.返回值类型->布尔值
		  2.作用:用于测试数据中所有元素是否都满足条件
	   */
	  let cartList=state.cartList;
	  let result = cartList.every(shopItem => shopItem.selected);
	  return cartList.length&&result
	},
	totalPrice(state){
		/*
		reduce() 累加器
		1.作用:将数组中某个数据进行累加
		2.语法:arr.reduce((pre,next)=>{return pre+next},累加的初始值)
		首次循环
			没有传入第二个实参(累加的初始值)的情况
			1.pre得到的是数组的第一个元素,next得到的是数组的第二个元素
			有传入第二个实参(累加的初始值)的情况
			2.pre得到的是累加的初始值,next得到的是数组的第一个元素
		再次循环
			pre得到的是上次循环的返回值
		*/
	   let result=state.cartList.reduce((pre,shopItem)=>{
		   return pre + (shopItem.selected?shopItem.retailPrice * shopItem.count:0)
	   },0)
	   return result;
	},
	totalNum(state){
	   let result=state.cartList.reduce((pre,shopItem)=>{
		   return pre + (shopItem.selected?shopItem.count:0)
	   },0)
	   return result;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}