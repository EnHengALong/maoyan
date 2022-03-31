<template>
  <div class="crad-wrap">
    <header>
      <h2>
        {{ title }}
        <slot name="header"></slot>
      </h2>
      <router-link v-if="to" :to="to" class="sub-title">{{ subTitle }}</router-link>
    </header>
    <div class="crad-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'crad',
  props: {
    title: String,
    subTitle: String,
    to: String
  }
}
</script>

<style lang="scss" scoped>
.crad-wrap {
  margin: 10px;
  background: #fff;
  border-radius: 10px;
  header {
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    h2 {
      line-height: 44px;
      font-size: 14px;
      font-weight: bold;
    }
    .sub-title {
      font-size: 12px;
      color: #ccc;
      text-decoration: none;
    }
  }
}
</style>
