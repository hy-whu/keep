<template>
  <div>
    <search-header></search-header>
    <search-result></search-result>
    <search-hot-topic></search-hot-topic>
  </div>
</template>

<script>
import SearchHeader from './components/header'
import SearchResult from './components/result'
import SearchHotTopic from './components/hotTopic'
export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchResult,
    SearchHotTopic
  }
}
</script>

<style scoped>

</style>
