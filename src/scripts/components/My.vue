<template lang="html">

			<div class="myself">
				<div class="top">
					<p>
						<img src="/static/shopimage/sobot_bottombar_message.png" />
					</p>

					<div class="my-image">
							<img src="/static/shopimage/icon_person.png" />
					</div>

					<i>
						<router-link tag="span" to="/login">登录</router-link>｜
						<router-link tag="span" to="/sign">注册</router-link>
					</i>

				</div>
				<div class="my-order">
					<router-link tag="i" to="/order">我的订单</router-link>
					<router-link tag="i" to="/order">查看全部订单<img src="/static/shopimage/icon_more.png" /></router-link>
				</div>
				<div class="order-list">
					<ul>
						<router-link tag="li" to="/pay">
							<img src="/static/shopimage/icon_payfor.png" />
							<p>代付款</p>
						</router-link>
						<router-link tag="li" to="/goods">
							<img src="/static/shopimage/icon_consigneefor.png" />
							<p>待收货</p>
						</router-link>
						<router-link tag="li" to="/speak">
							<img src="/static/shopimage/icon_appraisefor.png" />
							<p>代付款</p>
						</router-link>
						<router-link tag="li" to="/salereturn">
							<img src="/static/shopimage/icon_after_sale.png" />
							<p>退货／售后</p>
						</router-link>
					</ul>

				</div>
				<div class="setting">
					<i>设置</i>
					<i><img src="/static/shopimage/icon_more.png" /></i>
				</div>
				<div class="kf" @click="click">
					<span>客服中心<i>（7*24小时服务）</i></span>
					<span>9533859<img src="/static/shopimage/icon_more.png" /></span>

				</div>
				<div class="kong">
						<p>
							任何问题，立刻致电9533859，有我们在，您放心！
						</p>
				</div>
			</div>

</template>

<script>
import Vue from "vue"
import Router from "vue-router"
import { MessageBox } from 'mint-ui';
	export default {
		data:function(){
			return({})
		},
		methods: {
			click:function(){
			MessageBox({
		  title: '是否拨打电话',
		  message: '9533859',
		  showCancelButton: true
		});
			}
		}

	}

</script>

<style lang="css">


</style>
