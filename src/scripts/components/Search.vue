<template lang="html">
	
	<div class="m-search">
		
		<div class="yo-header yo-header-search">
			<h2 class="title">搜索</h2>
			<span class="regret yo-ico"></span>
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
import { Indicator } from 'mint-ui';
import utilAxios from '../utils/axios'

 
Vue.component(Search.name, Search);

	export default {
		data(){
		return{
			keywords:""
		}
		},
		methods:{
			toList:function(){
				
				Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				});
				 //router.push('/list')
				
				
				setTimeout(function(){
					Indicator.close()
				},2000)
			}
		}
	}
	
</script>

<style lang="css">	
</style>