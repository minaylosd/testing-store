<template>
  <main class="w-full pb-16 pt-25 bg-tertiary">
    <div class="px-4 mx-auto md:px-20 max-w-none md:max-w-388 2xl:px-9">
      <div class="grid justify-between grid-cols-2 gap-8">
        <h1 class="font-medium leading-7 text-black font-wide text-heading">
          Тест: Шкала
        </h1>
        <div class="flex justify-end gap-3">
          <span
            class="h-5 px-1 py-0.5 flex items-center justify-center text-xs font-medium leading-6 text-white rounded-md font-compact bg-positive"
            >Активный</span
          >

          <button class="p-1 bg-white rounded-lg">
            <img src="/icons/edit-icon.svg" alt="" />
          </button>

          <button class="p-1 bg-white rounded-lg">
            <img src="/icons/delete.svg" alt="" />
          </button>
        </div>

        <div class="flex gap-6">
          <div class="relative py-[14px] px-0.5">
            <p class="font-medium leading-6 text-17 text-txt font-compact">
              Модерация
            </p>
          </div>

          <div class="relative py-[14px] px-0.5">
            <p class="font-medium leading-6 text-17 text-txt font-compact">
              Аудитория
            </p>
          </div>

          <div class="relative py-[14px] px-0.5">
            <p class="font-medium leading-6 text-17 text-txt font-compact">
              Отчетность
            </p>
            <div
              class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"
            ></div>
          </div>
        </div>

        <button
          class="justify-self-end px-[51px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
        >
          Выгрузка
        </button>

        <div class="flex col-span-2 gap-4">
          <div
            @click="showReport"
            class="relative py-1.5 px-0.5 cursor-pointer"
          >
            <p class="text-sm font-medium text-txt font-compact">
              Сводный отчет
            </p>
            <div
              v-show="inView == 'report'"
              class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"
            ></div>
          </div>

          <div
            @click="showAnswers"
            class="relative py-1.5 px-0.5 cursor-pointer"
          >
            <p class="text-sm font-medium text-txt font-compact">Ответы</p>
            <div
              v-show="inView == 'answers'"
              class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"
            ></div>
          </div>
        </div>

        <SummaryReport v-if="inView == 'report'" />
        <AllAnswers v-else />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import SummaryReport from "../components/SummaryReport.vue";
import AllAnswers from "../components/AllAnswers.vue";

const inView = ref("report");

function showReport() {
  inView.value = "report";
}

function showAnswers() {
  inView.value = "answers";
}
</script>
