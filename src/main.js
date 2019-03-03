import Vue from 'vue'
import Wedding from './Wedding.vue'
import VueTouch from 'vue-touch'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueAMap from 'vue-amap';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Wedding)
})
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueAxios, axios);
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  key: '67a4dbfd078c453611410cad38f5a4cd',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  v: '1.4.4'
});
