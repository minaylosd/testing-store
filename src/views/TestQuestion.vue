<template>
  <main class="w-full pb-16 pt-25 bg-tertiary">
    <div class="px-4 mx-auto md:px-20 max-w-none md:max-w-388 2xl:px-9">
      <QuestionScale v-if="currentTest == 'scale'" :useEmoji="useEmoji" />
      <QuestionAudio v-else-if="currentTest == 'audio'" />
      <QuestionPreference v-else-if="currentTest == 'preference'" />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import QuestionScale from "@/components/QuestionScale.vue";
import QuestionAudio from "@/components/QuestionAudio.vue";
import QuestionPreference from "@/components/QuestionPreference.vue";

const currentTest = ref("preference");
const useEmoji = ref(false);
</script>
