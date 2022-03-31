<template>
  <!-- <button :class="['btn', type]">
        <slot></slot> 数组
  </button>-->
  <button
    :class="{
      btn: true,
      [type]: true,
      plain: plain,
      round: round
    }"
    :style="{
      background: color
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    color: {
      type: String,
      default: '#faaf01'
    },
    type: String,
    plain: Boolean,
    round: Boolean
  }
}
</script>

<style lang="scss" scoped>
$colors: (
  primary: #f03e38,
  success: #3b9fe6,
  warning: #faaf01
);
.btn {
  border: 1px solid;
  color: #fff;
  padding: 3px 12px;
  display: block;
  font-size: 14px;
  // margin-bottom: 20px;
  @each $name, $color in $colors {
    &.#{$name} {
      background: $color;
      &.plain {
        background: transparent;
        border-color: $color;
        color: $color;
      }
      &.round {
        border-radius: 20px;
      }
    }
  }
}
</style>
