<template>
  <main class="w-full mt-25">
    <div class="px-5 mx-auto md:px-20 max-w-[360px] md:max-w-388 2xl:px-9">
      <BreadCrumbs pageName="История покупок" />
      <div class="flex items-center gap-4 mb-5 md:mb-8">
        <h1
          class="text-2xl font-medium leading-7 text-black md:leading-none font-wide md:text-heading">
          История покупок
        </h1>
      </div>
      <div class="w-full overflow-x-scroll">
        <section
          class="flex flex-col w-full px-6 mb-[182px] pt-3 pb-2 border mb- border-divider/50 rounded-2xl min-w-[968px]">
          <PurchasesHistoryHeader />

          <PurchasesHistoryItem
            v-for="(operation, index) in operations"
            :key="index"
            :operation="operation" />
        </section>
      </div>
    </div>
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
