import Vue from 'vue'
import App from './App.vue'
 
import router from './router'
import json from './assets/books.json'


Vue.config.productionTip = false

new Vue({
  router,
  
  // Add data to root component
  data: () => ({
    books: json.books
  }),

  render: h => h(App)
}).$mount('#app')
