<template>
  <div class="waterfall-list">
    <div class="left">
      <div v-for="(item, index) in leftList" :key="index">
        <dl>
          <dt><img :src="item.images[0].url" alt=""></dt>
          <dd>
            <div v-if="item.product" class="product">
              <!-- <img :src="item.product.img" /> -->
              <i class="iconfont icon-dianying"></i>
              <span>{{item.product.name}}</span>
            </div>
            <h2 class="title">{{item.title}}</h2>
            <div v-if="item.user" class="user">
              <div class="info"><img :src="item.user.avatarurl" /><small>{{item.user.nickName}}</small></div>
              <div class="up-count">
                <i class="iconfont icon-huiyuan"></i>
                <output>{{item.upCount}}</output>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
    <div class="right">
      <div v-for="(item, index) in rightList" :key="index">
        <dl>
          <dt><img :src="item.images[0].url" alt=""></dt>
          <dd>
            <div v-if="item.product" class="product">
              <!-- <img :src="item.product.img" /> -->
              <i class="iconfont icon-dianying"></i>
              <span>{{item.product.name}}</span>
            </div>
            <h2 class="title">{{item.title}}</h2>
            <div v-if="item.user" class="user">
              <div class="info"><img :src="item.user.avatarurl" /><small>{{item.user.nickName}}</small></div>
              <div class="up-count">
                <i class="iconfont icon-huiyuan"></i>
                <output>{{item.upCount}}</output>
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'waterfall-list',
  props: {
    list: Array
  },
  data () {
    return {
      leftList: [],
      rightList: []
    }
  },
  watch: {
    list: {
      handler (newValue) {
        const colHeight = [0, 0]
        const left = []
        const right = []
        newValue.forEach((item) => {
          const min = Math.min.apply(null, colHeight)
          const minIndex = colHeight.indexOf(min)
          colHeight[minIndex] += item.images[0].hight + (item.title.length <= 10 ? 41 : 62)
          // console.log(item.images[0].height) //瀑布流 对不齐
          if (minIndex === 0) {
            left.push(item)
          } else {
            right.push(item)
          }
        })
        this.leftList = left
        this.rightList = right
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.waterfall-list {
  display: flex;
  .left, .right {
    width: 50%;
    padding: 0 10px;
    dl {
      border-radius: 5px;
      overflow: hidden;
      background: #fff;
      margin-bottom: 10px;
      dt {
        width: 100%;
        img {
          display: block;
          width: 100%;
        }
      }
      dd {
        padding: 10px;
        .title {
          font-size: 14px;
          font-weight: bold;
          line-height: 1.5;
          overflow: hidden;
          display: -webkit-box;
          max-height: 62px;
          box-sizing: border-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
        }
        .user {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 5px;
          .info {
            display: flex;
            align-items: center;
            small {
              margin-left: 5px;
              font-size: 14px;
              width: 70px;
              color: #222;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            img {
              display: block;
              width: 18px;
              border-radius: 100%;
            }
          }
          .up-count {
            font-size: 14px;
          }
        }
        .product {
          font-size: 14px;
          margin-bottom: 5px;
          font-weight: bold;
          color: #666;
          display: flex;
          align-items: center
        }
      }
    }
  }
}
</style>
