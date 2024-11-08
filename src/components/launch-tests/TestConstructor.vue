<template>
  <section class="w-full md:px-6">
    <h1
      class="mb-8 text-4xl font-medium text-black md:leading-none font-wide md:text-heading"
    >
      Запуск тестов
    </h1>

    <div class="grid grid-cols-[1fr_2fr] gap-6">
      <TestOptions />
      <div class="flex flex-col gap-8">
        <div
          v-if="tests.length > 0 && testsVisible"
          class="flex flex-col gap-8"
        >
          <TestForm v-for="(test, index) in tests" :test="test" :key="index" />
          <button
            @click="hideTests"
            class="max-w-[131px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide bg-white rounded-2xl text-txt"
          >
            Свернуть
          </button>
        </div>
        <form class="grid grid-cols-2 gap-6">
          <div
            v-for="(variant, index) in variants"
            @click="selectTest(variant.name)"
            :key="index"
            class="p-5 bg-white border border-solid rounded-3xl border-divider/50"
          >
            <input
              type="radio"
              :name="'test-variant'"
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
        </form>

        <button
          @click="addTest"
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
import TestForm from "./TestForm.vue";

const tests = ref([]);
const testsVisible = ref(false);
const currentTest = ref("open");
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

const addTest = (test) => {
  tests.value = [...tests.value, currentTest.value];
  testsVisible.value = true;
};

const hideTests = () => {
  testsVisible.value = false;
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
