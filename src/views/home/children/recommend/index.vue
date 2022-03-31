<template>
  <div>
    <banner :images="bannerList" />
    <crad>
      <navigation :list="navigationList" />
      <activity :list="activityList" />
    </crad>
    <crad
      title="正在热映"
      subTitle="全部40部"
      to="/film"
    >
      <film-list :list="hotList"/>
    </crad>
    <crad
      subTitle="全部54部"
      to="/film"
    >
      <template v-slot:header>
        <nav class="film-tab">
          <a href="javascript:;" :class="{active: filmTabIndex === 0}" @click="filmChange(0)">待映推荐</a>
          <div class="se"></div>
          <a href="javascript:;" :class="{active: filmTabIndex === 1}" @click="filmChange(1)">即将上映</a>
        </nav>
      </template>
      <film-list v-show="filmTabIndex == 0" :list="highComing" />
      <film-list v-show="filmTabIndex == 1" :list="comingList" />
    </crad>
    <crad
      title="精彩演出"
      subTitle="查看全部"
      to="/film"
    >
      <show-list :list="showList" />
    </crad>
    <crad
      title="猫眼放映厅"
      subTitle="全部392部"
      to="/film"
    >
      <film-list :list="hotList" />
    </crad>
    <div>
      <waterfall-list :list="commonList"/>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Navigation from './components/Navigation'
import Activity from './components/Activity'
export default {
  name: 'recommend',
  components: {
    Banner,
    Navigation,
    Activity
  },
  data () {
    return {
      bannerList: [],
      navigationList: [],
      activityList: [],
      hotList: [],
      comingList: [],
      highComing: [],
      filmTabIndex: 0,
      showList: [],
      commonParams: {
        offset: 0,
        limit: 10
      },
      commonList: []
    }
  },
  // 生命周期里的初始化 调用
  created () {
    this.initHomeData()
  },
  mounted () {
    this.ininEvent()
  },
  watch: {
    commonParams: {
      handler: 'fetchCommon',
      deep: true,
      immediate: true
    }
  },
  // 方法 函数
  methods: {
    initHomeData () {
      this.$api.home.banner().then((res) => {
        this.bannerList = res.data.data[0].config
        // console.log(res.data.data[0].config)
      })
      this.$api.home.navigation().then((res) => {
        this.navigationList = res.data.data[0].config
        // console.log(res)
      })
      this.$api.home.activity().then((res) => {
        this.activityList = res.data.data[0].config
        // console.log(res)
      })
      this.$api.home.hotFilm().then((res) => {
        this.hotList = res.data.data.hot
        // console.log(res.data.data.hot)
      })
      this.$api.home.coming().then((res) => {
        this.comingList = res.data.data.coming
        // console.log(res)
      })
      this.$api.home.highComing().then((res) => {
        this.highComing = res.data.data.coming
        // console.log(res)
      })
      this.$api.home.wonderfulShow().then((res) => {
        this.showList = res.data.data
        // console.log(res)
      })
    },
    fetchCommon () {
      this.$api.home.common(this.commonParams).then((res) => {
        // console.log(res, '瀑布流')
        this.commonList = this.commonList.concat(res.data.data.feeds)
      })
    },
    filmChange (index) {
      this.filmTabIndex = index
    },
    // 上拉更新
    ininEvent () {
      window.addEventListener('scroll', this.scroll, false)
    },
    scroll () {
      const bodyHeight = document.body.clientHeight
      const windowHeight = window.innerHeight
      const scrollTop = document.querySelector('html').scrollTop
      console.log(bodyHeight, windowHeight, scrollTop)
      if (bodyHeight - scrollTop - 20 <= windowHeight) {
        console.log('到底了')
        this.commonParams.offset += 10
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.film-tab {
  display: flex;
  a {
    font-size: 14px;
    margin-right: 10px;
    color: #ccc;
    font-weight: bold;
    text-decoration: none;
    &.active {
      color: #000;
    }
  }
  .se {
    width: 2px;
    height: 10px;
    background: #ccc;
    margin: auto;
    margin-right: 10px;
    // margin: 0 5px;
  }
}
</style>
