<template>
<div class="m-board">
	
	<header class="yo-header yo-header-a">
      <h2 class="title">必要</h2>
      <span class="regret yo-ico">&#xf067;</span>
	</header>
	
	<div class="board-section">
	<mt-swipe :auto="4000">
	    <mt-swipe-item v-for="item in bannerimglist" :key="item">
	      <img class="lb" :src="item.webpImageUrl"/>
	      
	    </mt-swipe-item>
	</mt-swipe>
	
	<div class="saynew">
		<img src="../../../static/imges/new/images/news_02.png" />
		<span class="saynew-center" v-text="saynew"><span>|</span>{{saynew}}</span>
		<span class="yo-ico saynew-right">&#xf07f;</span>
	</div>
	
	<div class="new" >
		<img class="left"  v-lazy="newimgs[0].webpImageUrl" />
		<div class="right">
			<img class="saynew-right-top" v-lazy="newimgs[1].webpImageUrl"/>
			<img v-lazy="newimgs[2].webpImageUrl"/>
		</div>
	</div>
	
	<div class="imgnew">
		<p>精选</p>
		<div class="imgnew-list">
			<img  src="http://bfs.biyao.com/group1/M00/01/08/wKhkVVkK-G-AYPB8AACNH9IPRaI313.jpg"/>
			<img src="http://bfs.biyao.com/group1/M00/01/08/wKhkVFkK-LqAa-6CAACJGicq1Io670.jpg" />
	
		</div>
	</div>
	
	
	<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

<ul class="main">
	<li v-for="item in maindata">
		<h2 >{{item.moduleTitle}}<span class="yo-ico">&#xf07f;</span></h2>
		<div class="imgbig">
			<img :src="item.moduleImage" />
			<div class="box">
				<div class="text">
					<span>{{item.manufacturers}}</span>
					<span>{{item.moduleBrand}}</span>
				</div>
			</div>
		</div>
		
		<div class="text">
		<ul>
		<li v-for="item in item.moduleItems">
			<img :src="item.image"/>
			<p>{{item.ext.itemName}}</p>
			<p><i>￥</i><b>{{item.ext.itemPrice}}</b></p>
		</li>
		
		</ul>
		</div>
	</li>
	
	</ul>
		 
</mt-loadmore>
	</div>

</div>
</template>


<script>
import Vue from "vue"
import utilAxios from '../utils/axios'
import { Swipe, SwipeItem ,Lazyload,Loadmore} from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Lazyload);
Vue.component(Swipe.name, Swipe);
Vue.component(Loadmore.name, Loadmore);
Vue.component(SwipeItem.name, SwipeItem); 
 
export default{
	data(){
	    return {
	      bannerimglist:[],
	      saynew:"",
	      newimgs:[],
	      maindata:[],
	      allLoaded:false
	    }
  },
  methods:{
	
	loadBottom: function(){
		console.log(1)
		this.allLoaded = true
  		this.$refs.loadmore.onBottomLoaded()
	}
	
  },
  
	mounted: function () {
    var that = this
    utilAxios.get({
      url: '/mock/home',
      method: 'get',
      callback: function (res) {
      	that.bannerimglist=res.data.banners
      	that.saynew=res.data.article.ext.title
        that.newimgs= res.data.modules[0].moduleInfo.moduleItems
       
        for(let i=0; i<res.data.modules.length; i++){
        	if(res.data.modules[i].moduleType==3){
        		that.maindata.push(res.data.modules[i].moduleInfo)
        	}
        }
      }
    })
  }
	
	
    
      
}
</script>
