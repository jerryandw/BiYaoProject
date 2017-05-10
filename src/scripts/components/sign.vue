<template>
  <div class="login-index">
      <p class="m-lg-box" @click="back"><img src="/static/shopimage/icon_more.png" /></p>
      <div class="logo">
          <img src="/static/shopimage/ic_launcher.png" />
      </div>
      <div class="phone">
        <input type="text" placeholder="请输入手机号" /></br>
      </div>
      <div class="yz">
        <input type="text" placeholder="请输入验证码" /></br>
      </div>
      <div  class="passworld">
        <input type="text" ref="password" placeholder="请输入密码"/></br>
      </div>
      <div class="btnn">
        <input type="button" value="登录" />
      </div>
      <div class="bottom">
        <p>
          <i>已有帐号！</i>
          <i>立即登录</i>
        </p>
      </div>
    </div>
</template>

<script>
  export default {
    data(){
        return {

        }
    },
    mounted: function () {
      //do something after mounting vue instance

    },
    methods: {
      back:function(){
        this.$router.go(-1)
      }
    }
}
</script>
