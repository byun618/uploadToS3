import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'
import 'regenerator-runtime/runtime'

Vue.use(BootstrapVue)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
