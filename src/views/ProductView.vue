<template>
  <main class="w-full mt-25">
    <div class="px-5 mx-auto md:px-20 max-w-[360px] md:max-w-388 2xl:px-9">
      <section class="w-full px-6 mb-[182px]">
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

        <div class="flex items-center gap-5 mb-6">
          <div
            class="flex items-center gap-2 text-xs font-normal font-compact text-active"
          >
            <svg class="text-active" height="12" width="12">
              <circle cx="6" cy="6" r="6" fill="currentColor" />
            </svg>

            <span>Активно</span>
          </div>

          <div class="flex items-center gap-1">
            <p class="text-[#001424] text-17 leading-6 font-normal font-text">
              Дата тестирования:
            </p>
            <p class="text-xl font-medium leading-6 text-txt font-compact">
              с 22 мая по 30 июля 2020
            </p>
          </div>
        </div>

        <div
          class="px-6 pt-4 pb-6 mb-6 rounded-3xl bg-tertiary grid gap-[5%] grid-cols-[50%_45%]"
        >
          <div class="w-full">
            <div class="flex items-center gap-2 mb-8">
              <p class="font-medium leading-6 text-black text-17 font-compact">
                Стоимость выполнения всех заданий: 570
              </p>
              <div class="w-6 h-6">
                <Coin />
              </div>
            </div>
            <div class="mb-3">
              <p
                class="mb-3 font-medium leading-6 text-black text-17 font-compact"
              >
                Файлы для загрузки
              </p>
              <div class="flex items-center gap-3">
                <button
                  class="py-[14px] px-6 text-17 leading-6 font-medium font-compact text-white rounded-lg bg-brand"
                >
                  <span class="px-2">Инструкция</span>
                </button>

                <button
                  class="py-[14px] px-6 text-17 leading-6 font-medium font-compact text-white rounded-lg bg-brand"
                >
                  <span class="px-2">Правила</span>
                </button>
              </div>
            </div>
            <div class="mb-3">
              <div class="py-[14px]">
                <div
                  class="relative flex w-full h-1 overflow-hidden rounded-sm bg-divider/50"
                >
                  <div
                    class="absolute left-0 top-0 h-1 w-[10%] bg-brand rounded-sm"
                  ></div>
                </div>
              </div>
              <p class="text-xs font-normal text-greytxt font-compact">
                Уже тестируют: 10/100
              </p>
              <p
                class="mb-3 font-medium leading-6 text-black text-17 font-compact"
              >
                Найдено ошибок: 4
              </p>
              <p
                class="font-normal leading-6 text-17 text-greytxt font-text max-w-100"
              >
                Критичность определяется командой портала после анализа итогов
                тестирования
              </p>
            </div>
          </div>
          <div class="w-full">
            <BarChart :data="chartData" />
          </div>
        </div>
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
          class="py-[14px] px-6 text-17 leading-6 font-medium font-compact text-white rounded-lg bg-brand mb-8"
        >
          <span class="px-2">Получить приложение</span>
        </button>

        <div class="mb-8 overflow-hidden rounded-3xl">
          <img src="/preview.jpg" alt="" />
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
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-2xl font-medium leading-7 text-black font-wide">
              Задания
            </h3>
            <button
              class="py-[14px] px-6 text-17 leading-6 font-medium font-compact text-black rounded-lg bg-tertiary"
            >
              <span class="px-2">Отчет об ошибке</span>
            </button>
          </div>

          <div class="grid grid-cols-4 gap-6">
            <button
              :disabled="maxTests || !isDeviceAdded"
              v-for="(assignment, index) in assignments"
              :key="index"
              class="flex flex-col gap-2.5 rounded-2xl bg-tertiary py-3 px-4"
            >
              <div class="flex items-center justify-between w-full">
                <h4
                  :class="{
                    'text-greytxt': maxTests || !isDeviceAdded,
                    'text-txt': !(maxTests || !isDeviceAdded),
                  }"
                  class="font-medium leading-6 text-17 font-wide"
                >
                  Задание <span>{{ assignment.id }}</span>
                </h4>
                <span
                  v-if="assignment.isCompleted && !(maxTests || !isDeviceAdded)"
                  class="px-1 py-0.5 text-xs font-medium leading-6 text-white rounded-md font-compact bg-positive"
                  >Выполнено</span
                >
              </div>
              <p class="font-normal leading-6 text-greytxt text-17 font-text">
                Вопросов: <span>{{ assignment.questions }}</span>
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Coin from "../components/icons/Coin.vue";
import BarChart from "../components/BarChart.vue";

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
