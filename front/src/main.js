import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


// import FineUploaderTraditional from 'fine-uploader-wrappers'
// import Gallery from 'vue-fineuploader/gallery'
// Vue.use(FineUploaderTraditional)
// Vue.use(Gallery)


Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
