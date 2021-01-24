// @ts-nocheck
import Vue from "vue";
import store from "./store/index";
import App from "./App.vue";

// 引入公共样式
import "./assets/css/common.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
