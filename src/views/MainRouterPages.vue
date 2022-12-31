<template>
  <div class="main-router-pages">
    <header-main v-if="!($route.path.indexOf('/login') != -1)"></header-main>
    <router-view class="router-page"></router-view>
  </div>
</template>

<script>
import Login from './Login'
import HeaderMain from './HeaderMain'
// import FooterMain from './FooterMain'
// import GoTop from './'
export default {
  name: 'MainRouterPages',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Login,
    HeaderMain,
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="less">
.main-router-pages {
  position: relative;
  min-height: 100vh;
  min-width: 1200px;
  .router-page {
    padding-left: 5%;
    padding-right: 5%;
    min-height: 473px;
  }
}
</style>