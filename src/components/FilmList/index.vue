<template>
  <div class="film-item">
    <div class="box">
      <dl
        v-for="(item, index) in list"
        :key="index"
      >
        <dt>
          <img :src="item.img" alt="" />
        </dt>
        <dd>
          <h2>{{item.nm}}</h2>
          <el-button
            type="primary"
            round
            :color="item.showStateButton && item.showStateButton.color"
          >{{item.showStateButton && item.showStateButton.content || '想看'}}</el-button>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filmlist',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.film-item {
  width: 100%;
  height: auto;
  overflow: auto;
  padding: 0 0 10px 0;
  .box {
    width: 250%;
    height: auto;
    display: flex;
    padding: 0 10px;
    dl {
      display: flex;
      flex-direction: column;
      // align-items: center;
      margin-right: 5px;
      dt {
        width: 80px;
        height: 118px;
        border-radius: 5px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        h2 {
          width: 70px;
          font-size: 14px;
          color: #222;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          padding: 5px 0;
        }
      }
    }
  }
}
</style>
