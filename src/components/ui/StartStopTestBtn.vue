<template>
  <button class="p-2 rounded-lg bg-tertiary">
    <img
      :src="props.status == 'passed' ? '/icons/stop-btn.svg' : '/icons/play-btn.svg'"
      alt=""
    />
  </button>
</template>

<script setup>
const props = defineProps({
  status: String
})
</script>
