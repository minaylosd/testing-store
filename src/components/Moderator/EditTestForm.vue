<template>
    <OpenQuestionForm v-if="props.testObj.type == 'open'" :testObj="props.testObj" />
    <ScaleForm v-else-if="props.testObj.type == 'scale'" :testObj="props.testObj" />
    <AudioForm v-else-if="props.testObj.type == 'select'" :testObj="props.testObj" />
    <PreferenceForm v-else-if="props.testObj.type == 'preference'" :testObj="props.testObj" />
    <TimerForm v-else-if="props.testObj.type == 'timer'" :testObj="props.testObj" />
    <SortForm v-else-if="props.testObj.type == 'sort'" :testObj="props.testObj" />
    <FirstClickForm v-else-if="props.testObj.type == 'click'" :testObj="props.testObj" />
    <PrototypeForm v-else-if="props.testObj.type == 'prototype'" :testObj="props.testObj" />
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
    testObj: Object,
  });
  </script>
  