<template>
  <OpenQuestionForm v-if="props.test == 'open'" />
  <ScaleForm v-else-if="props.test == 'scale'" />
  <AudioForm v-else-if="props.test == 'select'" />
  <PreferenceForm v-else-if="props.test == 'preference'" />
  <TimerForm v-else-if="props.test == 'timer'" />
  <SortForm v-else-if="props.test == 'sort'" />
  <FirstClickForm v-else-if="props.test == 'click'" />
  <PrototypeForm v-else-if="props.test == 'prototype'" />
</template>

<script setup>
import ScaleForm from "@/components/ScaleForm.vue";
import PreferenceForm from "@/components/PreferenceForm.vue";
import AudioForm from "@/components/AudioForm.vue";
import TimerForm from "@/components/TimerForm.vue";
import SortForm from "@/components/SortForm.vue";
import FirstClickForm from "@/components/FirstClickForm.vue";
import PrototypeForm from "@/components/PrototypeForm.vue";
import OpenQuestionForm from "@/components/OpenQuestionForm.vue";

const props = defineProps({
  test: String,
});
</script>
