<template>
  <main class="w-full pb-16 pt-25 bg-tertiary">
    <div class="px-4 mx-auto md:px-20 max-w-none md:max-w-388 2xl:px-9">
      <QuestionScale v-if="currentTest == 'scale'" :useEmoji="useEmoji" />
      <QuestionAudio v-else />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import QuestionScale from "@/components/QuestionScale.vue";
import QuestionAudio from "@/components/QuestionAudio.vue";

const currentTest = ref("scale");
const useEmoji = ref(false);
</script>
