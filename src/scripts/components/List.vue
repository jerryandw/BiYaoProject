<template lang="html">
	
	<div class="m-list">
		<div class="list-head">
			<ul>
				<li  v-for="(item,index) in categoryList" :class="{ active: index2==index}" @click="getSub(index)" >
					{{item.categoryName}}
				</li>
			</ul>
		</div>
		<div class="list-content">
			<div class="good-classify">
				<ul>
				<li v-for="(item,index) in subCategoryList" :class="{ active: index3==index }" @click="setIndex(item,index)">
					{{item.categoryName}}
				</li>
				</ul>
			</div>
		</div>
		<div class="good-list">
			<div class="good-title">
				<span>{{categoryName}}</span>
			</div>
			<ul>
				<li v-for="(product,index) in productList" >
					<div class="good-pic">
						<!-- <img src="https://img.biyao.com/files/temp/79/79caf615d25e9e99.jpg" alt=""> -->
						<img :src=product.imageUrl >

					</div>
					<span class="good-name">{{product.title}}</span>
					<span class="good-pri"><em>￥</em>{{product.price}}</span>
				</li>
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
				subCategoryList:[],
				categoryId:122,
				productList:[],
				categoryName:null,
				num:0,
				index2:0,
				index3:0
				
			}
		},

		methods:{

			getSub(index){

				this.index2 = index;
				this.index3 = 0;
				this.subCategoryList = this.categoryList[index].subCategoryList;
				this.categoryId = this.categoryList[index].categoryId;
			},

			setIndex(item,index) {
		        this.index3 = index;
		        //console.log(this.index2)
		    },

		},

		mounted: function () {
		    var that = this
		    utilAxios.get({
		      url: '/mock/classify',
		      method: 'get',
		      callback: function (res) {
		      
		      	that.categoryList = res.data.categoryList;	
		      	that.subCategoryList = res.data.categoryList[that.num].subCategoryList;
		      	that.categoryId = res.data.categoryList[that.num].categoryId;
		      	//console.log("categoryList="+that.categoryList)
     			//console.log("subCategoryList="+that.subCategoryList)
		      }
		    })

		 
		    utilAxios.get({
		      url: '/api/classify/getCategoryProduct?categoryID=122',
		      method: 'get',
		      callback: function (res) {
		      
		      	that.categoryName = res.data.data.productList[0].categoryName;
		      	that.productList = res.data.data.productList[0].item;	      
		      
		      }
		    })
		 }

	}
	
</script>
