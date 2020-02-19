import Vue from 'vue'
import VueRouter from 'vue-router'

import BookList from '../views/BookList.vue'
import BookInfo from '../views/BookInfo.vue'


Vue.use(VueRouter)



const routes = [
 
 
  {
    path: '/booklist',
  
    name: BookList,
    component: () => import(/* webpackChunkName: "about" */ '../views/BookList.vue') 
  },

    {
      path: '/books/:id',
  
      name: BookInfo,
      component: () => import(/* webpackChunkName: "about" */ '../views/BookInfo.vue') 

    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
