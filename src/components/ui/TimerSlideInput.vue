<template>
  <div class="flex flex-col">
    <p class="mb-2 font-normal leading-6 text-17 font-compact text-greytxt">
      Таймер: {{ rangeAnswer < 60 ? `${rangeAnswer} сек` : transformToMinutes(rangeAnswer) }}
    </p>
    
    <div class="relative flex flex-col justify-center mb-2">
      <div ref="indicator" class="absolute left-0 flex h-1 -translate-y-1/2 rounded-sm top-1/2 indicator bg-brand"
        :style="{ width: indicatorWidth }"></div>
      <div ref="thumb" class="thumb" :style="{ left: indicatorWidth }"></div>
      <input class="w-full h-6" min="30" max="1200" v-model="rangeAnswer" @input="updateRange" step="5" type="range"
        list="values" />
    </div>

    <div class="flex items-center justify-between w-full mb-2">
      <p class="text-sm font-normal font-compact text-greytxt">
        30 сек.
      </p>

      <p class="text-sm font-normal font-compact text-greytxt">
        20 мин.
      </p>
    </div>

    <div class="flex gap-[14px] mb-4">
      <div class="min-w-6 min-h-6">
        <InfoIcon :small="true" />
      </div>

      <p class="font-normal leading-6 font-compact text-17 text-greytxt">
        Время прохождения тестирования: {{ rangeAnswer < 60 ? `${rangeAnswer} сек` : transformToMinutes(rangeAnswer) }}
      </p>
    </div>

 
      <input type="checkbox" id="no-time-limit" checked class="option custom-checkbox" />
      <label for="no-time-limit"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt">
        Без ограничений
      </label>
  
  </div>

</template>

<script setup>
import { ref, computed } from "vue";
import InfoIcon from "../icons/InfoIcon.vue";

const thumb = ref(null);
const indicator = ref(null);

const rangeAnswer = ref(30);

const indicatorWidth = computed(() => {
  return `${((rangeAnswer.value - 30) / 1200) * 100}%`;
});

function updateRange(event) {
  rangeAnswer.value = parseInt((event.target).value);
}

function transformToMinutes(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return seconds === 0 ? `${minutes} мин` : `${minutes} мин ${seconds} сек`;
}
</script>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  background-color: rgba(188, 195, 208, 0.5);
  border-radius: 2px;
  height: 4px;
}


input[type="range"]::-webkit-slider-thumb {
  opacity: 0;
}

input[type="range"]::-moz-range-track {
  background-color: rgba(188, 195, 208, 0.5);
  border-radius: 2px;
  height: 4px;
}

input[type="range"]::-moz-range-thumb {
  opacity: 0;
}

.thumb {
  background-color: #fff;
  border-radius: 12px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08),
    0px 4px 24px 0px rgba(0, 0, 0, 0.12);
  position: absolute;
  top: 0;
  transform: translate(-50%, 0);
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.custom-checkbox+label::before {
  content: "";
  background-image: url("/icons/Checkbox-unchecked.svg");
  background-repeat: no-repeat;
  display: inline-block;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
}

.custom-checkbox:checked+label::before {
  background-image: url("/icons/Checkbox-checked.svg");
}
</style>