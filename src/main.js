import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, message,Menu,Icon} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import echarts from 'echarts';
import liquidfill from 'echarts-liquidfill'

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(liquidfill);
Vue.prototype.$message = message;
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
