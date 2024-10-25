<template>
  <main class="w-full pt-25 bg-tertiary">
    <div class="px-4 mx-auto md:px-20 max-w-none md:max-w-388 2xl:px-9">
      <section class="w-full mb-[44px] md:px-6 md:mb-[182px]">
        <h1
          class="mb-8 text-4xl font-medium text-black md:leading-none font-wide md:text-heading"
        >
          Запуск быстрых UX/UI тестов
        </h1>

        <div class="grid grid-cols-[1fr_2fr] gap-6">
          <TestOptions />
          <div class="flex flex-col gap-8">
            <ScaleForm v-if="currentTest == 'scale'" />
            <AudioForm v-else-if="currentTest == 'audio'" />
            <PreferenceForm v-else-if="currentTest == 'preference'" />

            <button
              class="max-w-[131px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
            >
              Добавить
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import TestOptions from "@/components/TestOptions.vue";
import ScaleForm from "@/components/ScaleForm.vue";
import PreferenceForm from "@/components/PreferenceForm.vue";
import AudioForm from "@/components/AudioForm.vue";
import { ref } from "vue";

const currentTest = ref("preference");
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
