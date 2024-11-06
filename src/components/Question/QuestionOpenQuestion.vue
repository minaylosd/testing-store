<template>
  <div
    v-if="!questionAnswered"
    class="flex flex-col items-center w-full h-full pt-4 pb-8 bg-white px-11 rounded-3xl"
  >
    <div class="flex items-center justify-between w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Шаг 1
      </p>

      <span
        class="font-compact font-medium text-sm text-txt px-1.5 py-0.5 bg-tertiary rounded-lg"
        >1 из 2</span
      >
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div class="relative flex flex-col items-center mx-auto w-100">
      <h1
        class="mb-4 text-xl font-medium leading-6 text-center text-txt font-wide"
      >
        Что вы видите на изображении?
      </h1>
      <img
        v-if="hasImage"
        class="object-cover w-full h-auto mb-4 rounded-3xl"
        src="/test-img.jpg"
        alt=""
      />

      <div class="w-full">
        <label
          for="answer"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >Ваш ответ</label
        >
        <textarea
          type="text"
          id="answer"
          placeholder="Введите текст ответа"
          class="block w-full h-[150px] px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-6"
          required
        ></textarea>
      </div>

      <button
        @click="answerQuestion"
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
      >
        Ответить
      </button>
    </div>
  </div>

  <div
    v-else
    class="w-full min-h-[796px] flex flex-col items-center justify-center"
  >
    <div class="flex flex-col items-center w-91">
      <h1
        class="mb-6 text-xl font-medium leading-6 text-center text-txt font-wide"
      >
        Спасибо за участие!
      </h1>
      <img class="object-cover mb-6 w-35 h-35" src="/icons/heart.svg" alt="" />

      <p
        class="mb-4 font-normal leading-6 text-center font-compact text-17 text-greytxt"
      >
        У нас проходит много интересных тестирований. Присоединяйтесь
      </p>

      <button
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand mb-8"
      >
        Тестировать
      </button>

      <a href="/" target="_blank" class="w-10 h-10">
        <img src="/icons/tg.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hasImage = ref(true);
const questionAnswered = ref(false);

const answerQuestion = () => {
  questionAnswered.value = true;
};
</script>
