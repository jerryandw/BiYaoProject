<template>
  <div class="my-order">
    <header>
      <p>
        <router-link tag="i" to="/my"><img src="/static/shopimage/icon_more.png" /></router-link>
        <span class="title">我的订单</span>
      </p>
      <div class="title">
        <ul>
          <li><router-link tag="i" to="/all" active-class="active" class="yo-ico iconfont">全部</router-link></li>
          <li><router-link tag="i" to="/pay" active-class="active" class="yo-ico iconfont">待付款</router-link></li>
          <li><router-link tag="i" to="/goods" active-class="active" class="yo-ico iconfont">代收货</router-link></li>
          <li><router-link tag="i" to="/speak" active-class="active" class="yo-ico iconfont">待评价</router-link></li>
          <li><router-link tag="i" to="/salereturn" active-class="active" class="yo-ico iconfont">退货售后</router-link></li>
        </ul>
      </div>
		</header>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue"
import Router from "vue-router"
export default {
  data:function(){
    return({})
  },
  methods: {
    back:function(){
      this.$router.go(-1)
    }
  }
}
</script>
