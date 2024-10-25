<template>
  <div class="grid grid-cols-4 col-span-2 gap-6">
    <div v-for="(answer, index) in answers" :key="index">
      <AnswerCardImg
        v-if="type == 'img'"
        :answer="answer"
        :showOverlay="showOverlay"
      />
      <AnswerCardEmoji v-else-if="type == 'emoji'" :answer="answer" />
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
import ImageOverlay from "./ImageOverlay.vue";

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

const type = ref("img");
</script>
