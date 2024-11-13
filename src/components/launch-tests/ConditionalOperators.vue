<template>
  <div
    @click.self="props.closeOperators"
    class="fixed inset-0 z-50 flex items-center justify-center bg-txt/40"
  >
    <div class="flex flex-col gap-6 p-6 bg-white rounded-4xl w-[1240px]">
      <h3 class="text-xl font-medium leading-6 text-txt font-wide">
        Настройка условных операторов
      </h3>

      <div
        class="flex flex-col w-full px-6 py-3 border rounded-2xl border-divider/50"
      >
        <div
          class="grid grid-cols-[29px_218px_284px_304px_143px] justify-between py-3"
        >
          <div class="text-sm font-medium font-compact text-txt">№</div>
          <div class="text-sm font-medium font-compact text-txt">Вопрос</div>
          <div class="text-sm font-medium font-compact text-txt">Условие</div>
          <div class="text-sm font-medium font-compact text-txt">Действие</div>
          <div class="text-sm font-medium font-compact text-txt">
            Активность
          </div>
        </div>
        <QuestionOperators
          v-for="(rule, index) in rules"
          :allQuestions="props.questions"
          :key="index"
          :index="index"
          :question="props.questions[rule.questionIndex]"
          :setRuleToDelete="setRuleToDelete"
        />
      </div>

      <div class="grid grid-cols-[280px_210px] gap-4">
        <SelectQuestionDropdown
          :selectQuestion="selectQuestion"
          :questions="props.questions"
        />
        <button
          @click="addRule"
          class="py-[18px] px-[22px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
        >
          Добавить правило
        </button>
      </div>

      <div class="flex gap-3">
        <button
          @click="props.closeOperators"
          class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary"
        >
          Отменить
        </button>
        <button
          class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
        >
          Сохранить
        </button>
      </div>
    </div>
    <DeleteRuleModal
      v-if="isRuleModalShown"
      :closeModal="closeRuleModal"
      :deleteRule="deleteRule"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import QuestionOperators from "./QuestionOperators.vue";
import SelectQuestionDropdown from "./SelectQuestionDropdown.vue";
import DeleteRuleModal from "./DeleteRuleModal.vue";

const isRuleModalShown = ref(false);

const showRuleModal = () => {
  isRuleModalShown.value = true;
};

const closeRuleModal = () => {
  isRuleModalShown.value = false;
};

const selectedQuestion = ref(null);
const newRule = ref(null);

const ruleToDelete = ref(null);

const setRuleToDelete = (value) => {
  ruleToDelete.value = value;
  showRuleModal();
};

const deleteRule = () => {
  rules.value = rules.value.filter(
    (rule, index) => index !== ruleToDelete.value
  );
  ruleToDelete.value = null;
  closeRuleModal();
};

const selectQuestion = (value) => {
  selectedQuestion.value = value;
  newRule.value = { type: props.questions[value].type, questionIndex: value };
  console.log(selectedQuestion.value);
  console.log(newRule.value);
};

const addRule = () => {
  if (selectedQuestion.value != null) {
    rules.value = [...rules.value, newRule.value];
    console.log(rules.value);
  }
};

const rules = ref([
  { type: "scale", questionIndex: 0 },
  { type: "scale", questionIndex: 0 },
  { type: "select", questionIndex: 1 },
  { type: "select", questionIndex: 1 },
  { type: "preference", questionIndex: 2 },
]);
const props = defineProps({
  closeOperators: Function,
  questions: Array,
});
</script>
