<template>
  <main class="w-full pt-25 bg-tertiary">
    <div class="px-4 mx-auto md:px-20 max-w-none md:max-w-388 2xl:px-9">
      <section class="w-full md:px-6">
        <h1
          class="mb-8 text-4xl font-medium text-black md:leading-none font-wide md:text-heading"
        >
          Запуск быстрых UX/UI тестов
        </h1>

        <div class="grid grid-cols-[1fr_2fr] gap-6">
          <TestOptions />
          <div class="flex flex-col gap-8">
            <OpenQuestionForm v-if="currentTest == 'open'" />
            <ScaleForm v-if="currentTest == 'scale'" />
            <AudioForm v-else-if="currentTest == 'audio'" />
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
    </div>
  </main>
</template>

<script setup>
import TestOptions from "@/components/TestOptions.vue";
import ScaleForm from "@/components/ScaleForm.vue";
import PreferenceForm from "@/components/PreferenceForm.vue";
import AudioForm from "@/components/AudioForm.vue";
import TimerForm from "@/components/TimerForm.vue";
import SortForm from "@/components/SortForm.vue";
import FirstClickForm from "@/components/FirstClickForm.vue";
import PrototypeForm from "@/components/PrototypeForm.vue";
import OpenQuestionForm from "@/components/OpenQuestionForm.vue";
import { ref } from "vue";

const currentTest = ref("audio");
</script>
