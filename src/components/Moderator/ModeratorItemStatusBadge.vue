<template>
  <span
    v-if="props.status == 'passed'"
    class="px-1 py-0.5 text-xs font-medium leading-6 text-white rounded-md font-compact bg-positive"
    >Модерация пройдена</span
  >
  <span
    v-else-if="props.status == 'inProgress'"
    class="px-1 py-0.5 text-xs font-medium leading-6 text-white rounded-md font-compact bg-badgeprogress"
    >Модерация не выполнена</span
  >
  <span
    v-else-if="props.status == 'failed'"
    class="px-1 py-0.5 text-xs font-medium leading-6 text-white rounded-md font-compact bg-brand"
    >Модерация не пройдена</span
  >
</template>

<script setup>
const props = defineProps({
  status: String,
});
</script>
