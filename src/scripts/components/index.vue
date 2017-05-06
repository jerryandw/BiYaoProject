<template>
  <div class="m-index">
    <header class="yo-header yo-header-a">
      <h2 class="title">必要</h2>
      <span class="regret yo-ico">&#xf067;</span>

    </header>
    <section>
      <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img class="lb" src="https://bfs.biyao.com/group1/M00/01/09/wKhkVFkK_zSAOTvOAACuN3YoTQ8025.jpg"/>
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="https://bfs.biyao.com/group1/M00/01/09/wKhkVVkK_5uAXItgAAFQin2QEyU976.jpg"/>
          </mt-swipe-item>
          <mt-swipe-item>
              <img class="lb" src="https://bfs.biyao.com/group1/M00/01/09/wKhkVFkK_2iAI9KmAAC9t8up3Fg293.jpg"/>
          </mt-swipe-item>
      </mt-swipe>
    </section>
    <nav>
      <ul>
        <li class="active yo-ico iconfont">&#xe61e;<b>首页</b></li>
        <li class="yo-ico iconfont">&#xe612;<b>分类</b></li>
        <li class="yo-ico iconfont">&#xe602;<b>购物车</b></li>
        <li class="yo-ico iconfont">&#xe61e;<b>我的</b></li>
      </ul>

    </nav>
  </div>
</template>
  <script>
  import Vue from "vue"
  import { Swipe, SwipeItem } from 'mint-ui';
  import 'mint-ui/lib/style.css'
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    import axios from 'axios'
    export default{
        mounted: function () {
          //do something after mounting vue instance

        }
    }
  </script>
