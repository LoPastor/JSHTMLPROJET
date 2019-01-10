import Vue from 'vue'
import App from './App.vue'
import Liste from './composants/liste.vue'
import Detail from './composants/details.vue'

Vue.component("app-liste", Liste);
Vue.component("app-details",Detail);


new Vue({
  el: '#app',
  render: h => h(App)
})
