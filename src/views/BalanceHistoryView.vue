<template>
  <main class="w-full mx-auto max-w-388 mt-25">
    <BreadCrumbs pageName="История баланса" />
    <div class="flex items-center gap-4 mb-8">
      <h1 class="font-medium leading-none text-black font-wide text-heading">
        История баланса
      </h1>
      <div class="w-11 h-11">
        <Coin />
      </div>
    </div>
    <section
      class="flex flex-col w-full px-6 mb-[182px] py-3 border mb- border-divider/50 rounded-2xl"
    >
      <div class="grid w-full grid-cols-12 gap-8 p-3">
        <div
          class="flex items-center col-span-3 gap-1 text-sm font-medium font-compact text-txt"
        >
          Тип операции<img src="/icons/filter-icon.svg" alt="" />
        </div>

        <div
          class="flex items-center gap-1 text-sm font-medium font-compact text-txt"
        >
          Дата<img src="/icons/date-icon.svg" alt="" />
        </div>

        <div class="col-start-7 text-sm font-medium font-compact text-txt">
          Описание
        </div>
      </div>

      <div
        v-for="(operation, index) in operations"
        :key="index"
        class="grid w-full grid-cols-12 gap-8 p-3 border-t border-divider"
      >
        <div
          class="flex items-center col-span-3 gap-1 text-sm font-normal font-compact text-txt"
        >
          {{
            operation.type === "replenishment"
              ? `+${operation.amount}`
              : operation.amount
          }}
        </div>
        <div
          class="flex items-center gap-1 text-sm font-normal font-compact text-txt"
        >
          {{ formatDate(operation.date) }}
        </div>
        <div class="col-start-7 text-sm font-normal font-compact text-txt">
          {{ operation.description }}
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import BreadCrumbs from "../components/BreadCrumbs.vue";
import Coin from "../components/icons/Coin.vue";

const operations = [
  {
    type: "withdrawal",
    amount: -10,
    date: "2024-03-21",
    description: "Description",
  },
  {
    type: "replenishment",
    amount: 570,
    date: "2024-03-21",
    description: "Description",
  },
  {
    type: "replenishment",
    amount: 270,
    date: "2024-03-21",
    description: "Description",
  },
  {
    type: "replenishment",
    amount: 1000,
    date: "2024-03-21",
    description: "Description",
  },
];

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
</script>
