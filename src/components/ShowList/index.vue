<template>
  <div class="show-item">
    <div class="box">
      <dl
        v-for="(item, index) in list"
        :key="index"
      >
        <dt>
          <img :src="item.posterUrl" alt="" />
        </dt>
        <dd>
          <label>{{item.tagText}}</label>
          <h2>{{item.projectName}}</h2>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-list',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.show-item {
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
        label {
          background: linear-gradient(to right, #fa8601, #fdd802);
          font-size: 12px;
          padding: 0 3px;
          border-radius: 5px;
          color: #fff;
          transform: scale(0.5);
          transform-origin: left center;
        }
        h2 {
          width: 70px;
          font-size: 13px;
          color: #111;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin: 5px 0;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
