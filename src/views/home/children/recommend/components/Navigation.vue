<template>
  <div class="navigation">
    <a v-for="(item, index) in list" :key="index" href="javascript:;">
      <img :src="item.materialItems[2].value" alt="" />
      <span>{{item.materialItems[0].value}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  a {
    flex-shrink: 0;
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 0;
    img {
      display: block;
      width: 70%;
    }
    span {
      text-decoration: none;
      font-size: 14px;
      color: #333;
    }
  }
}
</style>
