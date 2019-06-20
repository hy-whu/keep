<template>
<div class="topic">
  <div class="title">热门话题</div>
  <div class="wrapper" v-for="topic in topics" :key="topic.id">
    <div class="header">
      <div class="left">
        <div class="icon-left iconfont">&#xe874;</div>
        <div class="des">{{topic.content}}</div>
      </div>
      <div class="right">
        <div class="num">{{topic.num}} 万人围观</div>
        <div class="icon-right iconfont">&#xe604;</div>
      </div>
    </div>
    <div class="img-list">
      <img :src="topic.url1" alt="img">
      <img :src="topic.url2" alt="img">
      <img :src="topic.url3" alt="img">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'hotTopic',
  data () {
    return {
      topics: [{
        content: '如何有效消灭小肚子？',
        num: 39,
        url1: 'https://upload-images.jianshu.io/upload_images/3289487-df377f8ec92c7d9e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/226/format/webp',
        url2: 'https://upload-images.jianshu.io/upload_images/3289487-029ce44204c93a94.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/224/format/webp',
        url3: 'https://upload-images.jianshu.io/upload_images/3289487-b2e7654463f67193.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/224/format/webp'
      }, {
        content: '有哪些科学瘦腿的方法？',
        num: 39.1,
        url1: 'https://upload-images.jianshu.io/upload_images/3289487-d11bfd9570d15adc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/226/format/webp',
        url2: 'https://upload-images.jianshu.io/upload_images/3289487-61c8578e8de80986.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/226/format/webp',
        url3: 'https://upload-images.jianshu.io/upload_images/3289487-7b3aafa7f6206838.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/226/format/webp'
      }, {
        content: '节后这样吃，轻松瘦回去',
        num: 11.5,
        url1: 'https://upload-images.jianshu.io/upload_images/3289487-58418bf1a75cec26.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/232/format/webp',
        url2: 'https://upload-images.jianshu.io/upload_images/3289487-4e82a4ca92cdf2ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/230/format/webp',
        url3: 'https://upload-images.jianshu.io/upload_images/3289487-5505869b1e92a5a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/230/format/webp'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
  .title
    font-size 14px
    letter-spacing 1px
    color #4a5a6a
    margin-left 10px
    margin-top 25px
  .wrapper
    width 90%
    margin 10px auto
    height 150px
    padding-bottom 10px
    border-bottom 1px solid rgba(170,170,170,0.2)
    .header
      display flex
      height 40px
      .left
        display flex
        flex 0 0 60%
        line-height 40px
        .icon-left
          font-size 18px
          color #8EE5EE
        .des
          margin-left 7px
          font-size 14px
          color #2a3a4a
      .right
        display flex
        flex 0 0 40%
        line-height 40px
        justify-content flex-end
        .num
          color #aaa
          font-size 12px
        .icon-right
          color #aaa
          font-size 14px
          margin-left 10px
    .img-list
      display flex
      justify-content space-between
      img
        width 32%
        height 32%
        flex 0 1 32%
</style>
