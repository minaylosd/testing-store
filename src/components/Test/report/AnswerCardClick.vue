<template>
  <div class="flex flex-col gap-4 p-6 bg-white rounded-3xl">
    <h4 class="text-xl font-medium leading-6 font-wide text-txt">
      Респондент {{ props.answer.respondent }}
    </h4>
    <img
      class="w-full h-auto object-cover outline-4 outline-white rounded-[4px]"
      src="/report-click.jpg"
      alt=""
    />
    <p class="font-medium leading-6 font-compact text-brand text-17">
      Область 1
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  answer: Object,
});
</script>
