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

    <div class="flex gap-5 mb-8">
      <p class="mt-3 text-sm font-compact font-regular text-greytxt">
        Очень плохо
      </p>

      <div>
        <input
          class="w-[552px] mb-6"
          min="0"
          max="9"
          step="1"
          type="range"
          list="values"
        />
        <datalist class="flex justify-between w-[552px]" id="values">
          <option
            class="p-0 text-sm font-normal font-compact text-greytxt"
            v-for="answer in answers"
            :value="answer.value"
            :key="answer.value"
            :label="answer.value"
          ></option>
        </datalist>
      </div>

      <p class="mt-3 text-sm font-compact font-regular text-greytxt">
        Очень хорошо
      </p>
    </div>

    <div class="px-3 mb-6 w-100">
      <label
        for="commentary"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Комментарий к ответу</label
      >
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
import { ref } from "vue";

const props = defineProps({
  useEmoji: Boolean,
});

const answers = ref([
  { value: 0, imgSrc: "/icons/0.svg" },
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
</script>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 4px;
  outline: none;
  border-radius: 2px;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 4px;
  background: rgba(188, 195, 208, 0.5);
  border-radius: 2px;
}

input[type="range"]::-moz-range-track {
  height: 4px;
  background: rgba(188, 195, 208, 0.5);
  border-radius: 2px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 32px;
  height: 32px;
  margin-top: -16px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08),
    0px 4px 24px 0px rgba(0, 0, 0, 0.12);
}
</style>
