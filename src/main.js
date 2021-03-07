import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios'
import setaxios from './setaxios'

setaxios();
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
    store.commit('settoken', localStorage.getItem('token'))
    if (to.meta.requireAuth) {
        if (store.state.token) {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

// Debounce
const on = Vue.prototype.$on
Vue.prototype.$on = function(event, func) {
    let timer;
    let newFunc = func;
    if (event === 'click') {
        newFunc = function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                func.apply(this, arguments);
            }, 500)
        }
    }
    on.call(this, event, newFunc);
}

// Throttle
Vue.prototype.$on = function(event, func) {
    let previous = 0;
    let newFunc = func;
    if (event === 'click') {
        newFunc = function() {
            const now = new Date().getTime();
            if (previous + 1000 <= now) {
                func.apply(this, arguments);
                previous = now;
            }
        }
    }
    on.call(this, event, newFunc);
}