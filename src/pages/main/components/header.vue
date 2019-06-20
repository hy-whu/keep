<template>
  <div>
    <div class="header-title">
      <div class="title">运动</div>
      <div class="icon-list">
        <span class="planet iconfont">&#xe689;</span>
        <router-link to="/search">
          <span class="search iconfont">&#xe611;</span>
        </router-link>
      </div>
    </div>
    <div class="nav">
      <div class="nav-list"><a href="#">现在开始</a></div>
      <div class="nav-list"><a href="#">跑步</a></div>
      <div class="nav-list"><a href="#">行走</a></div>
      <div class="nav-list"><a href="#">智能硬件</a></div>
      <div class="nav-list"><a href="#">瑜伽</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped lang="stylus">
a
  text-decoration none
  color #aaaaaa
.header-title
  display flex
  height 60px
  justify-content space-between
  .title
    line-height 60px
    margin-left 10px
    font-size 20px
  .icon-list
    line-height 60px
    .planet
      line-height 60px
      margin-right 10px
      color #66CDAA
      font-size 20px
      font-weight 600
    .search
      line-height 60px
      margin-right 10px
      font-size 20px
      font-weight bold
.nav
  width 90%
  display flex
  justify-content space-between
  margin 15px auto
  font-size 14px
  .nav-list:nth-child(1) > a
    color #1a2a3a
</style>
