/* 
包含项目中所有接口的ajax请求函数
函数的返回值是promise, 函数内部调用ajax模块发请求

需要掌握一个技能: 根据接口文档, 定义接口请求函数
*/
import ajax from './ajax'
import mockAjax from './mockAjax'

/* 
首页三级分类
/api/product/getBaseCategoryList GET
*/
export const reqCategoryList = () => ajax('/product/getBaseCategoryList')
/* 
export function reqCategoryList () {
  return ajax('/product/getBaseCategoryList')
} */

/* 
定义访问mock接口的接口请求函数
*/
export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')
export const reqRecommends = () => mockAjax('/recommends')

/* 
获取商品列表
/api/list POST
options: 包含所有需要传递的搜索请求参数的对象
*/
export const reqProductList = (options) => ajax.post('/list', options)

/* 
获取商品详情信息
*/
export const reqDetailInfo = (skuId) => ajax.get(`/item/${skuId}`)

/* 
获取购物车列表
/api/cart/cartList GET
*/
export const reqShopCart = () => ajax.get('/cart/cartList')

/* 
添加到购物车(对已有物品进行数量改动)
skuId: 商品ID
skuNum: 商品数量, 正数代表增加, 负数代表减少
/api/cart/addToCart/{ skuId }/{ skuNum } POST
*/
export const reqAddToCart = (skuId, skuNum) => ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)

/* 
切换某个购物项的选中状态
skuId: 商品的ID
isChecked: 商品选中状态, '0'代表不选中, '1'代表选中
/api/cart/checkCart/{skuId}/{isChecked} GET
*/
export const reqCheckCartItem = (skuId, isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)

/* 
删除购物项商品
/api/cart/deleteCart/{skuId} DELETE
*/
export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)


/* 
登录
/api/user/passport/login
*/
export function reqLogin (phone, password) {
  // 将ajax作为函数使用
  /* return ajax({
    url: '/user/passport/login',
    method: 'POST',
    data: {mobile, password}
  }) */

  // 将ajax作为对象使用
  return ajax.post('/user/passport/login', {phone, password})
}

/* 
16.注册用户
/api/user/passport/register POST
userInfo: 包含以下属性的对象
  mobile
  password
  code
*/
export const reqRegister = (userInfo) => ajax.post('/user/passport/register', userInfo)

/* 
退出登陆
/api/user/passport/logout GET
*/
export const reqLogout = () => ajax('/user/passport/logout')

/* 
获取订单列表
/api/order/auth/{page}/{limit} GET
*/
export const reqOrders = (page, limit) => ajax(`/order/auth/${page}/${limit}`)

/* 
10.获取订单交易页信息
/api/order/auth/trade GET
*/
export const reqTradeInfo = () => ajax('/order/auth/trade')

/* 
12.提交订单
/api/order/auth/submitOrder?tradeNo={tradeNo} POST

tradeNo: 交易号
orderInfo: 包含要提交的订单相关信息的对象
{
    "consignee": "admin",
    "consigneeTel": "15011111111",
    "deliveryAddress": "北京市昌平区2",
    "paymentWay": "ONLINE",
    "orderComment": "xxx",
    "orderDetailList":  []  // 商品列表
}
*/
export const reqSubmitOrder = (tradeNo, orderInfo) => ajax({
  url: '/order/auth/submitOrder',
  method: 'POST',
  // query: {tradeNo},  // 不可以, 在前台路由跳转时用
  params: {tradeNo}, // 指定query参数
  data: orderInfo
})

/* 
13.获取订单支付信息
/api/payment/weixin/createNative/{orderId} GET
*/
export const reqPayInfo = (orderId) => ajax(`/payment/weixin/createNative/${orderId}`)

/* 
14.查询支付订单状态
/api/payment/weixin/queryPayStatus/{orderId} GET
*/
export const reqPayStatus = (orderId) => ajax(`/payment/weixin/queryPayStatus/${orderId}`)