import Vue from 'vue'
import Wedding from './Wedding.vue'
import VueTouch from 'vue-touch'
import VueAxios from 'vue-axios'
import axios from 'axios'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Wedding)
})
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueAxios, axios);

