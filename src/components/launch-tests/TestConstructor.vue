<template>
  <section class="w-full md:px-6">
    <h1
      class="mb-8 text-4xl font-medium text-black md:leading-none font-wide md:text-heading"
    >
      Запуск тестов
    </h1>

    <div class="grid grid-cols-[1fr_2fr] gap-6">
      <TestOptions />
      <div v-if="!currentTest">
        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="(variant, index) in variants"
            @click="selectTest(variant.name)"
            :key="index"
            class="p-5 bg-white border border-solid rounded-3xl border-divider/50"
          >
            <input
              type="checkbox"
              :id="'variant-' + index"
              class="option custom-checkbox"
            />
            <label
              :for="'variant-' + index"
              class="flex items-center w-full gap-2 mb-2.5 font-normal leading-6 font-compact text-17 text-txt"
              >{{ variant.heading }}</label
            >
            <p
              class="ml-8 font-normal leading-6 font-text text-17 text-greytxt"
            >
              {{ variant.text }}
            </p>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col gap-8">
        <OpenQuestionForm v-if="currentTest == 'open'" />
        <ScaleForm v-else-if="currentTest == 'scale'" />
        <AudioForm v-else-if="currentTest == 'select'" />
        <PreferenceForm v-else-if="currentTest == 'preference'" />
        <TimerForm v-else-if="currentTest == 'timer'" />
        <SortForm v-else-if="currentTest == 'sort'" />
        <FirstClickForm v-else-if="currentTest == 'click'" />
        <PrototypeForm v-else-if="currentTest == 'prototype'" />

        <button
          class="max-w-[131px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
        >
          Добавить
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import TestOptions from "@/components/TestOptions.vue";
import ScaleForm from "@/components/ScaleForm.vue";
import PreferenceForm from "@/components/PreferenceForm.vue";
import AudioForm from "@/components/AudioForm.vue";
import TimerForm from "@/components/TimerForm.vue";
import SortForm from "@/components/SortForm.vue";
import FirstClickForm from "@/components/FirstClickForm.vue";
import PrototypeForm from "@/components/PrototypeForm.vue";
import OpenQuestionForm from "@/components/OpenQuestionForm.vue";

const currentTest = ref(null);
const variants = ref([
  {
    name: "open",
    heading: "Открытый вопрос",
    text: "Текстовые ответы на ваши вопросы",
  },
  {
    name: "scale",
    heading: "Шкала",
    text: "Ответы по шкале",
  },
  {
    name: "select",
    heading: "Выбор",
    text: "Вопросы с несколькими вариантами ответов",
  },
  {
    name: "timer",
    heading: "Пять секунд",
    text: "Покажите свой продукт и спросите, что запомнилось",
  },
  {
    name: "preference",
    heading: "Предпочтение",
    text: "Сравните 2 или более объектов",
  },
  {
    name: "sort",
    heading: "Сортировка карточек",
    text: "Посмотрите как пользователи группируют контент",
  },
  {
    name: "click",
    heading: "Первый клик",
    text: "Узнайте поведение пользователей",
  },
  {
    name: "prototype",
    heading: "Прототип Figma",
    text: "Протестируйте ваш прототип",
  },
]);

const selectTest = (test) => {
  currentTest.value = test;
};
</script>

<style scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}
.custom-checkbox + label::before {
  content: "";
  background-image: url("/icons/Checkbox-unchecked.svg");
  background-repeat: no-repeat;
  display: inline-block;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
}

.custom-checkbox:checked + label::before {
  background-image: url("/icons/Checkbox-checked.svg");
}
</style>
