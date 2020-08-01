require('./bootstrap');

import Vue from 'vue';
import router from './router';
import App from './src/App.vue';
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css';



import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})

new Vue({
    router,
    render: h => h (App)
}).$mount('#app');

