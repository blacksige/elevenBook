import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, message,Menu,Icon,Modal,Form,FormModel,Tooltip,Input} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import echarts from 'echarts';
import liquidfill from 'echarts-liquidfill'

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Icon);
Vue.use(liquidfill);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Tooltip);
Vue.use(Input);
Vue.prototype.$message = message;
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
