<template>
  <div class="fixed inset-0 z-50 w-full h-full py-6 bg-white">
    <div class="relative w-full h-full overflow-hidden">
      <div @click="close" class="absolute top-0 w-8 h-8 cursor-pointer right-5">
        <CloseCross />
      </div>
      <div
        class="grid items-center w-full h-full grid-cols-12 gap-8 px-20 mx-auto max-w-388 2xl:px-10"
      >
        <div
          class="col-span-2 flex flex-col items-start justify-center gap-2.5"
        >
          <div
            v-for="(slide, index) in slides"
            :key="index"
            @click="handleThumb(index)"
            data-role="thumb-btn"
            :class="[
              'relative w-40 h-40 overflow-hidden rounded-lg cursor-pointer border-2 border-solid',
              index === shownSlide ? 'border-brand' : 'border-transparent',
            ]"
          >
            <img
              class="absolute z-10 object-cover w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              :src="slide"
            />
          </div>
        </div>

        <div
          @click="handlePrev"
          data-role="prev-btn"
          class="ml-auto mr-3 rounded-full cursor-pointer shadow-shadow w-11 h-11"
        >
          <Arrow />
        </div>

        <div
          data-role="slider"
          class="relative w-full h-full col-span-6 overflow-hidden"
        >
          <img
            class="absolute object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            :src="slides[shownSlide]"
            alt=""
          />
        </div>

        <div
          @click="handleNext"
          data-role="next-btn"
          class="ml-3 mr-auto rounded-full cursor-pointer shadow-shadow w-11 h-11"
        >
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
