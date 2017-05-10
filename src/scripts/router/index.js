
import Vue from 'vue'
import Router from 'vue-router'

import index from '@/scripts/components/index'
import List from '@/scripts/components/List'
import Car from '@/scripts/components/Car'
import My from '@/scripts/components/My'
import Board from '@/scripts/components/Board'
import login from '@/scripts/components/login'
import sign from '@/scripts/components/sign'


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      // redirect:'/Board',
      children: [
      	 {
          path: '',
          component: Board
        },
        {
          path: 'board',
          component: Board
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

    },
    {
      path:'/login',
      component:login

    },
    {
      path:'/sign',
      component:sign

    }
      ]
})
