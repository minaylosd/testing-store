<template>
  <div>
    <label class="block mb-1 text-sm font-normal font-compact text-greytxt"
      >Вариант ответа</label
    >
    <div
      @click="toggleDropdown"
      class="relative flex w-25 items-center px-3 py-3.5 border rounded-2xl border-divider/50 bg-tertiary cursor-pointer"
    >
      <span
        class="flex w-full h-6 overflow-hidden font-normal leading-6 font-compact text-17 text-greytxt bg-tertiary"
        >{{ !isSet ? "Выберите" : dropdownOption }}</span
      >
      <ChevronDown />

      <div
        v-if="isDropdownShown"
        class="absolute z-10 left-0 w-full bg-white top-full translate-y-1 rounded-2xl p-1.5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.14),0px_4px_24px_0px_rgba(0,0,0,0.12)]"
      >
        <div
          v-for="(option, index) in props.options"
          :key="index"
          @click="setType(option)"
          class="w-full py-[14px] px-1.5 cursor-pointer"
        >
          <label
            class="font-normal leading-6 font-compact text-17 text-txt"
            :for="'option-' + index"
            >{{ option
            }}<input
              type="radio"
              name="option"
              class="hidden"
              :id="'option-' + index"
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
  options: Array,
});

const isSet = ref(false);
const isDropdownShown = ref(false);
const dropdownOption = ref("");

function toggleDropdown() {
  isDropdownShown.value = !isDropdownShown.value;
}

function setType(value) {
  isSet.value = true;
  dropdownOption.value = value;
}
</script>
