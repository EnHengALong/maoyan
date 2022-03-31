<template>
  <div class="home-page">
    <header-wrap />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderWrap from './components/HeaderWrap'
export default {
  name: 'home',
  components: {
    HeaderWrap
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  padding-bottom: 50px;
  background: #f2f2f2;
  .content {
    width: 100vw;
    min-height: calc(100vh - 149px);
  }
}
</style>
