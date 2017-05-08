<template>
	<div class="m-board">
	
	<header class="yo-header yo-header-a">
      <h2 class="title">必要</h2>
      <span class="regret yo-ico">&#xf067;</span>
	</header>
	

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
	
	<div class="new">
		<img class="left" src="http://bfs.biyao.com/group1/M00/00/75/wKhkVVkC6_2AXP6gAAEJNJjr17Q252.jpg" />
		<div class="right">
			<img class="saynew-right-top" src="http://bfs.biyao.com/group1/M00/01/27/wKhkVFkMKO6AOcQcAAB78YLr0k0785.jpg"/>
			<img src="http://bfs.biyao.com/group1/M00/00/75/wKhkVVkC69GAGc6fAACS2D7m7vI709.jpg"/>
		</div>
	</div>
	
	<div class="imgnew">
		<p>精选</p>
		<div class="imgnew-list">
			<img  src="http://bfs.biyao.com/group1/M00/01/08/wKhkVVkK-G-AYPB8AACNH9IPRaI313.jpg"/>
			<img src="http://bfs.biyao.com/group1/M00/01/08/wKhkVFkK-LqAa-6CAACJGicq1Io670.jpg" />
	
		</div>
	</div>
	
	<ul class="main">
	
	<li>
		<h2 >光学眼镜<span class="yo-ico">&#xf07f;</span></h2>
		<div class="imgbig">
			<img src="https://bfs.biyao.com/group1/M00/00/0E/wKhkVFjq8P6AVIOyAACWXaInagc630.jpg" />
			<div class="box">
				<div class="text">
					<span>依视路集团旗下</span>
					<span>企业制造</span>
				</div>
			</div>
		</div>
		
		<div class="text">
		<ul>
		<li>
			<img src="https://img.biyao.com/files/temp/d3/d3c25e12d968b3a7.jpg"/>
			<p>负担-大股东</p>
			<p><i>￥</i><b>223</b></p>
		</li>
		<li>
			<img src="https://img.biyao.com/files/temp/d3/d3c25e12d968b3a7.jpg"/>
			<p>负担-大股东</p>
			<p><i>￥</i><b>223</b></p>
		</li>
		<li>
			<img src="https://img.biyao.com/files/temp/d3/d3c25e12d968b3a7.jpg"/>
			<p>负担-大股东</p>
			<p><i>￥</i><b>223</b></p>
		</li>
		<li>
			<img src="https://img.biyao.com/files/temp/d3/d3c25e12d968b3a7.jpg"/>
			<p>负担-大股东</p>
			<p><i>￥</i><b>223</b></p>
		</li>
		</ul>
		</div>
	</li>
	
	</ul>
	

</div>
</template>


<script>
import Vue from "vue"
import utilAxios from '../utils/axios'
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
  
export default{
	data(){
	    return {
	      bannerimglist:[],
	      saynew:""
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
      }
    })
  }
	
	
    
      
}
</script>
