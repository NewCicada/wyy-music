<template>
  <div class="rank">
    <div v-if="!isLoading">
      <h2>云音乐特别榜</h2>
      <song-sheet-list
        :songSheetList="this.topList.slice(0, 4)"
      ></song-sheet-list>
      <h2>全球媒体榜</h2>
      <song-sheet-list :songSheetList="this.topList.slice(4)">
      </song-sheet-list>
    </div>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import SongSheetList from '../components/common/SongSheetList'
import Loading from '../components/common/Loading'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Rank',
  components: {
    SongSheetList,
    // eslint-disable-next-line vue/no-unused-components
    Loading,
  },
  data() {
    return {
      topList: [],
      isLoading: true,
    }
  },
  methods: {
    async _getRankTopList() {
      try {
        let res = await this.$api.getRankTopList()
        if (res.status === 200 && res.statusText === 'OK') {
          this.isLoading = false
          res.data.list.forEach((item) => {
            let topListObj = {}
            topListObj.picUrl = item.coverImgUrl
            topListObj.name = item.name
            topListObj.playCount = item.playCount
            topListObj.id = item.id
            this.topList.push(topListObj)
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this._getRankTopList()
  },
}
</script>

<style lang="less" scoped>
.rank {
  min-width: 1200px;
  padding-bottom: 10px;
  padding-top: 80px;
  h2 {
    padding: 20px 0 20px 18px;
  }
}
</style>