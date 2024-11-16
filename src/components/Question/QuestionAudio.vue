<template>
  <form
    class="flex flex-col items-center w-full pt-6 px-6 pb-[202px] bg-white rounded-3xl"
  >
    <div class="flex items-center justify-between w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Вопрос 1
      </p>
      <span
        class="font-compact font-medium text-sm text-txt px-1.5 py-0.5 bg-tertiary rounded-lg"
        >1 из 1</span
      >
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-[130px]"></div>

    <div class="flex flex-col px-3 mb-8 w-100">
      <h1
        class="mb-8 text-xl font-medium leading-6 text-center text-txt font-wide"
      >
        Прослушайте аудио и выберите вариант развлечения
      </h1>

      <div class="flex items-center gap-3 mb-4">
        <img class="h-auto w-[314px] rounded-3xl" src="/audio-question.svg" />

        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/sound.svg" alt="" />
        </button>
      </div>

      <label class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Варианты ответа</label
      >

      <div
        @click="toggleDropdown"
        class="relative flex w-full items-center px-3 py-3.5 border rounded-2xl border-divider/50 bg-tertiary mb-4 cursor-pointer"
      >
        <span
          class="flex w-full font-normal leading-6 font-compact text-17 text-greytxt bg-tertiary"
          >{{
            isAnyChecked ? answers[selectedAnswer] : "Выберите вариант ответа"
          }}</span
        >
        <ChevronDown />

        <div
          v-if="isDropdownShown"
          class="absolute left-0 w-full bg-white top-full translate-y-1 rounded-2xl p-1.5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.14),0px_4px_24px_0px_rgba(0,0,0,0.12)]"
        >
          <div
            @click="updateRadio(index)"
            class="w-full py-[14px] px-1.5 cursor-pointer"
            v-for="(answer, index) in answers"
            :key="index"
          >
            <label
              class="font-normal leading-6 font-compact text-17 text-txt"
              :for="'answer-' + index"
              >{{ answer
              }}<input type="radio" class="hidden" :id="'answer-' + index"
            /></label>
          </div>
        </div>
      </div>

      <label
        for="other-answer"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Свой ответ</label
      >

      <input
        type="text"
        id="other-answer"
        placeholder="Кушать"
        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
      />
    </div>

    <button
      class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
    >
      Ответить
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import ChevronDown from "@/components/icons/ChevronDown.vue";

const isDropdownShown = ref(false);
const answers = ref(["Отдыхать", "Веселиться"]);

const isAnyChecked = ref(false);
const selectedAnswer = ref(null);

function toggleDropdown() {
  isDropdownShown.value = !isDropdownShown.value;
}

function updateRadio(answerId) {
  selectedAnswer.value = answerId;
  isAnyChecked.value = true;
}
</script>
