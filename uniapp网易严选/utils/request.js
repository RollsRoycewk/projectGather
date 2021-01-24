// 用于发送请求
// uniapp中发送请求 -> uni.request
import config from './config.js'
export default (url,data={},method="GET")=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:config.host + url,
			data,
			method,
			success(res) {
				// console.log(res)
				resolve(res.data)
			},
			fail(err) {
				// console.log(err)
				// reject(err)
				resolve(false)	//欺骗状态
			}
		})
	})
}