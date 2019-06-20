<template>
<div class="result">
  <div class="title">热门搜索</div>
  <div class="list">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="hot iconfont" v-show="item.show">&#xe664;&nbsp;</div>
      <div class="content">{{item.content}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'searchResult',
  data () {
    return {
      items: [{
        show: true,
        content: '改善高低肩'
      }, {
        show: true,
        content: '超模腿'
      }, {
        show: true,
        content: '腹肌'
      }, {
        show: false,
        content: '瘦腿'
      }, {
        show: false,
        content: '减脂'
      }, {
        show: false,
        content: '拉伸'
      }, {
        show: false,
        content: '哑铃'
      }, {
        show: false,
        content: '马甲线'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
.result
  width 95%
  margin 15px auto
  .title
    font-size 14px
    letter-spacing 1px
    color #4a5a6a
  .list
    display flex
    flex-wrap wrap
    margin-top 10px
    margin-bottom 10px
    .item
      height 25px
      background #ddd
      display flex
      font-size 12px
      line-height 25px
      margin 0 10px
      margin-top 10px
      padding 2px 10px
      border-radius 10px
      .hot
        color #FA8072
      .content
        color #4a5a6a
</style>
