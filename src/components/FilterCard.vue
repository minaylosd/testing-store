<template>
  <div
    v-if="isMobile == false"
    class="px-5 pt-5 pb-2 bg-white border border-divider/50 rounded-3xl"
  >
    <h2
      class="mt-1 mb-2 font-medium leading-6 font-compact text-17 text-greytxt"
    >
      Тип товара
    </h2>

    <ul>
      <li>
        <input
          type="checkbox"
          id="option-one"
          checked
          class="option custom-checkbox"
        />
        <label
          for="option-one"
          class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
          >Мерч</label
        >
        <ul class="ml-4">
          <li>
            <input
              type="checkbox"
              id="subOption-one"
              class="subOption custom-checkbox"
            />
            <label
              for="subOption-one"
              class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
              >Red Square</label
            >
          </li>
          <li>
            <input
              type="checkbox"
              id="subOption-two"
              class="subOption custom-checkbox"
            />
            <label
              for="subOption-two"
              class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
              >TechWear 2.0</label
            >
          </li>
          <li>
            <input
              type="checkbox"
              id="subOption-three"
              class="subOption custom-checkbox"
            />
            <label
              for="subOption-three"
              class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
              >МТС</label
            >
          </li>
        </ul>
      </li>
      <li>
        <input
          type="checkbox"
          id="option-two"
          class="option custom-checkbox"
        /><label
          class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
          for="option-two"
          >Промокоды</label
        >
      </li>
    </ul>
  </div>
  <div v-else class="">
    <div
      @click="toggleModal"
      class="flex items-center justify-between px-3 py-[14px] bg-white border border-divider/50 rounded-3xl"
    >
      <p class="font-normal leading-6 font-compact text-17 text-txt">
        Тип товара
      </p>
      <ChevronDown />
    </div>

    <div
      v-if="isModalOpen == true"
      class="fixed inset-0 z-50 w-full h-full bg-txt/40"
    >
      <div
        class="absolute bottom-0 w-full bg-white rounded-t-[20px] pt-5 pb-[58px]"
      >
        <div class="relative flex items-center justify-between px-5 mb-5">
          <div
            class="absolute w-8 h-1 -translate-x-1/2 -top-7 left-1/2 bg-white/35 z-60"
          ></div>
          <h2 class="my-1 text-xl font-medium leading-6 font-wide text-txt">
            Тип товара
          </h2>
          <div @click="toggleModal" class="w-8 h-8"><CloseCross /></div>
        </div>
        <div class="px-[18px] mb-2 max-h-[220px] overflow-y-scroll">
          <ul>
            <li>
              <input
                type="checkbox"
                id="option-one"
                checked
                class="option custom-checkbox"
              />
              <label
                for="option-one"
                class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
                >Мерч</label
              >
              <ul class="ml-4">
                <li>
                  <input
                    type="checkbox"
                    id="subOption-one"
                    class="subOption custom-checkbox"
                  />
                  <label
                    for="subOption-one"
                    class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
                    >Red Square</label
                  >
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="subOption-two"
                    class="subOption custom-checkbox"
                  />
                  <label
                    for="subOption-two"
                    class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
                    >TechWear 2.0</label
                  >
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="subOption-three"
                    class="subOption custom-checkbox"
                  />
                  <label
                    for="subOption-three"
                    class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
                    >МТС</label
                  >
                </li>
              </ul>
            </li>
            <li>
              <input
                type="checkbox"
                id="option-two"
                class="option custom-checkbox"
              /><label
                class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
                for="option-two"
                >Промокоды</label
              >
            </li>
          </ul>
        </div>

        <div class="flex justify-center gap-3 mx-auto px-[12.5px]">
          <button
            class="flex items-center justify-center w-full py-[14px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary"
          >
            Сбросить
          </button>
          <button
            class="flex items-center justify-center w-full py-[14px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
          >
            Применить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import ChevronDown from "./icons/ChevronDown.vue";
import CloseCross from "./icons/CloseCross.vue";

const isModalOpen = ref(false);

const toggleModal = () => {
  if (isModalOpen.value == false) {
    isModalOpen.value = true;
  } else {
    isModalOpen.value = false;
  }
};

const isMobile = inject("isMobile");
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
  display: inline-block;
  width: 24px;
  height: 24px;
}

.custom-checkbox:checked + label::before {
  background-image: url("/icons/Checkbox-checked.svg");
}
</style>
