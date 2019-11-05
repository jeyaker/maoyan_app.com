import Vue from 'vue';
import App from './App.vue';
import './utils/rem';
import request from './utils/request';
import './assets/css/reset.styl';
import router from './router';
import store from './store';
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.prototype.$http = request;

import {
  homeFilter
} from './filters'

for (let key in homeFilter) {
  Vue.filter(key, homeFilter[key]);
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')