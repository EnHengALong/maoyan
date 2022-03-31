<template>
  <swiper class="swiper-wrap" ref="mySwiper" :options="swiperOptions">
    <swiper-slide
      v-for="(item, index) in images"
      :key="index"
    ><img :src="item.image" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'banner',
  props: {
    images: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
        // Some Swiper option/callback...
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrap {
  width: 100vw;
  // height: auto;
  overflow: hidden;
  padding: 10px 0;
  .swiper-slide {
    padding: 0 10px;
    box-sizing: border-box;
  }
  img {
    display: block;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>
