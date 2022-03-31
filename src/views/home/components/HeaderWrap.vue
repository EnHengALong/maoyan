<template>
  <div class="header-wrap">
    <header>
      <a href="javascript:;">中牟县</a>
      <search-bar :placeholder="hotSearchWord" to="/search" />
    </header>
    <tab-bar :tabs="tabs" router class="home-tab" />
  </div>
</template>

<script>
export default {
  name: 'header-wrap',
  data () {
    return {
      hotSearchWord: [
        '这个杀手有点冷清',
        '阿政大战猛牛',
        '萧炎晋级斗皇'
      ],
      tabs: [
        {
          text: '推荐',
          key: '/home/recommend'
        },
        {
          text: '热片解读',
          key: '/home/hotspot'
        },
        {
          text: '预告片',
          key: '/home/trailer'
        },
        {
          text: '说电影',
          key: '/home/movie'
        },
        {
          text: '佳片',
          key: '/home/film'
        },
        {
          text: '剧综',
          key: '/home/synthesis'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
  background: #fff;
  header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      font-size: 12px;
      text-decoration: none;
      flex-shrink: 0;
      color: #333;
      margin-right: 20px;
    }
  }
  .home-tab {
    position: sticky;
    top: 0;
  }
}
</style>
