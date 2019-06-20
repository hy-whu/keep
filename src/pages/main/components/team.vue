<template>
    <div class="team">
      <div class="team-title">
        <div class="title">打卡小分队</div>
        <div class="all-team iconfont">&#xe604;</div>
      </div>
      <div class="slide-banner" ref="slides">
        <div class="slide" v-for="slide in slides" :key="slide.id">
          <img class="slide-img" :src="slide.url">
          <div class="slide-title">{{slide.title}}</div>
          <div class="slide-des">{{slide.des}}</div>
        </div>
      </div>
      <div class="division"></div>
    </div>
</template>

<script>
// import BScroll from '@better-scroll/core'
export default {
  name: 'MainTeam',
  data () {
    return {
      slides: [{
        url: 'https://upload-images.jianshu.io/upload_images/3289487-a75fda2fe2603a46.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/478/format/webp',
        title: '夜跑7天！',
        des: '7天养成夜跑好习惯'
      }, {
        url: 'https://upload-images.jianshu.io/upload_images/3289487-1108de0f23000809.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/476/format/webp',
        title: '睡前助眠好习惯',
        des: '14天睡前小习惯，改善睡眠质量'
      }, {
        url: 'https://upload-images.jianshu.io/upload_images/3289487-0fa7b0aada9c7310.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/472/format/webp',
        title: '每晚减肥打卡',
        des: '14天！跟着我们变成易瘦体质吧！'
      }]
    }
  },
  mounted () {
    // this.scroll = new BScroll('.slide-banner', {
    //   scrollY: true,
    //   bounce: true
    // })
  }
}
</script>

<style scoped lang="stylus">
  .team
    height 250px
    .team-title
      height 50px
      font-size 14px
      color #1a2a3a
      display flex
      justify-content space-between
      .title
        margin-left 10px
        line-height 50px
      .all-team
        line-height 50px
        margin-right 15px
        color #aaa
    .slide-banner
      height 200px
      white-space nowrap
      overflow-x scroll
      .slide
        width 240px
        display inline-block
        margin-left 10px
        .slide-img
          width 240px
        .slide-title
          margin-top 15px
          margin-left 10px
          color #2a3a4a
          letter-spacing 0.5px
        .slide-des
          margin-top 10px
          color #ccc
          font-size 13px
          margin-left 10px
  scrollbar
    display none
  .division
    height 10px
    background-color: rgba(170,170,170,0.1)
</style>
