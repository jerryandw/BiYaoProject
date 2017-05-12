<template>

<div class="m-board">
	
	<header class="yo-header yo-header-a">
      <h2 class="title">必要</h2>
      <router-link tag="span" to="search" class="regret yo-ico" >
      &#xf067;</router-link>
	</header>

	
	<div class="board-section">
	<div class="board-section-box">
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
		<img class="left" v-lazy="newimgs.length > 0 ? newimgs[0].webpImageUrl : ''" />
		<div class="right">
			<img class="saynew-right-top" v-lazy="newimgs.length > 0 ? newimgs[1].webpImageUrl: ''"/>
			<img v-lazy="newimgs.length > 0 ? newimgs[2].webpImageUrl: ''"/>
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
	<li v-for="(item,index) in maindata" @click="tolist(index)">
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
		<ul v-bind:style="{width:(item.moduleItemsU*1.25)+'rem'}">
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


</div>
</template>


<script>
import Vue from "vue"
import Router from "vue-router"
import utilAxios from '../utils/axios'
import { Swipe, SwipeItem ,Lazyload,Loadmore, Indicator} from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from '../router'

Vue.use(Router)
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
	toseach:function(){
		this.$router.go('/seach')
	},
	tolist:function(listid){
		listid=listid+122
		router.push("list?id="+listid)
		
	},
	loadBottom: function(){
		let that=this
		utilAxios.get({
			url:"/api/getHomeModuleInfo?pageIndex=2&pageSize=10",
			method:"get",
			callback:function(res){
			for(let i=0; i<res.data.data.modules.length; i++){
        	 if(res.data.data.modules[i].moduleType==3){
        	that.maindata.push(res.data.data.modules[i].moduleInfo)		
      let ullength=res.data.data.modules[i].moduleInfo.moduleItems.length
        	let	n=that.maindata.length-1
        	that.maindata[n].moduleItemsU=ullength
        	
        	}
        	}
			
			}
		})
		this.allLoaded = true
  		this.$refs.loadmore.onBottomLoaded()
	}
	
  },
	mounted: function () {
    var that = this
    Indicator.open({
		  text: 'Loading...',
		  spinnerType: 'fading-circle'
		});
    utilAxios.get({
      url:"/api/getHomeModuleInfo?pageIndex=1&pageSize=10",
      method: 'get',
      callback: function (res) {
       that.bannerimglist=res.data.data.banners
       that.saynew=res.data.data.article.ext.title
       that.newimgs= res.data.data.modules[0].moduleInfo.moduleItems
       
        for(let i=0; i<res.data.data.modules.length; i++){
        	if(res.data.data.modules[i].moduleType==3){
        		that.maindata.push(res.data.data.modules[i].moduleInfo)
        	let ullength=res.data.data.modules[i].moduleInfo.moduleItems.length
        	let	n=that.maindata.length-1
        	that.maindata[n].moduleItemsU=ullength
        	//setTimeout(function(){
        		Indicator.close()
        	//},2000)
        	
        	
        	}
        }
      
        
      }
    })
 }

}
</script>
