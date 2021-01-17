import Vue from 'vue'
import App from './App'
import './static/iconfont.css'
import * as customFilter from './static/filter.js'
let urlConfig = {
	oa: '/oa',
	user: '/user'
}
Vue.prototype.$urlConfig = urlConfig
Vue.config.productionTip = false
import request from 'common/request.js'
Vue.prototype.$request = request
import {myDecrypt} from './common/encryption'
console.log(myDecrypt)
Vue.prototype.$myDecrypt = myDecrypt
App.mpType = 'app'
// 导出的是对象，可以直接通过key和value来获得过滤器的名和过滤器的方法
Object.keys(customFilter).forEach(key => {
    Vue.filter(key, customFilter[key])
})
const app = new Vue({
    ...App
})
app.$mount()
