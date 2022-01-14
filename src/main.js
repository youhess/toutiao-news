import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vant插件 导入所有组件

import Vant from 'vant'
import 'vant/lib/index.css'

// 引入'amfe-flexible'
import 'amfe-flexible'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
