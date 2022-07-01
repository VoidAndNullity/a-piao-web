import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/config/vue-axios';
// 阿里iconfont
import '@/assets/icon/iconfont.js';
// 加载进度条插件
import 'muse-ui-progress/dist/muse-ui-progress.css';
import NProgress from 'muse-ui-progress';
// elementui
import 'element-ui/lib/theme-chalk/index.css';
import elementui from './elementui/index.js';
// museui
import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';
import museui from './museui/index.js';

Vue.use(NProgress);
Vue.use(elementui);
Vue.use(museui);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    NProgress.start();
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    NProgress.done();
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  deactivated() {
    console.log("deactivated");
  },
  render: h => h(App)
}).$mount('#app')
