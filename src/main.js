import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FooterBar from '@/components/FooterBar'
import SearchBar from '@/components/SearchBar'
import TabBar from '@/components/TabBar'
import Crad from '@/components/Crad'
import FilmList from '@/components/FilmList'
import ElButton from '@/components/ElButton'
import ShowList from '@/components/ShowList'
import WaterfallList from '@/components/WaterfallList'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import api from '@/api'

import 'swiper/css/swiper.css'
import '@/assets/css/reset.css'
import '@/assets/font/iconfont.css'

Vue.config.productionTip = false
Vue.component('FooterBar', FooterBar)
Vue.component('SearchBar', SearchBar)
Vue.component('TabBar', TabBar)
Vue.component('Crad', Crad)
Vue.component('FilmList', FilmList)
Vue.component('ElButton', ElButton)
Vue.component('ShowList', ShowList)
Vue.component('WaterfallList', WaterfallList)

Vue.use(VueAwesomeSwiper)

Vue.prototype.$api = api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
