import { createApp } from 'vue'
import Vuex from 'vuex';
import App from './App.vue'

// Vue.use(Vuex)

const store = new Vuex.Store({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app')
