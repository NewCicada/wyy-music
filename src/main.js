import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './axios/index'

import './element-ui'
Vue.config.productionTip = false

import './assets/css/reset.css'

Vue.prototype.$api = api
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
