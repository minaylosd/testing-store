<template>
  <main class="w-full mx-auto max-w-388 mt-25">
    <BreadCrumbs pageName="История покупок" />
    <div class="flex items-center gap-4 mb-8">
      <h1 class="font-medium leading-none text-black font-wide text-heading">
        История покупок
      </h1>
    </div>
    <section
      class="flex flex-col w-full px-6 mb-[182px] pt-3 pb-2 border mb- border-divider/50 rounded-2xl"
    >
      <PurchasesHistoryHeader />

      <PurchasesHistoryItem
        v-for="(operation, index) in operations"
        :key="index"
        :operation="operation"
      />
    </section>
  </main>
</template>

<script setup>
import BreadCrumbs from "../components/BreadCrumbs.vue";
import PurchasesHistoryHeader from "../components/PurchasesHistoryHeader.vue";
import PurchasesHistoryItem from "../components/PurchasesHistoryItem.vue";

const operations = [
  {
    id: 1,
    items: [
      {
        name: "Промокод на подписку в MTS Music",
        amount: 1,
        size: false,
      },
    ],
    total: 570,
    address: "Россия, г.Москва, ул.Южная, д9",
    date: "2024-03-21",
    status: "Доставлено",
  },
  {
    id: 2,
    items: [
      {
        name: "Фирменная футболка МТС",
        amount: 1,
        size: "s",
      },
      {
        name: "Фирменная футболка МТС",
        amount: 1,
        size: "s",
      },
    ],
    total: 570,
    address: "Россия, г.Москва, ул.Южная, д9",
    date: "2024-03-21",
    status: "Принято",
  },
];
</script>
