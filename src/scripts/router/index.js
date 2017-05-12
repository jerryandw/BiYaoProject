
import Vue from 'vue'
import Router from 'vue-router'

import index from '@/scripts/components/index'
import List from '@/scripts/components/List'
import Car from '@/scripts/components/Car'
import My from '@/scripts/components/My'
import Board from '@/scripts/components/Board'
import login from '@/scripts/components/login'
import sign from '@/scripts/components/sign'
import Search from '@/scripts/components/Search'
import Detail from '@/scripts/components/Detail'
<<<<<<< HEAD
=======

import order from '@/scripts/components/order'

import all from '@/scripts/components/my-order/all'
import goods from '@/scripts/components/my-order/goods'
import pay from '@/scripts/components/my-order/pay'
import speak from '@/scripts/components/my-order/speak'
import salereturn from '@/scripts/components/my-order/salereturn'
>>>>>>> ahui


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
			
    },{
    	path: '/search',
    	component:Search
    },{
    	path: '/detail',
    	component:Detail

    },{
    	path: '/search',
    	component:Search
    },{
    	path: '/detail',
    	component:Detail

    },
    {
      path:'/order',
      component:order,
      redirect:'/all',
      children:[
       {
         path:'/all',
         component:all
       },
       {
         path:'/pay',
         component:pay
       },{
         path:'/goods',
         component:goods
       },{
         path:'/speak',
         component:speak
       },{
         path:'/salereturn',
         component:salereturn
       }
      ]
    }
      ]
})
