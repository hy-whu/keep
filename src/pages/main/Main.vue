<template>
  <div>
    <MainHeader></MainHeader>
    <MainSlogan></MainSlogan>
    <MainList></MainList>
    <MainTeam></MainTeam>
  </div>
</template>

<script>
import MainHeader from './components/header'
import MainList from './components/list'
import MainSlogan from './components/slogan'
import MainTeam from './components/team'

export default {
  name: 'Main',
  components: {
    MainHeader,
    MainList,
    MainSlogan,
    MainTeam
  }
}
</script>

<style scoped lang="stylus">

</style>
