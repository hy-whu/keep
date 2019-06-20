<template>
<div class="list">
  <div class="header">
    <div class="my-course">我参加的课程</div>
    <div class="find-course">发现课程</div>
  </div>
  <router-link to="/detail">
    <div class="course" v-for="(item,index) of itemList" :key="item.id" v-on:click="handleContentInside(index)">
      <div class="course-title">
        <div class="name">{{item.title}}</div>
        <div class="level">{{item.duration}} 分钟.K{{item.level}}</div>
      </div>
      <div class="course-des">
      <div class="last-exe">上次训练 {{item.lastTime}} 天前</div>
      <div class="download">{{item.download}}</div>
    </div>
    </div>
  </router-link>
  <div class="division"></div>
</div>
</template>

<script>
export default {
  name: 'MainList',
  data () {
    return {
      itemList: [{
        title: '5公里法特莱克跑',
        duration: 40,
        level: 2,
        lastTime: 1,
        download: '已下载',
        content: {
          tag: ['距离提升', '5公里', '走跑间歇训练'],
          energy: 480,
          des1: '本课程使用法特莱克训练法，让新手达到有氧能力及格线，40分钟内完成5公里跑步！法特莱克(Fartlek)的意思是「速度游戏」，通过跑步中不同速度的结合，增加跑步的趣味性，消耗更多热量',
          des2: '本课程适合可以轻松不间断慢跑15分钟左右的keeper，建议每周练习2-3次',
          appliance: '无器械',
          times: '3746175',
          courseImg: 'http://static1.keepcdn.com/2017/07/31/21/1501507391086_750x700.jpg',
          concept: 'https://upload-images.jianshu.io/upload_images/3289487-a81de13a1dddd1ed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/764/format/webp',
          peopleImg: 'https://upload-images.jianshu.io/upload_images/3289487-a5153a1483e4312f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/458/format/webp'
        }
      }, {
        title: '3公里法特莱克跑',
        duration: 27,
        level: 1,
        lastTime: 2,
        download: '已下载',
        content: {
          tag: ['提升距离', '3公里', '走跑结合'],
          energy: 283,
          des1: '这是一套以「法特莱克训练法(速度游戏)」为设计背景的跑步课程，通过切换跑步速度，增加跑步的趣味性，燃烧更多的热量，在课程中我们还加入了摆臂、呼吸和步频的语音指导，让你全程都能保持正确的跑姿',
          des2: '这套课程适合可以轻松不间断慢跑5分钟左右的keeper，建议每周练习2-3次',
          appliance: '无器械',
          times: '3155564',
          courseImg: 'https://static1.keepcdn.com/2017/05/23/14/1495521473548_750x700.jpg',
          concept: 'https://upload-images.jianshu.io/upload_images/3289487-1ec908b0f5a5f63a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/764/format/webp',
          peopleImg: 'https://upload-images.jianshu.io/upload_images/3289487-04e89cb14e401bdf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/468/format/webp'
        }
      }, {
        title: '腹肌训练入门',
        duration: 13,
        level: 1,
        lastTime: 22,
        download: '已下载',
        content: {
          tag: ['腹肌训练', '高效塑造'],
          energy: 33,
          des1: '超经典「虐腹动作」，腹肌打造第一步！如果你在练其他腹肌课程时会出现腰痛、脖子疼、大腿酸等问题，说明腹肌力量还比较弱，不适宜练习难度较高的动作。这套课程选用的是「最基础」的腹肌训练动作，帮助你循序渐进地增强腹肌力量，为更高级的腹肌训练做好准备。',
          des2: '',
          appliance: '无器械',
          times: '40021570',
          courseImg: 'https://static1.keepcdn.com/2016/11/08/15/1478591205855_750x700.jpg',
          concept: '',
          peopleImg: 'https://upload-images.jianshu.io/upload_images/3289487-a4bd41bfe722a907.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/468/format/webp'
        }
      }, {
        title: '燃脂跑 MIIT进阶',
        duration: 30,
        level: 3,
        lastTime: 40,
        download: '已下载',
        content: {
          tag: ['轻松燃脂', '4公里', '走跑间歇训练'],
          energy: 320,
          des1: '适合有一定跑步基础，希望通过跑步减脂的Keeper使用。课程由慢走、慢跑和快跑组合循环，通过短距离的交替跑步不断刺激心率，提高有氧训练的能力，增加燃脂的效率。降低长距离跑步的障碍，为能够持续固定距离或时间的跑步打下基础。',
          des2: '本课程适合可以轻松不间断慢跑35分钟左右的keeper，建议每周练习2-3次',
          appliance: '无器械',
          times: '1099154',
          courseImg: 'https://static1.keepcdn.com/2017/02/14/14/1487053541751_750x700.png',
          concept: 'https://upload-images.jianshu.io/upload_images/3289487-bd90e975b803e326.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/764/format/webp',
          peopleImg: 'https://upload-images.jianshu.io/upload_images/3289487-a5153a1483e4312f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/458/format/webp'
        }
      }, {
        title: '8公里法特莱克跑',
        duration: 62,
        level: 3,
        lastTime: 53,
        download: '已下载',
        content: {
          tag: ['距离提升', '8公里', '走跑间歇训练'],
          energy: 633,
          des1: '本课程以法特莱克训练法「速度游戏」为设计背景，采用倒金字塔结构的编排形势，通过跑步中不同速度的结合，增加跑步的趣味性，消耗更多能量，同时还在课程中加入了摆臂、呼吸和步频的语音指导，让你全程都能保持正确的跑姿',
          des2: '本课程适合可以轻松不间断慢跑25分钟左右的keeper，建议每周练习1-2次',
          appliance: '无器械',
          times: '598819',
          courseImg: 'https://static1.keepcdn.com/2018/02/12/18/1518432578328_750x700.jpg',
          concept: 'https://upload-images.jianshu.io/upload_images/3289487-28f167dde663914a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/764/format/webp',
          peopleImg: 'https://upload-images.jianshu.io/upload_images/3289487-04e89cb14e401bdf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/468/format/webp'
        }
      }]
    }
  },
  methods: {
    handleContentInside (index) {
      let obj = {}
      obj.download = this.itemList[index].download
      obj.content = this.itemList[index].content
      obj.title = this.itemList[index].title
      obj.duration = this.itemList[index].duration
      obj.level = this.itemList[index].level
      this.$store.commit('changeContent', obj)
    }
  }
}
</script>

<style scoped lang="stylus">
a
  text-decoration none
  color #1a2a3a
.header
  height 60px
  display flex
  justify-content space-between
  .my-course
    line-height 60px
    margin-left 10px
    font-size 14px
    color #1a2a3a
    letter-spacing 0.5px
  .find-course
    height  30px
    width 80px
    margin 15px
    border-radius 10px
    font-size 12px
    background #66CDAA;
    color #fff
    text-align center
    line-height 30px
    letter-spacing 1px
.course
  height 100px
  border-bottom 1px solid rgba(170,170,170,0.2)
  .course-title
    display flex
    justify-content space-between
    padding-top 25px
    .name
      margin-left 10px
      font-size 18px
      letter-spacing 0.5px
    .level
      font-size 12px
      color #1a2a3a
      margin-right 15px
  .course-des
    display flex
    justify-content space-between
    .last-exe
      margin-left 10px
      margin-top 10px
      font-size 12px
      color #ccc
    .download
      margin-right 15px
      margin-top 10px
      font-size 12px
      color #ccc
.division
  height 10px
  background-color: rgba(170,170,170,0.1)
</style>
