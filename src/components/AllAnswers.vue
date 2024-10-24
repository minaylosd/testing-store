<template>
  <div class="grid grid-cols-4 col-span-2 gap-6">
    <div
      v-for="(answer, index) in answers"
      :key="index"
      class="p-6 bg-white rounded-3xl"
    >
      <h4 class="mb-4 text-xl font-medium leading-6 font-wide text-txt">
        Респондент {{ index + 1 }}
      </h4>

      <div v-if="!useEmoji">
        <label
          for="respondent-answer"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >Ответ</label
        >
        <input
          type="text"
          id="respondent-answer"
          :value="answer"
          disabled
          class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
        />
      </div>

      <img v-else :src="'/icons/' + answer + '.svg'" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const answers = ref([0, 1, 2, 3, 4, 5, 6, 7, 8]);
const useEmoji = ref(true);
</script>
