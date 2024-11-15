<template>
  <div v-if="!isActive" class="col-span-2">
    <h3 class="mb-4 text-xl font-medium leading-6 text-txt font-wide">
      Отчетность недоступна
    </h3>
    <p class="font-normal leading-6 font-compact text-17 text-greytxt">
      Отчетность по тестированию появится после публикации теста и прохождения
      его респондентами
    </p>
  </div>
  <div v-else class="grid grid-cols-2 col-span-2">
    <ReportQuestionSelector
      class="mb-6 max-w-1/2"
      :questions="questions"
      :selectQuestion="selectQuestion"
    />
    <div v-if="selectedQuestion" class="col-span-2">
      <div class="flex gap-4 mb-8">
        <div @click="showReport" class="relative py-1.5 px-0.5 cursor-pointer">
          <p class="text-sm font-medium text-txt font-compact">Сводный отчет</p>
          <div
            v-show="inView == 'report'"
            class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"
          ></div>
        </div>

        <div @click="showAnswers" class="relative py-1.5 px-0.5 cursor-pointer">
          <p class="text-sm font-medium text-txt font-compact">Ответы</p>
          <div
            v-show="inView == 'answers'"
            class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"
          ></div>
        </div>
      </div>

      <SummaryReport :question="selectedQuestion" v-if="inView == 'report'" />
      <AllAnswers :question="selectedQuestion" v-else />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import SummaryReport from "@/components/Test/report/SummaryReport.vue";
import AllAnswers from "@/components/Test/report/AllAnswers.vue";
import ReportQuestionSelector from "./ReportQuestionSelector.vue";

const selectedQuestion = ref(null);
const questions = [
  { txt: "Насколько вы любите свою работу?", type: "scale" },
  {
    txt: "Вы делаете перерывы на обед?",
    type: "select",
    options: ["Да", "Нет"],
  },
  {
    txt: "Что вы предпочитаете делать в перерыве на обед?",
    type: "preference",
    options: ["Option 1", "Option 2"],
  },
];

const isActive = ref(true);

const inView = ref("report");

function showReport() {
  inView.value = "report";
}

function showAnswers() {
  inView.value = "answers";
}

const selectQuestion = (id) => {
  selectedQuestion.value = questions[id];
  console.log(selectedQuestion.value);
};
</script>
