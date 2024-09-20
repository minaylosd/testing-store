<template>
  <main
    class="w-full px-5 md:px-20 mx-auto 2xl:px-9 max-w-[360px] md:max-w-388 mt-25">
    <BreadCrumbs pageName="История баланса" />
    <div class="flex items-center gap-4 mb-5 md:mb-8">
      <h1
        class="text-2xl font-medium leading-7 text-black md:leading-none font-wide md:text-heading">
        История баланса
      </h1>
      <div class="w-8 h-8 md:w-11 md:h-11">
        <Coin />
      </div>
    </div>
    <div class="w-full overflow-x-scroll">
      <section
        class="flex flex-col w-full px-6 md:mb-[182px] mb-16 py-3 border border-divider/50 rounded-2xl min-w-[500px]">
        <BalanceHistoryHeader />

        <BalanceHistoryItem
          v-for="(operation, index) in operations"
          :key="index"
          :operation="operation" />
      </section>
    </div>
  </main>
</template>

<script setup>
import BreadCrumbs from "../components/BreadCrumbs.vue";
import Coin from "../components/icons/Coin.vue";
import BalanceHistoryHeader from "../components/BalanceHistoryHeader.vue";
import BalanceHistoryItem from "../components/BalanceHistoryItem.vue";

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
</script>
