<template>
  <div class="slogan">
    <div class="banner">
      <router-link to="/">
        <div class="cancel iconfont">&#xe621;</div>
      </router-link>
      <router-link to="/">
        <div class="save" v-on:click="handleSloganSave">保存</div>
      </router-link>
    </div>
    <div class="area">
      <textarea ref="text" v-model="countLength"></textarea>
      <div class="count">{{this.countLength.length}} / 16</div>
    </div>
    <div class="example" v-for="(word,index) of words" :key="word.id" v-on:click="handleSloganChange(index)">{{word}}</div>
  </div>
</template>

<script>
export default {
  name: 'Slogan',
  data () {
    return {
      countLength: '',
      words: ['每秒都有人在流汗，我不想落后', '坚持运动一个月，证明给TA看', '每天运动30分钟，自律即自由']
    }
  },
  watch: {
    countLength () {
      if (this.countLength.length >= 16) {
        this.countLength = this.countLength.substr(0, 16)
      }
    }
  },
  methods: {
    handleSloganChange (index) {
      this.countLength = this.words[index]
    },
    handleSloganSave () {
      this.$store.commit('changeSlogan', {word: this.countLength})
    }
  },
  mounted () {
    this.$refs.text.value = this.$store.state.slogan
  }
}
</script>

<style scoped lang="stylus">
a
  text-decoration none
.banner
  height 50px
  line-height 50px
  display flex
  justify-content space-between
  .cancel
    color #1a2a3a
    font-size 14px
    margin-left 10px
  .save
    color #71C671
    font-size 14px
    margin-right 10px
.area
  position relative
  textarea
    max-width 100%
    outline none
    resize none
    font-size 25px
    margin  15px 40px
  .count
    position absolute
    right 10px
    bottom 10px
    width 50px
    height 15px
    color #ccc
    font-size 12px
.example
  font-size 14px
  width 80%
  color rgba(92,92,92,0.7)
  margin 30px auto
  text-align left
  border-bottom 1px solid rgba(221,221,221,0.4)
  padding-bottom 10px
</style>
