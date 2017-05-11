import axios from 'axios'

export default {
  get: (param)=>{
    axios({
      url: param.url,
      method: param.method
    })
    .then(function (res) {
      param.callback(res)
    })
  },
  post: function(opt){
    axios.post(opt.url, {
      params: opt.data,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    })
    .then(function(res){
      console.log(res)
      opt.callback(res)
    })
    .catch(function(error){
      console.log(error);
    });
  }
}
