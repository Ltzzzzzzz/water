import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/vant.config'; // vant组件配置
import 'css/reset.scss'; // 移动端重置样式
import '@/global.components.config'; // 全局自定义组件配置
import echarts from './echarts.config'; // echarts配置

import axios from 'axios';

Vue.prototype.$axios = axios;

// 挂载echarts
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
