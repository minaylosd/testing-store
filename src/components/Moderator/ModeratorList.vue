<template>
  <div>
    <h1 class="mb-8 font-medium leading-none text-black font-wide text-heading">
      Кабинет модератора
    </h1>
    <div class="flex flex-col px-6 py-3 bg-white rounded-3xl">
      <div class="grid grid-cols-[2fr_2fr_2fr_3fr_3fr] items-center py-3">
        <div class="text-sm font-medium font-compact text-txt">Название</div>
        <div class="text-sm font-medium font-compact text-txt">Автор</div>
        <div class="text-sm font-medium font-compact text-txt">
          Дата создания
        </div>
        <div class="text-sm font-medium font-compact text-txt">Статус</div>
        <div class="text-sm font-medium font-compact text-txt">
          Последнее обновление
        </div>
      </div>

      <ModeratorListItem
        v-for="(item, index) in testList"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModeratorListItem from "./ModeratorListItem.vue";

const testList = ref([
  {
    name: "Открытый вопрос",
    author: "Константин",
    creationDate: "04.10.2024",
    lastUpdateDate: "04.10.2024",
    status: "passed",
  },
  {
    name: "Выбор",
    author: "Константин",
    creationDate: "04.10.2024",
    lastUpdateDate: "04.10.2024",
    status: "inProgress",
  },
  {
    name: "Шкала",
    author: "Константин",
    creationDate: "04.10.2024",
    lastUpdateDate: "04.10.2024",
    status: "failed",
  },
  {
    name: "Открытый вопрос",
    author: "Константин",
    creationDate: "04.10.2024",
    lastUpdateDate: "04.10.2024",
    status: "failed",
  },
]);
</script>
