<template>
  <div class="login-index">
      <p class="m-lg-box" @click="back"><img src="/static/shopimage/icon_more.png" /></p>
      <div class="logo">
          <img src="/static/shopimage/ic_launcher.png" />
      </div>
      <div class="phone">
        <input type="text" placeholder="请输入手机号" v-model="username" /></br>
      </div>
      <div class="yz">
        <input type="text" placeholder="请输入验证码" v-model="usercode" /><span @click="getcode">输入验证码</span></br>
      </div>
      <div  class="passworld">
        <input type="text" ref="password" placeholder="请输入密码" v-model="password"/></br>
      </div>
      <div class="btnn" @click="sign">
        <input type="button" value="注册" />
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
    import Vue from 'vue';
    import axios from 'axios';
    import Axios from '../utils/axios.js';
    import Qs from 'qs';
export default {
  data(){
    return({
      username:'',
      password:'',
      code:'',
      usercode:''
    })
  },

  mounted: function () {
    //do something after mounting vue instance
  },
  methods: {
      back:function(){
        this.$router.go(-1);
      },
      sign:function(){
        let that = this;
        if(this.usercode==this.code){
          axios.post(
            '/node/users/registor',
            Qs.stringify({username:this.username,password:this.password}),
            {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
          ).then((res)=>{
            if(res.data=='1'){
              that.$router.push('/login')
              console.log("chenggom=ng");
            }
            else{
              console.log("失败");
            }
          })
        }else{
          console.log("验证码错误");
        }

      },
      getcode:function(){
        let that = this;
      //  console.log(that.username);
      axios.post('/log/sms.php',Qs.stringify({mobile:that.username})
    ).then(function(res){
      that.code=res.data.slice(35,39);
    })
      }
  }

}
</script>
