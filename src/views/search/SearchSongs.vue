<template>
  <div class="search-song">
    <play-list
      :playListTable="searchData"
      :isShowCollection="false"
    ></play-list>
  </div>
</template>

<script>
import PlayList from '../../components/playlistdetail/PlayList'
export default {
  name: 'SearchSongs',
  props: {
    searchData: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    PlayList,
  },
  created() {
    console.log(this.searchData)
  },
}
</script>

<style lang="less" scoped>
</style>