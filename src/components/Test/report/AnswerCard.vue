<template>
  <div class="p-6 bg-white rounded-3xl">
    <h4 class="mb-4 text-xl font-medium leading-6 font-wide text-txt">
      Респондент {{ props.answer.respondent }}
    </h4>

    <div>
      <label
        :for="props.answer.respondent"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Ответ</label
      >
      <input
        type="text"
        :id="props.answer.respondent"
        :value="props.answer.value"
        disabled
        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  answer: Object,
});
</script>
