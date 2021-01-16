import Vue from 'vue'
import App from './App'
import './static/iconfont.css'
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

const app = new Vue({
    ...App
})
app.$mount()
