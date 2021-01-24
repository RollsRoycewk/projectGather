import Vue from 'vue'
import App from './App'
import store from './store'

//关闭控制台警告
Vue.config.productionTip = false

//App代表我项目的主组件,页面的入口文件 mpType  1)mp 小程序  2)type 类型
//App组件代表着整个应用
App.mpType = 'app'

//$mount用于挂载app这个Vue实例
const app = new Vue({
    ...App,
	store
})
app.$mount()


