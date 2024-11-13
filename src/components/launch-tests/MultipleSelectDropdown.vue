<template>
  <div>
    <label class="block mb-1 text-sm font-normal font-compact text-greytxt"
      >Варианты ответов</label
    >
    <div
      @click.self="toggleDropdown"
      class="relative flex w-full items-center px-3 py-3.5 border rounded-2xl border-divider/50 bg-tertiary cursor-pointer"
    >
      <span
        class="flex w-full font-normal leading-6 font-compact text-17 text-greytxt bg-tertiary"
        >Выберите</span
      >
      <ChevronDown />

      <div
        v-if="isDropdownShown"
        ref="dropdownField"
        class="absolute z-10 left-0 w-full bg-white top-full translate-y-1 rounded-2xl p-1.5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.14),0px_4px_24px_0px_rgba(0,0,0,0.12)]"
      >
        <div
          v-for="(option, index) in props.options"
          :key="index"
          @click="setType(option.index)"
          class="relative w-full py-[14px] px-1.5 cursor-pointer flex items-center gap-3"
        >
          <img
            class="w-6 h-6 min-h-6 min-w-6"
            src="/icons/img-icon.svg"
            alt=""
          />
          <div
            class="flex items-center justify-between w-full gap-3 font-normal leading-6 font-compact text-17 text-txt"
          >
            <input
              type="checkbox"
              name="question"
              class="absolute inset-0 z-10 invisible w-full h-full cursor-pointer option"
              :id="'question-' + index"
            />
            <label
              class="flex items-center justify-between w-full gap-3 font-normal leading-6 font-compact text-17 text-txt"
              :for="'question-' + index"
            >
              {{ option }}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="chekmark-svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071L4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929C4.68342 9.90237 5.31658 9.90237 5.70711 10.2929L10 14.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z"
                  fill="currentColor"
                />
              </svg>
            </label>
          </div>
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
const dropdownOption = ref([]);

const dropdownField = ref(null);

const toggleDropdown = () => {
  isDropdownShown.value = !isDropdownShown.value;
};

function closeDropdown(e) {
  if (e.target != dropdownField.value) {
    isDropdownShown.value = false;
  }
}

function setType(value) {
  isSet.value = true;
  dropdownOption.value = [...dropdownOption.value, value];
}
</script>

<style scoped>
input + label .chekmark-svg path {
  color: "#f2f3f7";
}

input:checked + label .chekmark-svg path {
  color: #ff0032;
}
</style>
