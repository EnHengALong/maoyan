<template>
  <div class="search-bar">
    <i class="iconfont icon-sousuo"></i>
    <div class="placeholder-wrap">
      <div :style="style">
        <span v-for="(item, index) in placeholder" :key="index">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  props: {
    placeholder: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: {
    style () {
      return {
        marginTop: -this.activeIndex * 40 + 'px'
      }
    }
  },
  created () {
    setInterval(() => {
      this.activeIndex += 1
      if (this.activeIndex >= this.placeholder.length) {
        this.activeIndex = 0
      }
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  height: 40px;
  background: #f5f5f5;
  border-radius: 20px;
  box-sizing: border-box;
  border-radius: 40px;
  overflow: hidden;
  display: flex;
  .icon-sousuo {
    font-size: 25px;
    color: #000;
    display: block;
    margin-left: 15px;
    margin-top: 8px;
  }
  .placeholder-wrap {
    font-size: 14px;
    line-height: 40px;
    color: #999;
    padding-left: 20px;
    div {
      transition: all 0.5 ease;
    }
    span {
      display: block;
    }
  }
}
</style>
