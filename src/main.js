import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, message,Menu,Icon } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Menu);
Vue.use(Icon)
Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')