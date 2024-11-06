<template>
  <div v-if="type == 'click'" class="grid grid-cols-3 col-span-2 gap-6">
    <div v-for="(answer, index) in answers" :key="index">
      <AnswerCardClick :answer="answer" />
    </div>
  </div>
  <div class="col-span-2" v-else-if="type == 'prototype'">
    <AnswerCardPrototype />
  </div>
  <div v-else class="grid grid-cols-4 col-span-2 gap-6">
    <div v-for="(answer, index) in answers" :key="index">
      <AnswerCardImg
        v-if="type == 'img'"
        :answer="answer"
        :showOverlay="showOverlay"
      />
      <AnswerCardEmoji v-else-if="type == 'emoji'" :answer="answer" />
      <AnswerCardSort v-else-if="type == 'sort'" :answer="answer" />
      <AnswerCardClick v-else-if="type == 'click'" :answer="answer" />
      <AnswerCard v-else :answer="answer" />
    </div>
    <ImageOverlay
      v-if="type == 'img' && overlayShown"
      :closeOverlay="closeOverlay"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AnswerCard from "./AnswerCard.vue";
import AnswerCardImg from "./AnswerCardImg.vue";
import AnswerCardEmoji from "./AnswerCardEmoji.vue";
import AnswerCardSort from "./AnswerCardSort.vue";
import AnswerCardClick from "./AnswerCardClick.vue";
import AnswerCardPrototype from "./AnswerCardPrototype.vue";
import ImageOverlay from "@/components/ImageOverlay.vue";

const answers = ref([
  { respondent: 1, value: "Ответ", imgSrc: "/test-img.jpg" },
  { respondent: 2, value: "Ответ", imgSrc: "/test-img.jpg" },
  { respondent: 3, value: "Ответ", imgSrc: "/test-img.jpg" },
]);

const overlayShown = ref(false);

const showOverlay = () => {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
  overlayShown.value = true;
};

const closeOverlay = () => {
  const body = document.querySelector("body");
  body.style.overflow = "auto";
  overlayShown.value = false;
};

const type = ref("prototype");
</script>
