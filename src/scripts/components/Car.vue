<template lang="html">
	<div class="bigbox">
		<header class="yo-header yo-header-a">
	      <h2 class="title">购物车</h2>
	      <span class="affirm">编辑</span>
		</header>
		<div class="main">
				<div v-if="false" class="shop1">
					<div class="logo">
								<img src="/static/shopimage/shop.png" />
					</div>
					<p>购物车还是空的,赶紧行动吧!</p>
					<input type="button" value="去逛逛" />

				</div>

				<div v-else="" class="shop2">
					<div class="store">
						<div class="title">
								<em></em>
								<i><img src="/static/shopimage/icon_assess_store.png" /></i>
								<span>HITESINBEL儿童书包</span>
								<b><img src="/static/shopimage/icon_more.png" /></b>
								<strong>编辑</strong>
						</div>
						<div class="title-main">
							<em></em>
							<dl>
								<dt>
									<img src="https://bfs.biyao.com/group1/M00/00/69/wKhkVFkCq3WAbnbrAACNaaMfrAo217_400x400.jpg" width="90px" height="88px">
								</dt>
								<dd class="main1">
									<span>肩部印花纯棉男士短袖T恤</span>
									<span>黑色，S</span>
									<p>
										<i>¥159</i><i>x2</i>
									</p>
								</dd>

								<dd class="main2">
									<div class="m-l">
										<span><img src="/static/shopimage/btn_cart_deduct_unable.png" /></span>
										<i>1</i>
										<span><img src="/static/shopimage/btn_cart_add_able.png" /></span>

									</div>
									<div class="m-r">
										<i><img src="/static/shopimage/icon_design_del_unable.png" /></i>
									</div>
								</dd>
							</dl>
						</div>
					</div>




					<div class="store">
						<!-- <div class="title">
								<em></em>
								<i><img src="/static/shopimage/icon_assess_store.png" /></i>
								<span>HITESINBEL儿童书包</span>
								<b><img src="/static/shopimage/icon_more.png" /></b>
								<strong>编辑</strong>
						</div> -->
						<div class="title-main">
							<em></em>
							<dl>
								<dt>
									<img src="https://bfs.biyao.com/group1/M00/00/69/wKhkVFkCq3WAbnbrAACNaaMfrAo217_400x400.jpg" width="90px" height="88px">
								</dt>
								<dd class="main1">
									<span>肩部印花纯棉男士短袖T恤</span>
									<span>黑色，S</span>
									<p>
										<i>¥159</i><i>x2</i>
									</p>
								</dd>

								<dd class="main2">
									<div class="m-l">
										<span><img src="/static/shopimage/btn_cart_deduct_unable.png" /></span>
										<i>1</i>
										<span><img src="/static/shopimage/btn_cart_add_able.png" /></span>

									</div>
									<div class="m-r">
										<i><img src="/static/shopimage/icon_design_del_unable.png" /></i>
									</div>
								</dd>
							</dl>
						</div>
					</div>
				</div>

			</div>
			<div class="footer">
				<em><img src="/static/shopimage/icon_banner_dot_defult.png" /></em>
				<i>全选</i>
				<div class="f-r">
					<b>合计：</b><b>¥678</b>
					<span>结算</span>
				</div>

			</div>
	</div>
</template>

<script>
	export default {}

</script>

<style lang="css">


</style>
