<template>
  <main class="w-full pb-16 pt-25 bg-tertiary">
    <div class="px-4 mx-auto md:px-20 max-w-none md:max-w-388 2xl:px-9">
      <QuestionScale v-if="currentTest == 'scale'" :useEmoji="useEmoji" />
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
import QuestionScale from "@/components/QuestionScale.vue";
import QuestionAudio from "@/components/QuestionAudio.vue";
import QuestionPreference from "@/components/QuestionPreference.vue";
import QuestionTimer from "@/components/QuestionTimer.vue";
import QuestionSort from "@/components/QuestionSort.vue";
import QuestionFirstClick from "@/components/QuestionFirstClick.vue";
import QuestionPrototype from "@/components/QuestionPrototype.vue";

const currentTest = ref("sort");
const useEmoji = ref(false);
</script>
