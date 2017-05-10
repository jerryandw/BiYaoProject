<template lang="html">
	
	<div class="m-list">
		<div class="list-head">
			<ul>
				<li  v-for="(item,index) in categoryList" @click="getSub(index)" >
					{{item.categoryName}}
				</li>
			</ul>
		</div>
		<div class="list-content">
			<div class="good-classify">
				<ul>
				<li v-for="(item,index) in subCategoryList" >
					{{item.categoryName}}
				</li>
				</ul>
			</div>
		</div>
		<div class="good-list">
			<div class="good-title">
				<!-- <span>{{productList[0].categoryName}}</span> -->
			</div>
			<ul>
				<!-- <li v-for="(item,index) in subcategoryList" @click="getId(index)">
					<div class="good-pic">
						<img src="https://img.biyao.com/files/temp/79/79caf615d25e9e99.jpg" alt="">
					</div>
					<span class="good-name">{{product.title}}</span>
					<span class="good-pri"><em>￥</em>{{product.price}}</span>
				</li> -->
			</ul>
		</div>
	</div>
	
</template>

<script>

	import Vue from "vue"
	import utilAxios from '../utils/axios'
	import { Swipe, SwipeItem } from 'mint-ui'
	import 'mint-ui/lib/style.css'

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	export default {

		data(){

			return{	
				categoryList:[],
				productList:[],
				subCategoryList:[],
				num:0,
				
				
			}
		},

		methods:{

			getSub(index){
				
				this.subCategoryList = this.categoryList[index].subCategoryList
			},

		},

		mounted: function () {
		    var that = this
		    utilAxios.get({
		      url: '/mock/classify',
		      method: 'get',
		      callback: function (res) {
		      
		      	that.categoryList = res.data.categoryList;	
		      	that.subCategoryList = res.data.categoryList[that.num].subCategoryList
     
		      }
		    })

		    utilAxios.get({
		      url: '/mock/product',
		      method: 'get',
		      callback: function (res) {
		      
		      	that.productList = res.data.data.productList;	      
		      	//console.log(that.productList)
		      }
		    })
		 }

	}
	
</script>

