<template>
  <div class="detail">
    <div class="banner" ref="bg" :style = "{ backgroundImage: 'url(' + this.obj.content.courseImg +')' }">
      <div class="mask">
        <router-link to="/">
          <div class="return iconfont">&#xe605;</div>
        </router-link>
        <div class="title">
          <div class="name">{{this.obj.title}}</div>
          <div class="download">{{this.obj.download}}</div>
        </div>
        <div class="tag">{{this.obj.content.tag[0]}} · {{this.obj.content.tag[1]}} · {{this.obj.content.tag[2]}}</div>
        <div class="intro">
          <div class="des">{{this.obj.content.des1}}</div>
          <div class="all" v-on:click="clicked = !clicked">查看全部</div>
        </div>
      </div>
    </div>
    <transition name="fade">
        <div class="show" v-if="clicked">
          <p class="des1">{{this.obj.content.des1}}</p>
          <p class="des2">{{this.obj.content.des2}}</p>
        </div>
    </transition>
    <div class="show-mask" v-on:click="clicked = !clicked"  v-if="clicked"></div>
    <div class="stat">
      <div class="ener">
        <div class="ener-title">燃脂</div>
        <div class="ener-data">{{this.obj.content.energy}}<span>千卡</span></div>
      </div>
      <div class="span">|</div>
      <div class="time">
        <div class="time-title">时长</div>
        <div class="time-data">{{this.obj.duration}}<span>分钟</span></div>
      </div>
      <div class="span">|</div>
      <div class="level">
        <div class="level-title">难度</div>
        <div class="level-data">K{{this.obj.level}}<span>{{level}}</span></div>
      </div>
    </div>
    <div class="division"></div>
    <div class="appliance">
      <div class="app-title">器械</div>
      <div class="type">{{this.obj.content.appliance}}</div>
    </div>
    <div class="border"></div>
    <div class="times">
      <div class="time-left">
        <div class="time-data">{{this.obj.content.times}}<span>&nbsp;次</span></div>
        <div class="time-des">完成训练</div>
      </div>
      <div class="time-img" :style = "{ backgroundImage: 'url(' + this.obj.content.peopleImg +')' }"></div>
    </div>
    <div class="division"></div>
    <div class="concept" >
      <div class="concept-title">课程理念</div>
      <div class="pic" :style = "{ backgroundImage: 'url(' + this.obj.content.concept +')' }"></div>
    </div>
    <div class="fixed-start">
      <div class="start">开始训练</div>
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      obj: {},
      clicked: false,
      level: ''
    }
  },
  created () {
    this.obj = this.$store.state.exeDetail
    switch (this.obj.level) {
      case 1:
        this.level = '零基础'
        break
      case 2:
        this.level = '初学'
        break
      case 3:
        this.level = '进阶'
        break
    }
  },
  methods: {
    handleShowAll () {
    }
  }
}
</script>

<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.banner
  height 300px
  background-size cover
  .mask
    height 100%
    background rgba(34,33,33,0.2)
    position relative
    .return
      position absolute
      left 10px
      top 15px
      font-size 16px
      font-weight 700
      color #fff
    .title
      padding-top 220px
      color #fff
      padding-left 10px
      display flex
      .name
        font-size 24px
        letter-spacing 1px
      .download
        font-size 12px
        transform scale(0.6)
        border 1px solid #fff
        padding 2px
        height 14px
        border-radius 3px
    .tag
      font-size 12px
      padding-top 6px
      margin-left -8px
      color rgba(255,255,255,0.95)
      transform scale(0.9)
      letter-spacing 0.5px
    .intro
      height 15px
      display flex
      font-size 12px
      margin-left -8px
      padding-top 6px
      transform scale(0.9)
      letter-spacing 0.5px
      line-height 15px
      .des
        height 15px
        line-height 15px
        color rgba(255,255,255,0.95)
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
        width 100%
      .all
        color rgba(255,255,255,0.5)
        white-space: nowrap;
        letter-spacing 0.5px
.show-mask
  position fixed
  left 0
  top 0
  height 100%
  width 100%
  background-color rgba(255,255,255,0)
.show
  position fixed
  z-index 1
  width 90%
  height 30%
  color #aaa
  font-size 12px
  background-color: #fff;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius 10px
  .des1
    margin 10px
    transform scale(0.9)
    line-height 17px
  .des2
    margin 0 10px 10px 10px
    transform scale(0.9)
    line-height 16px
.stat
  display flex
  height 80px
  justify-content space-between
  .span
    color #ddd
    font-size 12px
    transform scale(0.9)
    line-height 80px
  .ener
    margin-left 20px
    .ener-title
      color #aaa
      font-size 12px
      letter-spacing 1px
      transform scale(0.9)
      margin-top 17px
      text-align center
    .ener-data
      font-size 16px
      margin-top 10px
      font-weight 500
      letter-spacing 0.5px
      color #1a2a3a
      span
        display:inline-block;
        color #aaa
        font-size 12px
        transform scale(0.85)
  .time
    .time-title
      color #aaa
      font-size 12px
      letter-spacing 1px
      transform scale(0.9)
      margin-top 17px
      text-align center
    .time-data
      font-size 16px
      margin-top 10px
      font-weight 500
      letter-spacing 0.5px
      color #1a2a3a
      span
        display:inline-block;
        color #aaa
        font-size 12px
        transform scale(0.85)
  .level
    margin-right 20px
    .level-title
      color #aaa
      font-size 12px
      letter-spacing 1px
      transform scale(0.9)
      margin-top 17px
      text-align center
    .level-data
      font-size 16px
      margin-top 10px
      font-weight 500
      letter-spacing 0.5px
      color #1a2a3a
      span
        display:inline-block;
        color #aaa
        font-size 12px
        transform scale(0.85)
.division
  height 10px
  background-color: rgba(170,170,170,0.05)
.appliance
  height 50px
  .app-title
    display inline-block
    line-height 50px
    color rgba(0,0,0,0.8)
    font-size 13px
    letter-spacing 0.5px
    margin-left 10px
  .type
    display inline-block
    line-height 50px
    margin-left 5px
    font-size 14px
    font-weight 400
.border
  height 0.5px
  width 90%
  margin 0 auto
  background-color rgba(170,170,170,0.1)
.times
  height 50px
  display flex
  justify-content space-between
  margin-bottom 18px
  .time-left
    margin-left 10px
    .time-data
      font-weight 500
      font-size 14px
      margin-top 18px
      letter-spacing 0.5px
      span
        display inline-block
        font-size 12px
        transform scale(0.9)
        color rgba(0,0,0,0.3)
    .time-des
      font-size 12px
      color #aaa
      letter-spacing 0.5px
      margin 3px 0 0 0
      transform scale(0.9)
  .time-img
    width 250px
    height 50px
    -webkit-background-size: cover
    background-size: cover
    line-height 50px
    margin-top 7px
.concept
  .concept-title
    height 50px
    color #1a2a3a
    font-size 13px
    line-height 50px
    margin-left 10px
  .pic
    height 250px
    -webkit-background-size: cover
    background-size: cover
.fixed-start
  width 100%
  height 50px
  position fixed
  bottom 0
  background-color: #fff;
  border-top 1px solid rgba(170,170,170,0.1)
  .start
    width 75%
    height 40px
    margin 5px auto
    background-color: #66CDAA;
    border-radius 20px
    color #fff
    text-align center
    line-height 40px
    font-size 15px
    letter-spacing 1px
.space
  height 50px
</style>
