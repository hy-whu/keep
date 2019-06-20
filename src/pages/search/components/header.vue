<template>
  <div class="header">
    <input type="text" placeholder="大家都在搜「改善高低肩」" autofocus="autofocus">
    <router-link to="/">
      <div class="cancel">取消</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SearchHeader'
}
</script>

<style scoped lang="stylus">
  a
    text-decoration none
  .header
    height 40px
    display flex
    margin-top 5px
    input
      border none
      outline none
      flex 1 1 auto
      background rgba(221,221,221,0.3)
      margin 5px 10px
      line-height 40px
      border-radius 3px
      color #4a5a6a
      font-size 12px
      text-indent 5px
    .cancel
      color #32CD32
      font-size 13px
      line-height 40px
      margin-right 10px
</style>
