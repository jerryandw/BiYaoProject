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
					<i>我的订单</i>
					<i>查看全部订单<img src="/static/shopimage/icon_more.png" /></i>
				</div>
				<div class="order-list">
					<ul>
						<li>
							<img src="/static/shopimage/icon_payfor.png" />
							<p>代付款</p>
						</li>
						<li>
							<img src="/static/shopimage/icon_consigneefor.png" />
							<p>待收货</p>
						</li>
						<li>
							<img src="/static/shopimage/icon_appraisefor.png" />
							<p>代付款</p>
						</li>
						<li>
							<img src="/static/shopimage/icon_after_sale.png" />
							<p>退货／售后</p>
						</li>
					</ul>

				</div>
				<div class="setting">
					<i>设置</i>
					<i><img src="/static/shopimage/icon_more.png" /></i>
				</div>
				<div class="kf">
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
	export default {}

</script>

<style lang="css">


</style>
