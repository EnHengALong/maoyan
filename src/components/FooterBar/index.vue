<template>
  <div class="footer-nav">
    <router-link
      v-for="(item, index) in tabs"
      :key="index"
      :to="item.path"
      active-class="active"
    >
      <i :class="['default', 'iconfont', item.iocn]"></i>
      <i :class="['select', 'iconfont', item.selectIocn]"></i>
      <span>{{item.text}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer-bar',
  data () {
    return {
      tabs: [
        {
          path: '/home',
          iocn: 'icon-shouye',
          selectIocn: 'icon-maoyan',
          text: '首页'
        },
        {
          path: '/film',
          iocn: 'icon-dianying',
          selectIocn: 'icon-dianying1',
          text: '电影/影院'
        },
        {
          path: '/perform',
          iocn: 'icon-yanchu',
          selectIocn: 'icon-yanchu1',
          text: '演出'
        },
        {
          path: '/sports',
          iocn: 'icon-tiyusaishi',
          selectIocn: 'icon-tiyusaishi',
          text: '体育/赛事'
        },
        {
          path: '/mine',
          iocn: 'icon-wode',
          selectIocn: 'icon-wode1',
          text: '我的'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: auto;
  background: #fff;
  border-top: 0.01rem solid #d8d8d8;
  display: flex;
  justify-content: space-around;
  padding-bottom: env(safe-area-inset-bottom);
  a {
    padding: 5px 0;
    color: #666;
    display: flex;
    flex-direction: column;
    align-items: center;
    i {
      font-size: 25px;
      margin-bottom: 1px;
    }
    span {
      font-size: 12px;
    }
    .select {
      display: none;
    }
    .default {
      display: block;
    }
    &.active {
      color: #f03d37;
      .select {
        display: block;
      }
      .default {
        display: none;
      }
    }
  }
}
</style>
