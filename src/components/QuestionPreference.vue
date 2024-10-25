<template>
  <form
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl"
  >
    <div class="flex items-center w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Выберите объект
      </p>
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <h1
      class="mb-8 text-xl font-medium leading-6 text-center text-txt font-wide"
    >
      Посмотрите на объекты и выберите наиболее предпочтительный для вас
    </h1>

    <div
      :class="answers.length > 2 ? 'grid-cols-4 w-full' : 'grid-cols-2 w-2/3'"
      class="grid items-center gap-6 mb-8"
    >
      <div
        v-for="(answer, index) in answers"
        :key="index"
        class="cursor-pointer"
        @click="selectedAnswer = index"
      >
        <img
          class="w-full h-auto mb-4 rounded-3xl"
          :class="{
            'outline outline-2 outline-brand': selectedAnswer === index,
          }"
          :src="answer.imgSrc"
          alt=""
        />
        <label
          class="block font-normal leading-6 text-center text-17 font-compact text-txt"
          :for="`answer-${index}`"
          >{{ answer.value }}</label
        >
        <input
          type="radio"
          :id="`answer-${index}`"
          class="hidden"
          :value="index"
          v-model="selectedAnswer"
        />
      </div>
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

const answers = ref([
  { value: "Лепка из глины", imgSrc: "/test-img.jpg" },
  { value: "Вязание", imgSrc: "/test-img.jpg" },
  { value: "Спорт", imgSrc: "/test-img.jpg" },
  { value: "Йога", imgSrc: "/test-img.jpg" },
  { value: "Рисование", imgSrc: "/test-img.jpg" },
  { value: "Игры", imgSrc: "/test-img.jpg" },
  { value: "Вышивание", imgSrc: "/test-img.jpg" },
  { value: "Прогулки", imgSrc: "/test-img.jpg" },
  { value: "Плавание", imgSrc: "/test-img.jpg" },
  { value: "Приготовление пищи", imgSrc: "/test-img.jpg" },
]);

const selectedAnswer = ref(null);
</script>
