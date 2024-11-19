<template>
  <div>
    <div
      @click="toggleDropdown"
      class="relative flex w-full items-center px-3 py-[13px] border rounded-2xl border-divider/50 bg-tertiary cursor-pointer"
    >
      <span
        class="flex w-full font-normal leading-6 font-compact text-17 text-greytxt bg-tertiary"
        >{{ !isSet ? "Выберите действие" : options[dropdownOption].txt }}</span
      >
      <ChevronDown />

      <div
        v-if="isDropdownShown"
        class="absolute z-10 left-0 w-full bg-white top-full translate-y-1 rounded-2xl p-1.5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.14),0px_4px_24px_0px_rgba(0,0,0,0.12)]"
      >
        <div
          v-for="option in options"
          :key="option.id"
          @click="setType(option.id)"
          class="w-full py-[14px] px-1.5 cursor-pointer"
        >
          <label
            class="font-normal leading-6 font-compact text-17 text-txt"
            :for="'option-' + option.id"
            >{{ option.txt
            }}<input
              type="radio"
              name="option"
              class="hidden"
              :id="'option-' + option.id"
          /></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChevronDown from "@/components/icons/ChevronDown.vue";

const props = defineProps({
  selectAction: Function,
});

const options = [
  { id: 0, txt: "Показать скрытый вопрос" },
  { id: 1, txt: "Перейти к другому вопросу" },
  { id: 2, txt: "Завершить тестирование" },
  { id: 3, txt: "Обязательный комментарий" },
];

const isSet = ref(false);
const isDropdownShown = ref(false);
const dropdownOption = ref("");

function toggleDropdown() {
  isDropdownShown.value = !isDropdownShown.value;
}

function setType(value) {
  isSet.value = true;
  dropdownOption.value = value;
  props.selectAction(value);
}
</script>
