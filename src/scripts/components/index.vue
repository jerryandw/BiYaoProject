<template>
  <div class="m-index">
    
    <section>
      <router-view ></router-view>
    </section>
    <nav>
      <ul>
      	<router-link tag="li" to="/board" active-class="active" class="yo-ico iconfont">
				&#xe61e;<b>首页</b>
				</router-link>
				<router-link tag="li" to="/list" active-class="active" class="yo-ico iconfont">
				&#xe612;<b>分类</b>
				</router-link>
				<router-link tag="li" to="/car" active-class="active" class="yo-ico iconfont">
				&#xe602;<b>购物车</b>
				</router-link>
				<router-link tag="li" to="/my" active-class="active" class="yo-ico iconfont">
        &#xe61e;<b>我的</b>
        </router-link>
      </ul>

    </nav>
  </div>
</template>



<script>

	export default {
	
	}
	
</script>