<template>
  <main class="w-full min-h-full pb-16 pt-25 bg-tertiary grow">
    <div class="px-4 mx-auto max-w-none md:max-w-[1400px] md:px-9">
      <div v-if="!isConstructorOpened">
        <TestStatusList v-if="testList.length > 0" :list="testList" />
        <div v-else>
          <h1
            class="mb-8 font-medium leading-none text-black font-wide text-heading"
          >
            Запуск быстрых UX/UI тестов
          </h1>
          <div class="flex items-center justify-center h-full min-h-100">
            <div class="flex flex-col items-center w-100">
              <h3
                class="mb-1 text-xl font-medium leading-6 text-center text-txt font-wide"
              >
                У вас пока нет ни одного тестирования
              </h3>
              <p
                class="mb-4 font-normal leading-6 text-center font-compact text-17 text-greytxt"
              >
                Давайте создадим ваш первый тест
              </p>
              <button
                @click="openConstructor"
                class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
              >
                Создать
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <TestConstructor />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import TestConstructor from "@/components/launch-tests/TestConstructor.vue";
import TestStatusList from "@/components/launch-tests/TestStatusList.vue";

const isConstructorOpened = ref(false);

const openConstructor = () => {
  isConstructorOpened.value = true;
};

// const testList = ref([
//   {
//     name: "Открытый вопрос",
//     description: "Описание к тесту «Открытый вопрос»",
//     status: "active",
//   },
//   {
//     name: "Предпочтение",
//     description: "Описание к тесту «Предпочтение»",
//     status: "moderation",
//   },
//   { name: "Шкала", description: "Описание к тесту «Шкала»", status: "failed" },
// ]);
const testList = ref([

]);
</script>
