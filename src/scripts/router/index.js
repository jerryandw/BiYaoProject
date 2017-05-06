// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/Hello'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/scripts/components/Index'
import Board from '@/scripts/components/Board'
import Search from '@/scripts/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        // {
        //   path: 'board',
        //   component: Board
        // },
        {
          path: 'search',
          component: Search
        }
      ]
    }
  ]
})
