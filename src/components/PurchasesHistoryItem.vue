<template>
  <div
    class="grid items-start w-full gap-6 border-t grid-cols-purchases border-divider"
  >
    <div class="p-3 text-sm font-normal font-compact text-txt">
      {{ operation.id }}
    </div>

    <div class="flex flex-col gap-3 p-3">
      <div v-for="(item, i) in operation.items" :key="i">
        <div class="text-sm font-normal font-compact text-txt">
          {{ item.name }}
        </div>
        <div class="text-xs font-normal font-compact text-greytxt">
          {{ item.amount }} шт.<span
            class="uppercase"
            v-if="item.size !== false"
            >, {{ item.size }}</span
          >
        </div>
      </div>
    </div>

    <div class="p-3 text-sm font-normal font-compact text-txt">
      {{ operation.total }} ₿
    </div>

    <div class="p-3 text-sm font-normal font-compact text-txt">
      {{ operation.address }}
    </div>

    <div
      class="flex items-center gap-1 p-3 text-sm font-normal font-compact text-txt"
    >
      {{ formatDate(operation.date) }}
    </div>

    <div
      class="flex items-center gap-1.5 p-3 text-sm font-normal font-compact text-txt"
    >
      <div
        :class="{
          'w-1.5 h-1.5 rounded-full': true,
          'bg-positive': operation.status === 'Доставлено',
          'bg-accent': operation.status === 'Принято',
        }"
      ></div>
      {{ operation.status }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  operation: {
    type: Object,
    required: true,
  },
});

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
</script>
