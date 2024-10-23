<template>
  <main class="w-full bg-white mt-25">
    <div class="px-4 mx-auto md:px-20 max-w-none md:max-w-388 2xl:px-9">
      <section class="w-full mb-[44px] md:px-6 md:mb-[182px]">
        <router-link class="mb-6" to="/"
          ><button
            class="text-xs font-bold tracking-wider font-compact text-brand"
          >
            ← На главную
          </button></router-link
        >
        <div class="flex items-start justify-between w-full mb-3">
          <div class="flex items-center gap-6">
            <h1
              class="text-4xl font-medium text-black md:leading-none font-wide md:text-heading"
            >
              Вконтакте
            </h1>
            <div class="flex gap-[3px] items-end">
              <img src="/icons/ios-icon.svg" alt="" />
              <p class="text-xs font-normal font-compact">IOS</p>
            </div>
          </div>

          <div class="hidden md:block">
            <button
              v-if="isDeviceAdded && isUserProfileCompleted"
              class="py-[14px] px-6 text-17 leading-6 font-medium font-compact text-white rounded-lg bg-brand"
            >
              <span class="px-2">Перейти к заданиям</span>
            </button>
            <button
              v-else
              class="py-[14px] px-6 text-17 leading-6 font-medium font-compact text-white rounded-lg bg-brand"
            >
              <span class="px-2">Заполнить информацию о себе</span>
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-5 mb-6 md:items-center md:flex-row">
          <div
            class="flex items-center gap-2 text-xs font-normal font-compact text-active"
          >
            <svg class="text-active" height="12" width="12">
              <circle cx="6" cy="6" r="6" fill="currentColor" />
            </svg>

            <span>Активно</span>
          </div>

          <div class="flex flex-col gap-1 md:items-center md:flex-row">
            <p class="text-[#001424] text-17 leading-6 font-normal font-text">
              Дата тестирования:
            </p>
            <p class="text-xl font-medium leading-6 text-txt font-compact">
              с 22 мая по 30 июля 2020
            </p>
          </div>

          <div class="block md:hidden">
            <button
              v-if="isDeviceAdded && isUserProfileCompleted"
              class="py-[14px] w-full px-6 text-17 leading-6 font-medium font-compact text-white rounded-lg bg-brand"
            >
              <span class="px-2">Перейти к заданиям</span>
            </button>
            <button
              v-else
              class="py-[14px] px-6 text-17 leading-6 font-medium font-compact text-white rounded-lg bg-brand"
            >
              <span class="px-2">Заполнить информацию о себе</span>
            </button>
          </div>
        </div>

        <ChartCard :chartData="chartData" />

        <p class="mb-6 font-normal leading-6 text-txt text-17 font-text">
          Поиск людей по их увлечениям, месту и работе. Возможность создавать и
          вступатьв группы по интересам. МТС постоянно выпускает. Поиск людей по
          их увлечениям, месту и работе. Возможность создавать и вступать в
          группы по интересам.
        </p>
        <div class="flex gap-2.5 items-center mb-6">
          <img src="/icons/alpha.svg" alt="" />
          <p class="font-medium leading-6 text-brand text-17 font-compact">
            v. 1.02.8409
          </p>
        </div>
        <button
          class="py-[14px] px-6 text-17 leading-6 font-medium font-compact text-white rounded-lg bg-brand mb-2 md:mb-8 w-full md:w-auto"
        >
          <span class="px-2">Получить приложение</span>
        </button>
        <button
          class="py-[14px] px-6 text-17 leading-6 font-medium font-compact text-white rounded-lg bg-brand mb-8 w-full md:w-auto block md:hidden"
        >
          <span class="px-2">Перейти к заданиям</span>
        </button>

        <div class="mb-8 overflow-hidden rounded-3xl">
          <ProductSlider />
        </div>

        <div class="mb-16">
          <h3 class="mb-5 text-2xl font-medium leading-7 text-black font-wide">
            Правила проведения тестирования
          </h3>
          <p class="font-normal leading-6 text-txt text-17 font-text">
            Поиск людей по их увлечениям, месту и работе. Более 50 млн. треков.
            Доступ с любого устройства. Постоянное обновление каталога. Миллионы
            музыкальных. Поиск людей по их увлечениям, месту и работе. Более 50
            млн. треков. Доступ с любого устройства. Постоянное обновление
            каталога. Миллионы музыкальных. Поиск людей по их увлечениям, месту
            и работе. Более 50 млн. треков. Доступ с любого устройства.
            Постоянное обнов.
          </p>
        </div>
        <div class="relative">
          <div
            v-if="maxTests == true"
            class="absolute z-10 flex items-center justify-center font-normal leading-6 text-white -inset-6 backdrop-blur-sm bg-black/50 rounded-3xl font-text text-17"
          >
            <span class="text-center max-w-100"
              >Достигнуто максимальное количество тестировщиков для выполнения
              заданий</span
            >
          </div>
          <div
            class="flex flex-col justify-between gap-4 mb-8 md:items-center md:flex-row"
          >
            <h3 class="text-2xl font-medium leading-7 text-black font-wide">
              Задания
            </h3>
            <button
              class="py-[14px] px-6 text-17 leading-6 font-medium font-compact text-black rounded-lg bg-tertiary"
            >
              <span class="px-2">Отчет об ошибке</span>
            </button>
          </div>

          <div class="flex flex-col grid-cols-4 gap-6 md:grid">
            <AssignmentBtn
              v-for="(assignment, index) in assignments"
              :key="index"
              :assignment="assignment"
              :maxTests="maxTests"
              :isDeviceAdded="isDeviceAdded"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import ProductSlider from "../components/ProductSlider.vue";
import ChartCard from "../components/ChartCard.vue";
import AssignmentBtn from "../components/AssignmentBtn.vue";

const chartData = ref({
  labels: ["", "", "", ""],
  values: [18, 55, 90, 45],
});

const assignments = ref([
  {
    id: 243,
    questions: 4,
    isCompleted: true,
  },
  {
    id: 242,
    questions: 4,
    isCompleted: false,
  },
  {
    id: 241,
    questions: 4,
    isCompleted: false,
  },
  {
    id: 240,
    questions: 4,
    isCompleted: true,
  },
]);

const maxTests = ref(false);
const isDeviceAdded = ref(true);
const isUserProfileCompleted = ref(true);
</script>
