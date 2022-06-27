import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import '@/assets/icon/iconfont.js';
import  '@/config/vue-axios'

// 加载进度条插件
import 'muse-ui-progress/dist/muse-ui-progress.css';
import NProgress from 'muse-ui-progress';
Vue.use(NProgress);


Vue.config.productionTip = false
Vue.use(MuseUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
