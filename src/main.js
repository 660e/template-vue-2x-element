import Vue from 'vue';
import App from './App.vue';

import i18n from './i18n';
import router from './router';
import store from './store';

// mock
import './mock';

// element-ui
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', i18n: (key, value) => i18n.t(key, value) });

// echarts
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import VueEcharts from 'vue-echarts';
echarts.use([PieChart, LegendComponent, TooltipComponent, CanvasRenderer]);
Vue.component('v-chart', VueEcharts);

// ccc
import CccTable from '@/components/ccc-table.vue';
Vue.component('ccc-table', CccTable);

// filters
import * as filters from './filters';
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

// global
import './styles/index.less';
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
