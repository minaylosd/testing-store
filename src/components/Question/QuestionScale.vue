<template>
  <form class="flex flex-col items-center w-full p-6 bg-white rounded-3xl">
    <div class="flex items-center justify-between w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Вопрос 1
      </p>
      <span
        class="font-compact font-medium text-sm text-txt px-1.5 py-0.5 bg-tertiary rounded-lg"
        >1 из 1</span
      >
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-[76px]"></div>
    <h1
      class="mb-4 text-xl font-medium leading-6 text-center text-txt font-wide"
    >
      Оцените изображение по шкале
    </h1>
    <img class="h-auto mb-8 w-100 rounded-3xl" src="/test-img.jpg" />
    <ul v-if="props.useEmoji" class="flex items-center gap-4 mb-8">
      <li>
        <p class="text-sm font-compact font-regular text-greytxt">
          Очень плохо
        </p>
      </li>

      <li
        class="relative w-8 h-8 cursor-pointer"
        v-for="answer in answers"
        :key="answer.value"
      >
        <img
          class="object-cover w-full h-full bg-no-repeat"
          :src="answer.imgSrc"
          alt=""
        />
        <label class="radio-label" :for="'answer' + answer.value"
          ><input
            type="radio"
            class="absolute inset-0 w-8 h-8 opacity-0 peer"
            name="answer"
            :id="'answer' + answer.value"
            @change="updateRadio(answer.value)"
          />
        </label>
      </li>

      <li>
        <p class="text-sm font-compact font-regular text-greytxt">
          Очень хорошо
        </p>
      </li>
    </ul>

    <div class="flex mb-8 gap-7">

      <div>
        <p class="mt-1 text-sm font-compact font-regular text-greytxt">
          Очень плохо
        </p>
      </div>
      

      <div class="flex flex-col gap-1">
        <div class="relative flex flex-col justify-center">
          <div ref="indicator" class="absolute left-0 flex h-1 -translate-y-1/2 rounded-sm top-1/2 indicator bg-brand" :style="{ width: indicatorWidth }"></div>
          <div ref="thumb" class="thumb" :style="{ left: indicatorWidth }"></div>
          <input
            class="w-[552px] h-8"
            :min="answers[0].value"
            :max="answers[answers.length-1].value"
            v-model="rangeAnswer"
            @input="updateRange"
            step="1"
            type="range"
            list="values"
          />
        </div>

        <datalist class="relative flex w-[552px] h-5" id="values">
          <div
            v-for="(answer, index) in answers"
            :key="answer.value" :style="{ left: index * 552 / (answers.length - 1) + 'px' }"
            class="absolute top-0 p-0 text-sm font-normal -translate-x-1/2 font-compact text-greytxt"
          >
            <option
              class="p-0"
              :value="answer.value"
              :label="answer.value"
            >
              {{ answer.value }}
            </option>
          </div> 
        </datalist>
      </div>

      <div>
        <p class="mt-1 text-sm font-compact font-regular text-greytxt">
          Очень хорошо
        </p>
      </div>
      
    </div>

    <div class="px-3 mb-6 w-100">
      <label
        for="commentary"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
      >
        Комментарий к ответу
      </label>
      <textarea
        type="text"
        id="commentary"
        placeholder="Прокомментируйте свой ответ"
        class="block w-full h-29 px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-6"
        required
      ></textarea>
    </div>

    <button
      class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
    >
      Ответить
    </button>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  useEmoji: Boolean,
});

const answers = ref([
  { value: 1, imgSrc: "/icons/1.svg" },
  { value: 2, imgSrc: "/icons/2.svg" },
  { value: 3, imgSrc: "/icons/3.svg" },
  { value: 4, imgSrc: "/icons/4.svg" },
  { value: 5, imgSrc: "/icons/5.svg" },
  { value: 6, imgSrc: "/icons/6.svg" },
  { value: 7, imgSrc: "/icons/7.svg" },
  { value: 8, imgSrc: "/icons/8.svg" },
  { value: 9, imgSrc: "/icons/9.svg" },
]);

const isAnyChecked = ref(false);
const selectedAnswer = ref(null);

function updateRadio(answerId) {
  selectedAnswer.value = answerId;
  isAnyChecked.value = true;
}

const thumb = ref(null);
const indicator = ref(null);

const rangeAnswer = ref(answers.value[0].value);

const maxIndex = computed(() => answers.value.length - 1);

const indicatorWidth = computed(() => {
  const currentIndex = answers.value.findIndex(answer => answer.value === rangeAnswer.value);
  if (currentIndex === -1) return '0%';
  return `${(currentIndex / maxIndex.value) * 100}%`;
});

function updateRange(event) {
  rangeAnswer.value = parseInt((event.target).value);
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
  border-radius: 16px;
  height: 32px;
  width: 32px;
  cursor: pointer;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08),
    0px 4px 24px 0px rgba(0, 0, 0, 0.12);
  position: absolute;
  top: 0;
  transform: translate(-50%, 0);
}
</style>
