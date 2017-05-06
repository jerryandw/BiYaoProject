import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index'
import Main from '@/scripts/components/Main'
import List from '@/scripts/components/List'
import Car from '@/scripts/components/Car'
import My from '@/scripts/components/My'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      
      children: [
      	 {
          path: '',
          component: Main
        },
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


