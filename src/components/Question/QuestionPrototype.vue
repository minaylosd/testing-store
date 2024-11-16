<template>
  <div
    v-if="stage == 'start'"
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl"
  >
    <div class="flex items-center w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Начало
      </p>
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div
      class="flex flex-col items-center justify-center h-full grow max-w-128"
    >
      <h1
        class="mb-6 text-xl font-medium leading-6 text-center text-txt font-wide"
      >
        Инструкция
      </h1>

      <p
        class="mb-6 font-normal leading-6 text-center font-compact text-17 text-txt"
      >
        Внимательно посмотрите на изображение и выберите область клика
      </p>

      <button
        @click="startTest"
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
      >
        Начать
      </button>
    </div>
  </div>
  <div
    v-else-if="stage == 'question'"
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl"
  >
    <div class="flex items-center justify-between w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Шаг 1
      </p>

      <span
        class="font-compact font-medium text-sm text-txt px-1.5 py-0.5 bg-tertiary rounded-lg"
        >1 из 1</span
      >
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div class="relative w-full">
      <h1
        class="mb-6 text-xl font-medium leading-6 text-center text-txt font-wide"
      >
        Добавьте товар в корзину
      </h1>
      <img
        class="object-cover w-full h-auto rounded-3xl"
        src="/prototype.jpg"
        alt=""
      />
      <div class="flex items-center justify-center w-full gap-3">
        <button
          @click="cancelTest"
          class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-brand rounded-2xl bg-tertiary"
        >
          Не могу продолжить
        </button>

        <button
          @click="answerTest"
          class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
        >
          Далее
        </button>
      </div>
    </div>
  </div>
  <div
    v-else-if="stage == 'cancel'"
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl"
  >
    <div class="flex items-center justify-between w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Шаг 1
      </p>

      <span
        class="font-compact font-medium text-sm text-txt px-1.5 py-0.5 bg-tertiary rounded-lg"
        >1 из 1</span
      >
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div
      class="flex flex-col items-center justify-center h-full grow max-w-128"
    >
      <h1
        class="mb-6 text-xl font-medium leading-6 text-center text-txt font-wide"
      >
        Очень жаль, что у вас возникли трудности
      </h1>

      <p
        class="mb-6 font-normal leading-6 text-center font-compact text-17 text-txt"
      >
        Мы сообщим автору об этом
      </p>

      <button
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
      >
        Закончить
      </button>
    </div>
  </div>
  <div
    v-else-if="stage == 'answer'"
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl"
  >
    <div class="flex items-center justify-between w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Шаг 1
      </p>

      <span
        class="font-compact font-medium text-sm text-txt px-1.5 py-0.5 bg-tertiary rounded-lg"
        >1 из 1</span
      >
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div
      class="flex flex-col items-center justify-center h-full grow max-w-128"
    >
      <h1
        class="mb-6 text-xl font-medium leading-6 text-center text-txt font-wide"
      >
        Поздравляем, вы успешно справились с заданием!
      </h1>

      <button
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
      >
        Отлично
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const stage = ref("start");

const startTest = () => {
  stage.value = "question";
};

const cancelTest = () => {
  stage.value = "cancel";
};

const answerTest = () => {
  stage.value = "answer";
};
</script>
