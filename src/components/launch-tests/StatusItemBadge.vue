<template>
  <span
    v-if="props.status == 'active'"
    class="px-1 py-0.5 text-xs font-medium leading-6 text-white rounded-md font-compact bg-positive"
    >Активный</span
  >
  <span
    v-else-if="props.status == 'moderation'"
    class="px-1 py-0.5 text-xs font-medium leading-6 text-white rounded-md font-compact bg-accent"
    >На модерации</span
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
