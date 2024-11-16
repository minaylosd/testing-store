<template>
  <ErrorTable v-if="!isActive" />
  <div class="max-w-[501px]" v-else>
    <h3 class="mb-4 text-xl font-medium leading-6 text-txt font-wide">
      Модерация успешно пройдена
    </h3>
    <p class="mb-6 font-normal leading-6 font-compact text-17 text-greytxt">
      Ваше тестирование активно, теперь вы можете пригласить в него респондентов
      или подобрать аудиторию
    </p>
    <div
      class="flex items-center max-w-[395px] gap-2 bg-white border rounded-2xl border-divider/50 px-3 py-2.5"
    >
      <input
        class="w-full font-normal leading-6 outline-none font-compact text-17 text-txt"
        type="text"
        value="https://design.mts.ru/ds/onbording/dizaineram"
        disabled
      />
      <img src="/icons/copy-link-icon.svg" alt="" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ErrorTable from "@/components/Test/ErrorTable.vue";

const isActive = ref(true);
</script>
