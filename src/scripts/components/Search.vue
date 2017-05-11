<template lang="html">
	
	<div class="m-search">
		
		<div class="yo-header yo-header-search">
			<h2 class="title">搜索</h2>
			<span class="regret yo-ico" @click="back"></span>
			<span class="affirm"></span>
		</div>
		<div class="yo-search yo-search-search">
			<div class="action">
				<span class="yo-ico"></span>
				<input type="text" class="input" placeholder="请输入要搜索的商品" @keyup.13="toList" v-model="keywords">
			</div>
			<span class="yo-btn">搜索</span>
		</div>
		<div class="seach-bottom">
			<p>热门搜索</p>
			<ul>
				<li>运动鞋</li>
				<li>运动</li>
				<li>动鞋</li>
				<li>运鞋</li>
				<li>运动鞋</li>
				<li>运动鞋</li>
			</ul>
		</div>
		
	</div>
	
</template>

<script>
import Vue from "vue"
import { Search } from 'mint-ui'
import { Indicator } from 'mint-ui'
import utilAxios from '../utils/axios'
import router from '../router'
 
Vue.component(Search.name, Search);

	export default {
		data(){
		return{
			keywords:""
		}
		},
		methods:{
			toList:function(){
				let that=this
				Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				});
				utilAxios.get({
			        url: '/api//classify/getCategoryProduct?categoryID=' + that.keywords,
			        method: 'get',
			        callback: function (res) {
			          console.log(res);
			          router.push("list?id="+that.keywords)
			          Indicator.close()
			        }
			      })
			    
			},
			back:function(){
				router.go(-1)
			}
		}
	}
	
</script>

<style lang="css">	
</style>