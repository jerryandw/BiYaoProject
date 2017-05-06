
<template lang="html">
 <div class="banner">
		<mt-swipe :auto="4000">
		  <mt-swipe-item><img src="../../../static/imges/2.jpg" /></mt-swipe-item>
		  <mt-swipe-item><img src="../../../static/imges/2.jpg" /></mt-swipe-item>
		  <mt-swipe-item><img src="../../../static/imges/2.jpg" /></mt-swipe-item>
		</mt-swipe>
 	</div>
 	
 	
</template>


<script>


import Vue from 'vue';
import Mint from 'mint-ui';

Vue.use(Mint);

import { Swipe, SwipeItem } from 'mint-ui';
import "mint-ui/lib/style.css"

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

	export default {}

	
</script>

