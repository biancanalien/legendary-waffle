import Vue from 'vue'
import Router from 'vue-router'
import Toast from 'vue-easy-toast'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Toast)
Vue.use(Router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
