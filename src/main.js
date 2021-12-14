import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faChevronRight, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { FormDatepickerPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faChevronUp, faChevronRight, faFacebookF, faTwitter, faYoutube, faInstagram, faMapMarkerAlt, faPhone)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(FormDatepickerPlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
