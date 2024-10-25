<template>
  <div class="p-6 bg-white rounded-3xl">
    <h4 class="mb-4 text-xl font-medium leading-6 font-wide text-txt">
      Респондент {{ props.answer.respondent }}
    </h4>

    <img class="w-8 h-auto" :src="props.answer.imgSrc" alt="" />
  </div>
</template>

<script setup>
const props = defineProps({
  answer: Object,
});
</script>
