<template>
  <div class="fixed inset-0 z-50 w-full h-full pb-6 bg-white pt-15 md:pt-6">
    <div
      @click="close"
      class="absolute w-8 h-8 cursor-pointer md:top-5 top-3 right-5 z-110">
      <CloseCross />
    </div>
    <div class="w-full h-full overflow-hidden">
      <div
        class="flex flex-col items-center w-full h-full grid-cols-12 gap-8 px-5 mx-auto md:px-20 md:grid max-w-388 2xl:px-9">
        <div
          class="col-span-2 flex order-2 md:order-none md:flex-col items-start justify-center gap-2.5 mr-auto ml-0 md:mr-0 md:ml-0">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            @click="handleThumb(index)"
            data-role="thumb-btn"
            :class="[
              'relative md:w-40 w-11 md:h-40 h-11 overflow-hidden rounded-lg cursor-pointer border-2 border-solid',
              index === shownSlide ? 'border-brand' : 'border-transparent',
            ]">
            <img
              class="absolute z-10 object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              :src="slide" />
          </div>
        </div>

        <div
          @click="handlePrev"
          data-role="prev-btn"
          class="hidden ml-auto mr-3 rounded-full cursor-pointer md:block md:order-none shadow-shadow w-11 h-11">
          <Arrow />
        </div>

        <div
          data-role="slider"
          class="relative order-1 w-full h-full col-span-6 overflow-hidden rounded-lg md:order-none">
          <img
            class="absolute object-cover w-full h-auto -translate-x-1/2 -translate-y-1/2 md:h-full top-1/2 left-1/2"
            :src="slides[shownSlide]"
            alt="" />
        </div>

        <div
          @click="handleNext"
          data-role="next-btn"
          class="hidden ml-3 mr-auto rounded-full cursor-pointer md:block md:order-none shadow-shadow w-11 h-11">
          <Arrow class="rotate-180" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Arrow from "./icons/Arrow.vue";
import CloseCross from "./icons/CloseCross.vue";
import { ref } from "vue";

const slides = [props.item.imgSrc, props.item.imgSrc, props.item.imgSrc];
const shownSlide = ref(0);

const handleThumb = (index) => {
  shownSlide.value = index;
};

const handlePrev = () => {
  shownSlide.value = (shownSlide.value - 1 + slides.length) % slides.length;
};

const handleNext = () => {
  shownSlide.value = (shownSlide.value + 1) % slides.length;
};

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close-details"]);

const close = () => {
  emit("close-details");
};
</script>
