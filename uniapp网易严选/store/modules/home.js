import request from '../../utils/request.js'
import indexData from '../../api/datas/index.json';
import {CHANGEINDEXDATAMUTATION} from '../mutation-type.js';
const state ={
	initData:"我是初始化数据",
	indexData:{}
}

const mutations ={
	[CHANGEINDEXDATAMUTATION](state,indexData){
		state.indexData=indexData;
	}
}

const actions ={
	async getIndexData({commit}){
		let result = await request('/getIndexData');
		// console.log('result',result)
		if(!result||result.code!=200){
			result = indexData;
		}else{
			result=result.data;
		}
		commit(CHANGEINDEXDATAMUTATION,result);
		
		// console.log(result)
		// this.indexData=indexData;
	}
}

export default{
	state,
	mutations,
	actions
}