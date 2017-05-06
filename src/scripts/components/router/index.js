import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/script/components/Index'
import Main from '@/script/components/Main'
import List from '@/script/components/List'
import Car from '@/script/components/Car'
import My from '@/script/components/My'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'main',
          component: Main
        },
        {
          path: 'list',
          component: List
        },
        {
          path: 'my',
          component: My
        },
        {
          path: 'car',
          component: Car
        }
      ]
    }
  ]
})


