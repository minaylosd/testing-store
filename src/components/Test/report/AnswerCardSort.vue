<template>
  <div>
    <div class="flex flex-col gap-4 p-6 bg-white rounded-3xl">
      <h4 class="text-xl font-medium leading-6 font-wide text-txt">
        Респондент {{ props.answer.respondent }}
      </h4>
      <SortDropdown />
      <SortDropdown />
    </div>
  </div>
</template>

<script setup>
import SortDropdown from "@/components/Test/report/SortDropdown.vue";

const props = defineProps({
  answer: Object,
});
</script>
