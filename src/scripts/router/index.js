
import Vue from 'vue'
import Router from 'vue-router'

import index from '@/scripts/components/index'
import List from '@/scripts/components/List'
import Car from '@/scripts/components/Car'
import My from '@/scripts/components/My'
import Board from '@/scripts/components/Board'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,

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

    }
      ]
})
