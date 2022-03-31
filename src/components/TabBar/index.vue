<template>
  <div class="tabs">
    <nav>
      <a
        v-for="(item, index) in tabs"
        :key="index"
        :class="{
          active: activeIndex === index
        }"
        @click="change(item, index)"
        href="javascript:;"
        ref="navs"
      >{{ item.text }}</a>
    </nav>
    <span class="line" ref="line"></span>
  </div>
</template>

<script>
export default {
  name: 'tab-bar',
  props: {
    tabs: Array,
    router: Boolean
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  mounted () {
    this.setLineLeft()
  },
  methods: {
    change (item, index) {
      if (this.router && this.$route.fullPath !== item.key) {
        this.$router.push(item.key)
      }
      this.activeIndex = index
      // setTimeout(() => {
      //   this.setLineLeft()
      // }, 0)
      this.$nextTick(() => {
        this.setLineLeft()
      })
    },
    setLineLeft () {
      const activeNav = this.$refs.navs[this.activeIndex]
      const windth = activeNav.clientWidth
      const left = activeNav.offsetLeft + windth / 2 - 5
      this.$refs.line.style.left = left + 'px'
      console.log(left)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  overflow: auto;
  position: relative;
  nav {
    display: flex;
    a {
      padding: 0 10px;
      margin-right: 10px;
      line-height: 40px;
      font-size: 16px;
      text-decoration: none;
      color: #333;
      flex-shrink: 0;
      &.active {
        font-size: 20px;
      }
    }
  }
  .line {
    position: absolute;
    bottom: 5px;
    width: 10px;
    height: 2px;
    background: #f03d37;
    transition: all .5s ease;
  }
}
</style>
