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
import nProgressConfig from './museui/nProgressConfig.js';
import NProgress from 'muse-ui-progress';
// elementui
import 'element-ui/lib/theme-chalk/index.css';
import elementui from './elementui/index.js';
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';


Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(NProgress,nProgressConfig);
Vue.use(elementui);
Vue.config.productionTip = false
Vue.use(MuseUI);

new Vue({
  router,
  store,
  beforeCreate(){
    NProgress.start();
    console.log("beforeCreate");
  },
  created(){
    console.log("created");
  },
  beforeMount(){
    console.log("beforeMount");
  },
  mounted(){
    console.log("mounted");
    NProgress.done();
  },
  beforeUpdate(){
    console.log("beforeUpdate");
  },
  updated(){
    console.log("updated");
  },
  beforeDestroy(){
    console.log("beforeDestroy");
  },
  deactivated(){
    console.log("deactivated");
  },
  render: h => h(App)
}).$mount('#app')
