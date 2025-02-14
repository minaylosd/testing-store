<template>
  <main class="w-full pb-16 min-h-lvh h-fit pt-25 bg-tertiary">
    <div class="px-4 mx-auto md:px-20 max-w-none md:max-w-388 2xl:px-9">
      <QuestionOpenQuestion v-if="currentTest == 'open'" />
      <QuestionScale v-else-if="currentTest == 'scale'" :useEmoji="useEmoji" />
      <QuestionAudio v-else-if="currentTest == 'audio'" />
      <QuestionPreference v-else-if="currentTest == 'preference'" />
      <QuestionTimer v-else-if="currentTest == 'timer'" />
      <QuestionSort v-else-if="currentTest == 'sort'" />
      <QuestionFirstClick v-else-if="currentTest == 'click'" />
      <QuestionPrototype v-else-if="currentTest == 'prototype'" />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import QuestionScale from "@/components/Question/QuestionScale.vue";
import QuestionAudio from "@/components/Question/QuestionAudio.vue";
import QuestionPreference from "@/components/Question/QuestionPreference.vue";
import QuestionTimer from "@/components/Question/QuestionTimer.vue";
import QuestionSort from "@/components/Question/QuestionSort.vue";
import QuestionFirstClick from "@/components/Question/QuestionFirstClick.vue";
import QuestionPrototype from "@/components/Question/QuestionPrototype.vue";
import QuestionOpenQuestion from "@/components/Question/QuestionOpenQuestion.vue";

const currentTest = ref("sort");
const useEmoji = ref(false);
</script>
