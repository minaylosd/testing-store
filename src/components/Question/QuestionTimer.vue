<template>
  <div
    v-if="stage == 'start'"
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl"
  >
    <div class="flex items-center w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Начало
      </p>
      <span
        class="font-compact font-medium text-sm text-txt px-1.5 py-0.5 bg-tertiary rounded-lg"
        >1 из 1</span
      >
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div class="flex flex-col items-center justify-center h-full grow">
      <h1
        class="mb-6 text-xl font-medium leading-6 text-center text-txt font-wide"
      >
        Тест 5 секунд
      </h1>

      <p class="mb-6 font-normal leading-6 font-compact text-17 text-txt">
        Сейчас вы увидите изображение, у вас будет 5 секунд
      </p>

      <button
        @click="showOverlay"
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
      >
        Показать изображение
      </button>
    </div>

    <div
      v-if="overlayShown"
      class="fixed inset-0 z-50 flex items-center justify-center bg-txt/40"
    >
      <div class="p-6 bg-white rounded-3xl">
        <img
          class="object-contain w-full h-full rounded-lg"
          src="/test-img.jpg"
          alt=""
        />
      </div>
    </div>
  </div>

  <form
    v-else
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl"
  >
    <div class="flex items-center w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Начало
      </p>
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div class="flex flex-col items-center justify-center h-full grow w-100">
      <h1
        class="mb-6 text-xl font-medium leading-6 text-center text-txt font-wide"
      >
        Вопрос: что вы запомнили?
      </h1>

      <label
        for="question"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Опишите, что вы запомнили</label
      >
      <input
        type="text"
        id="question"
        placeholder="Напр., цвет"
        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
        required
      />

      <button
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
      >
        Ответить
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const stage = ref("start");
const overlayShown = ref(false);
const timer = ref(5000);
const showOverlay = () => {
  overlayShown.value = true;
  setTimeout(() => {
    overlayShown.value = false;
    stage.value = "question";
  }, timer.value);
};
</script>
