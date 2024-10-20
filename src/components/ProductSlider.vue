<template>
  <div class="bg-[#E5EEF9] overflow-hidden">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        ><img
          class="w-full h-auto min-w-[200px]"
          src="/screenshot-1.png"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="w-full h-auto min-w-[200px]"
          src="/screenshot-2.png"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="w-full h-auto min-w-[200px]"
          src="/screenshot-3.png"
          alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-free-mode",
  title: "Free mode / No fixed positions",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2.5,
        spaceBetween: 50,
        breakpoints: {
          640: {
            slidesPerView: 2.5,
          },
          0: {
            slidesPerView: 1.5,
          },
        },
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style scoped>
.swiper {
  padding: 50px 50px 0 50px;
}
</style>
