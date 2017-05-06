<template>
  <div class="m-index">
    <header class="yo-header yo-header-a">
      <h2 class="title">必要</h2>
      <span class="regret yo-ico">&#xf067;</span>

    </header>
    <section>
      <router-view ></router-view>
    </section>
    <nav>
      <ul>
        <li class="active yo-ico iconfont">&#xe61e;<b>首页</b></li>
        <li class="yo-ico iconfont">&#xe612;<b>分类</b></li>
        <li class="yo-ico iconfont">&#xe602;<b>购物车</b></li>
        <li class="yo-ico iconfont">&#xe61e;<b>我的</b></li>
      </ul>

    </nav>
  </div>
</template>
