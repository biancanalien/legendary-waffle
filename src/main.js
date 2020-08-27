import Vue from 'vue'
import Router from 'vue-router'
import Toast from 'vue-easy-toast'
import App from './App.vue'

import BankStatement from './components/BankStatement.vue'
import Deposit from './components/Deposit.vue'
import Withdraw from './components/Withdraw.vue'

Vue.config.productionTip = false

Vue.use(Toast)
Vue.use(Router)

const routes = [
  { path: '/bank-statement', component: BankStatement },
  { path: '/deposit', component: Deposit },
  { path: '/withdraw', component: Withdraw },
]

const router = new Router({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
