<template>

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
