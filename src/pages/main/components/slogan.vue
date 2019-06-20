<template>
  <div class="slogan">
    <div class="banner">
      <router-link to="/slogan">
        <div class="icon-write iconfont">&#xe617;</div>
      </router-link>
      <div class="slogan-title">下午好，胡昱松</div>
      <div class="main-slogan">
        <!--{{this.$store.state.words}}-->
          <div class="icon iconfont">&#xe6b7;</div>
        <div class="words">{{this.$store.state.slogan}}</div>
      </div>
    </div>
    <div class="exercise">
      <div class="record">已坚持运动 1,234 分钟</div>
      <div class="detail iconfont">&#xe604;</div>
    </div>
    <div class="division"></div>
  </div>
</template>

<script>
export default {
  name: 'MainSlogan',
  mounted () {
    console.log('main page ' + this.$store.state.slogan)
  }
}
</script>

<style scoped lang="stylus">
.banner
  position relative
  height 120px
  background rgba(219,219,219,0.1)
  border-bottom 1px solid rgba(170,170,170,0.2)
  .icon-write
    position absolute
    right 10px
    top 15px
    font-size 20px
    color #66CDAA
  .slogan-title
    padding-top 10px
    color #888686
    font-size 12px
    padding-left 20px
  .main-slogan
    display flex
    margin-top 30px
    color #1a2a3a
    height 20px
    .icon
      font-size 20px
      line-height 20px
      margin-left 10px
      margin-right 10px
      color #66CDAA
    .words
      font-size 20px
.exercise
  display flex
  justify-content space-between
  height 50px
  .record
    margin-left 10px
    line-height 50px
    color #2a3a4a
    font-size 14px
    /*letter-spacing 1px*/
  .detail
    line-height 50px
    color #4a5a6a
    margin-right 10px
.division
  height 10px
  background-color: rgba(170,170,170,0.1)
</style>
