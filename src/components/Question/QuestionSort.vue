<template>
  <div v-if="stage == 'start'"
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl">
    <div class="flex items-center w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Начало
      </p>
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div class="flex flex-col items-center justify-center h-full grow max-w-[608px]">
      <h1 class="mb-6 text-xl font-medium leading-6 text-center text-txt font-wide">
        Отсортируйте каждую карточку в категорию, которая вам кается наиболее
        подходящей
      </h1>

      <p class="mb-6 font-normal leading-6 text-center font-compact text-17 text-txt">
        Отсортируйте все карточки по предложенным категориям справа на странице.
      </p>
      <p class="mb-6 font-normal leading-6 text-center font-compact text-17 text-txt">
        В этом задании нет правильных или неправильных ответов — расположите карточки по вашему усмотрению.
      </p>
      <p class="mb-6 font-normal leading-6 font-compact text-17 text-txt">
        Время прохождения: <span class="text-brand">1:00 мин</span>
      </p>

      <img class="mb-8" src="/sort-img.svg" alt="" />

      <button @click="startTest"
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand">
        Начать
      </button>
    </div>
  </div>
  <SortDragDrop v-else-if="stage == 'question'" />
  <!-- <div
    v-else-if="stage == 'question'"
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl"
  >
    <div class="flex items-center justify-between w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Сортировка карточек
      </p>

      <p class="leading-6 qfont-normal font-compact text-17 text-brand">
        1:00 мин
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
        Отсортируйте каждую карточку в категорию, которая вам кается наиболее
        подходящей
      </h1>

      <div class="grid grid-cols-[1fr_2fr] gap-4 mb-6">
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-[20px] bg-tertiary p-4 flex flex-col gap-4">
            <img
              class="object-cover w-full h-auto rounded-[10px]"
              src="/test-img.jpg"
              alt=""
            />
            <p class="font-normal leading-6 font-compact text-17 text-txt">
              Котенок
            </p>
          </div>

          <div class="rounded-[20px] bg-tertiary p-4 flex flex-col gap-4">
            <img
              class="object-cover w-full h-auto rounded-[10px]"
              src="/test-img.jpg"
              alt=""
            />
            <p class="font-normal leading-6 font-compact text-17 text-txt">
              Котенок
            </p>
          </div>

          <div class="rounded-[20px] bg-tertiary p-4 flex flex-col gap-4">
            <img
              class="object-cover w-full h-auto rounded-[10px]"
              src="/test-img.jpg"
              alt=""
            />
            <p class="font-normal leading-6 font-compact text-17 text-txt">
              Котенок
            </p>
          </div>
        </div>

        <div
          class="grid grid-cols-3 gap-4 border border-solid rounded-3xl border-divider/50"
        >
          <div
            class="flex flex-col justify-between px-8 py-4 border-r border-solid border-divider/50"
          >
            <div class="flex flex-col gap-4">
              <div v-if="openType">
                <label
                  for="category-1"
                  class="block mb-1 text-sm font-normal font-compact text-greytxt"
                  >Назовите категорию</label
                >
                <input
                  type="text"
                  id="category-1"
                  placeholder="Напр., люди"
                  class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
                  required
                />
              </div>
              <p
                v-else
                class="font-medium leading-6 text-left text-txt font-compact text-17"
              >
                Животные
              </p>

              <div class="rounded-[20px] bg-tertiary p-4 flex flex-col gap-4">
                <img
                  class="object-cover w-full h-auto rounded-[10px]"
                  src="/test-img.jpg"
                  alt=""
                />
                <p class="font-normal leading-6 font-compact text-17 text-txt">
                  Котенок
                </p>
              </div>
            </div>

            <button
              v-if="openType"
              class="bg-tertiary p-2.5 rounded-2xl w-11 h-11"
            >
              <img src="/icons/delete.svg" alt="" />
            </button>
          </div>

          <div
            class="flex flex-col justify-between px-8 py-4 border-r border-solid border-divider/50"
          >
            <div class="flex flex-col gap-4">
              <div v-if="openType">
                <label
                  for="category-1"
                  class="block mb-1 text-sm font-normal font-compact text-greytxt"
                  >Назовите категорию</label
                >
                <input
                  type="text"
                  id="category-1"
                  placeholder="Напр., люди"
                  class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
                  required
                />
              </div>
              <p
                v-else
                class="font-medium leading-6 text-left text-txt font-compact text-17"
              >
                Животные
              </p>
            </div>

            <button
              v-if="openType"
              class="bg-tertiary p-2.5 rounded-2xl w-11 h-11"
            >
              <img src="/icons/delete.svg" alt="" />
            </button>
          </div>

          <div class="flex flex-col justify-between px-8 py-4">
            <div class="flex flex-col gap-4">
              <div v-if="openType">
                <label
                  for="category-1"
                  class="block mb-1 text-sm font-normal font-compact text-greytxt"
                  >Назовите категорию</label
                >
                <input
                  type="text"
                  id="category-1"
                  placeholder="Напр., люди"
                  class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
                  required
                />
              </div>
              <p
                v-else
                class="font-medium leading-6 text-left text-txt font-compact text-17"
              >
                Животные
              </p>
            </div>

            <button
              v-if="openType"
              class="bg-tertiary p-2.5 rounded-2xl w-11 h-11"
            >
              <img src="/icons/delete.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <button
        :class="[
          'px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide rounded-2xl self-end',
          !isTestCompleted
            ? 'bg-divider/50 text-inactive'
            : 'bg-brand text-white',
        ]"
        :disabled="!isTestCompleted"
      >
        Продолжить
      </button>
    </div>
  </div> -->
</template>

<script setup>
import { ref } from "vue";
import SortDragDrop from "./SortDragDrop.vue";

const stage = ref("start");
const openType = ref(true);
const timer = ref(60000);

const isTestCompleted = ref(false);
const startTest = () => {
  stage.value = "question";
};
</script>
