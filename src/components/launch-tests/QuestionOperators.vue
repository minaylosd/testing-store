<template>
  <div
    class="grid grid-cols-[29px_218px_284px_304px_143px] justify-between py-3 border-t border-divider/50"
  >
    <div
      :class="[
        'text-sm font-normal font-compact',
        checked ? 'text-positive' : 'text-greytxt',
      ]"
    >
      {{ props.index }}
    </div>
    <div class="text-sm font-normal font-compact text-txt">
      {{ props.question.txt }}
    </div>
    <div>
      <div v-if="props.question.type == 'scale'">
        <label
          class="block mb-1 font-normal leading-6 text-17 font-compact text-greytxt"
          >Если ответ на шкале</label
        >
        <div class="flex items-center gap-2">
          <label
            :class="[
              'rounded-2xl p-3.5 cursor-pointer',
              selectedSign === 'more' ? 'bg-brand' : 'bg-tertiary',
            ]"
            @click="selectSign('more')"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25 18L15.25 12L9.25 6"
                :stroke="selectedSign === 'more' ? 'white' : 'black'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="radio"
              name="sign"
              value="more"
              class="hidden"
              v-model="selectedSign"
            />
          </label>

          <label
            :class="[
              'rounded-2xl p-3.5 cursor-pointer',
              selectedSign === 'less' ? 'bg-brand' : 'bg-tertiary',
            ]"
            @click="selectSign('less')"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.25 18L9.25 12L15.25 6"
                :stroke="selectedSign === 'less' ? 'white' : 'black'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="radio"
              name="sign"
              value="less"
              class="hidden"
              v-model="selectedSign"
            />
          </label>

          <label
            :class="[
              'rounded-2xl p-3.5 cursor-pointer',
              selectedSign === 'equal' ? 'bg-brand' : 'bg-tertiary',
            ]"
            @click="selectSign('equal')"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 9H19.25M5.25 15H19.25"
                :stroke="selectedSign === 'equal' ? 'white' : 'black'"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="radio"
              name="sign"
              value="equal"
              class="hidden"
              v-model="selectedSign"
            />
          </label>
          <input
            type="number"
            id="num"
            placeholder="Число"
            class="block w-20 px-[16px] py-[13px] border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary"
            required
          />
        </div>
      </div>
      <div v-else-if="props.question.type == 'select'">
        <SingleSelectDropdown :options="props.question.options" />
      </div>
      <div v-else-if="props.question.type == 'preference'">
        <MultipleSelectDropdown :options="props.question.options" />
      </div>
    </div>
    <div class="flex flex-col h-full gap-2 pt-[30px]">
      <ActionDropdown
        :selectAction="selectAction"
        class="self-end w-full justify-self-start"
      />
      <SelectQuestionDropdown
        v-if="selectedAction && selectedAction != 2 && selectedAction != 3"
        :questions="props.allQuestions"
      />
    </div>
    <div class="flex items-start pt-[28px] justify-between h-full">
      <input
        type="checkbox"
        id="active"
        name="active"
        class="option custom-checkbox"
        v-model="checked"
      />
      <label for="active"></label>

      <button @click="setRuleToDelete(props.index)">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 11C10.5523 11 11 11.4477 11 12V16.0001C11 16.5523 10.5523 17.0001 10 17.0001C9.44772 17.0001 9 16.5523 9 16.0001V12C9 11.4477 9.44772 11 10 11Z"
            fill="#8D969F"
          />
          <path
            d="M14 11C14.5523 11 15 11.4477 15 12V16.0001C15 16.5523 14.5523 17.0001 14 17.0001C13.4477 17.0001 13 16.5523 13 16.0001V12C13 11.4477 13.4477 11 14 11Z"
            fill="#8D969F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H19.7446C19.7755 7.29056 19.8027 7.6038 19.8324 7.94594C19.9325 9.09866 20.0001 10.4509 20.0001 12.0003C20.0001 13.5503 19.9324 14.9028 19.8323 16.0557C19.6565 18.08 19.5687 19.0921 18.2749 20.3815C16.9811 21.6708 16.0109 21.7517 14.0704 21.9135C13.4213 21.9676 12.7272 22.0007 12 22.0007C11.2729 22.0007 10.5788 21.9676 9.92979 21.9135C7.98923 21.7517 7.01895 21.6708 5.72517 20.3815C4.43138 19.0921 4.3435 18.0799 4.16774 16.0556C4.06764 14.9027 4 13.5503 4 12.0003C4 10.451 4.06759 9.09891 4.16763 7.94624C4.19733 7.60398 4.22453 7.29064 4.25546 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H8C8 4.76953 8.01494 4.54404 8.03965 4.32869C8.12036 3.62545 8.16071 3.27383 8.63843 2.78438C9.11615 2.29493 9.52797 2.23751 10.3516 2.12269C10.8579 2.05211 11.4261 2 12 2C12.5739 2 13.1421 2.05211 13.6484 2.12269C14.472 2.23751 14.8838 2.29493 15.3616 2.78438C15.8393 3.27383 15.8796 3.62545 15.9603 4.32869C15.9851 4.54404 16 4.76953 16 5ZM12 4C11.542 4 11.0693 4.04199 10.6278 4.10354C10.411 4.13375 10.2732 4.15328 10.1584 4.17399C10.1225 4.18044 10.0944 4.1861 10.0725 4.19085C10.0595 4.27358 10.0472 4.377 10.0266 4.55672C10.0094 4.70641 10 4.85521 10 5H14C14 4.85521 13.9906 4.70641 13.9734 4.55672C13.9528 4.37699 13.9405 4.27358 13.9275 4.19085C13.9056 4.1861 13.8775 4.18044 13.8416 4.17399C13.7268 4.15328 13.589 4.13375 13.3722 4.10354C12.9307 4.04199 12.458 4 12 4ZM6.16014 8.11916C6.20038 7.65551 6.23346 7.29444 6.2684 7H17.7317C17.7666 7.2944 17.7997 7.65541 17.8399 8.11897C17.935 9.2147 18.0001 10.5091 18.0001 12.0003C18.0001 13.492 17.935 14.7868 17.8398 15.8827C17.7462 16.9613 17.6913 17.4843 17.5616 17.9051C17.4654 18.2172 17.3121 18.5174 16.8631 18.9648C16.4038 19.4226 16.1081 19.5711 15.82 19.6609C15.4265 19.7836 14.9411 19.834 13.9042 19.9204C13.3053 19.9704 12.6668 20.0007 12 20.0007C11.3333 20.0007 10.6948 19.9704 10.096 19.9204C9.05904 19.834 8.57355 19.7836 8.18008 19.6609C7.89199 19.5711 7.59628 19.4226 7.13696 18.9648C6.68796 18.5174 6.53468 18.2172 6.43846 17.905C6.30876 17.4842 6.25389 16.9612 6.16024 15.8826C6.06509 14.7867 6 13.492 6 12.0003C6 10.5092 6.06505 9.21485 6.16014 8.11916Z"
            fill="#8D969F"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ActionDropdown from "./ActionDropdown.vue";
import SelectQuestionDropdown from "./SelectQuestionDropdown.vue";
import SingleSelectDropdown from "./SingleSelectDropdown.vue";
import MultipleSelectDropdown from "./MultipleSelectDropdown.vue";

const props = defineProps({
  question: Object,
  index: Number,
  allQuestions: Array,
  setRuleToDelete: Function,
});

const selectedAction = ref(null);

const selectAction = (id) => {
  selectedAction.value = id;
};

const selectedSign = ref(null);
const checked = ref(false);

// Function to set the selected radio value
function selectSign(value) {
  selectedSign.value = value;
}
</script>

<style scoped>
/* Hide increment/decrement buttons in most browsers */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Hide increment/decrement buttons in Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

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
