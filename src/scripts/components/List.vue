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
				products:[],
				num:0,
				index2:0,
				index3:0
				
			}
		},

		methods:{

		    //点击分类
			getSub(index){

				this.index2 = index;
				this.index3 = 0;
				this.subCategoryList = this.categoryList[index].subCategoryList;
				this.categoryId = this.categoryList[index].categoryId;
				
				this.categoryId = this.subCategoryList[0].categoryId;
				
				var that = this;
				utilAxios.get({
			      url: '/api/classify/getCategoryProduct?categoryID='+this.categoryId,
			      method: 'get',
			      callback: function (res) {
			      
			      	this.categoryName = res.data.data.productList[0].categoryName;
			      	this.products = res.data.data.productList[0].item;
			      	
			     
			      	
			      	//清除数组原来的数据
			      	for (var i = 0; i < this.products.length; i++) {
			      		that.productList.splice(i, 1);//可行
			      	}

			      	for (var i = 0; i < this.products.length; i++) {
			      		//Vue.set(that.productList, i, this.productList[i]);//可行
			      		that.productList.splice(i, 1, this.products[i]);//可行
			      		//that.productList.push(this.products[i]);//没有刷新
			      	}

			      	
			      }
			    })
			},

			//点击子分类
			setIndex(item,index) {
		        this.index3 = index;
		        //console.log(this.index2)
		        this.categoryId = this.subCategoryList[index].categoryId;
		        console.log("categoryId2="+this.categoryId)

		        var that = this;
		        utilAxios.get({
			      url: '/api/classify/getCategoryProduct?categoryID='+this.categoryId,
			      method: 'get',
			      callback: function (res) {
			      
			      	this.categoryName = res.data.data.productList[0].categoryName;
			      	this.products = res.data.data.productList[0].item;	
			      	//this.productList.push(this.productList); 
			      	
			      	//清除数组原来的数据
			      	for (var i = 0; i < this.products.length; i++) {
			      		that.productList.splice(i, 1);//可行
			      	}

			      	for (var i = 0; i < this.products.length; i++) {
			      		
			      		that.productList.splice(i, 1, this.products[i]);//可行
			      		
			      	}

			      	
			      }
			    })
		    },

		},

		mounted: function () {
		    var that = this
		    utilAxios.get({
		      url: '/mock/html5/json/categoryList.json',
		      method: 'get',
		      callback: function (res) {
		      
		      	that.categoryList = res.data.categoryList;	
		      	that.subCategoryList = res.data.categoryList[that.num].subCategoryList;
		      	that.categoryId = res.data.categoryList[that.num].categoryId;
		      
		      }
		    })

		    utilAxios.get({
		      url: '/api/classify/getCategoryProduct?categoryID='+that.categoryId,
		      method: 'get',
		      callback: function (res) {
		      
		      	that.categoryName = res.data.data.productList[0].categoryName;
		      	that.productList = res.data.data.productList[0].item;	      
		      	
		      }
		    })
		 }

	}
	
</script>
