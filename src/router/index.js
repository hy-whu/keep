import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/Main'
import Detail from '@/pages/detail/Detail'
import Search from '@/pages/search/Search'
import Slogan from '@/pages/slogan/Slogan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/slogan',
      name: 'Slogan',
      component: Slogan
    }
  ]
})
