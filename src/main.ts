import '@/assets/sass/styles.scss'

import Vue from 'vue'
import App from '@/app.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
