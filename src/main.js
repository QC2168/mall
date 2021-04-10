import '../vue.config'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import './content/utils'
import store from './store'
import VueLazyload from 'vue-lazyload'
Vue.use(VueAwesomeSwiper);
Vue.use(Vant);
Vue.use(VueLazyload, {
  preLoad: 1.3,
   error: require('./assets/img/vueLazyLoading/error.png'),
   loading: require('./assets/img/vueLazyLoading/loading.png'),
  attempt: 1
})
Vue.config.productionTip = false;
Vue.prototype.$bus=new Vue();
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');

