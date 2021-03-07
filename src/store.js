import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        token: '',
        cartarry: JSON.parse(localStorage.getItem('cartarray')) || [],
    },
    mutations: {
        settoken(state, token) {
            state.token = token;
        },
        tocart(state, tag) {
            let goods = state.cartarry.find(v => v.title == tag.label);
            if (goods) {
                goods.cartCount += 1;
            } else {
                state.cartarry.push({
                    title: tag.label,
                    cartCount: 1
                })
            }
        },
        cartadd(state, index) {
            state.cartarry[index].cartCount++
        },
        cartremove(state, index) {
            if (state.cartarry[index].cartCount > 1) {
                state.cartarry[index].cartCount--;
            } else {
                if (window.confirm('Sure to remove it from the cart?')) {
                    state.cartarry.splice(index, 1);
                }
            }
        },
        clearcart(state) {
            state.cartarry = []
        }
    },
    actions: {

    },

    getters: {
        countsum: state => {
            let num = 0
            state.cartarry.forEach(v => {
                num += v.cartCount
            })
            return num
        }
    }
})

export default store