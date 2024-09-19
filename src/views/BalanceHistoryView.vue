<template>
  <main class="w-full px-20 mx-auto 2xl:px-9 max-w-388 mt-25">
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
      class="flex flex-col w-full px-6 mb-[182px] py-3 border border-divider/50 rounded-2xl"
    >
      <BalanceHistoryHeader />

      <BalanceHistoryItem
        v-for="(operation, index) in operations"
        :key="index"
        :operation="operation"
      />
    </section>
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
