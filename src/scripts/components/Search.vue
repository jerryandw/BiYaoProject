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
				<li v-for="(item,index) in defaults" :key="index" @click="tolist(item)">{{item.categoryName}}</li>
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
import utileAxios from "../utils/axios"
 
 
Vue.component(Search.name, Search);

	export default {
		data(){
		return{
			keywords:"",
			defaults:[]
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
			        	let keyarr=that.keywords.split("")
			        	let dearr=[]
			        	let idarr=[]
			        	let flage=null
				        for(let i=0; i<that.defaults.length; i++){
				        	var a=that.defaults[i].categoryName.split("")
				        	
				        	for(let n=0; n<a.length; n++){
				        		idarr.push(that.defaults[i].categoryId)
				        		dearr.push(a[n])
				        	}
				        	
				        }
			        
				        for(let i=0; i<dearr.length; i++){
				        	for(let n=0; n<keyarr.length; n++){
				        		if(dearr[i]==keyarr[n]){
					        		flage=i
					        		break
				        		}
				        	}
				        }
			        
			       		if(flage!=null){
			       			router.push("list?id="+idarr[flage])
			       		}else{
			       			alert("抱歉！没有相关信息，去看看其他商品吧！")
			       			router.push("list")
			       		}
			        	Indicator.close()
			        
			          
			        }
			      })
			    
			},
			back:function(){
				router.go(-1)
			},
			tolist:function(produxt){
				Indicator.open('加载中...')
				let id=produxt.categoryId
				setTimeout(function(){
					Indicator.close()
				},500)
				
				router.push('/list?id='+id)
				
			}
		},
		mounted:function(){
			let that=this
			utileAxios.get({
				url:"/mock/classify",
				method:"get",
				callback:function(res){
					that.defaults=res.data.categoryList
				}
			})
		}
	}
	
</script>

<style lang="css">	
</style>