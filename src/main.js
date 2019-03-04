import Vue from 'vue';
import App from './App.vue';
// import SuiVue from 'semantic-ui-vue'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// Vue.use(SuiVue);
