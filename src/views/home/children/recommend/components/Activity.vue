<template>
  <div class="navigation">
    <div class="box">
      <dl
        v-for="(item, index) in list"
        :key="index"
      >
        <dt>
          <img :src="item.materialItems[0].value" alt="" />
          <img :src="item.materialItems[4].value" alt="" />
        </dt>
        <dd>
          <h2>{{item.materialItems[1].value}}</h2>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activeity',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  height: auto;
  overflow: auto;
  padding: 10px 10px;
  box-sizing: border-box;
  .box {
    width: 250%;
    display: flex;
    justify-content: space-around;
    dl {
      margin-right: 20px;
      height: 100%;
      position: relative;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 10px;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      dt {
        img:nth-child(1) {
          width: 65%;
          display: block;
        }
        img:nth-child(2) {
          width: 30%;
          display: block;
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      dd {
        h2 {
          font-size: 12px;
          color: #666;
          margin-top: 10px;
          display: block;
        }
      }
    }
  }
}
</style>
