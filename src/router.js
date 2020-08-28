import Router from 'vue-router'

import Login from './components/Login.vue'
import BankStatement from './components/BankStatement.vue'
import Deposit from './components/Deposit.vue'
import Withdraw from './components/Withdraw.vue'

const routes = [
    { path: '/Login', component: Login },
    { path: '/bank-statement', component: BankStatement },
    { path: '/deposit', component: Deposit },
    { path: '/withdraw', component: Withdraw },
]

const router = new Router({
    routes
})

export default router