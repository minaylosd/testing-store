<template>
  <button
    :disabled="props.maxTests || !props.isDeviceAdded"
    class="flex flex-col gap-2.5 rounded-2xl bg-tertiary py-3 px-4"
  >
    <div class="flex items-center justify-between w-full">
      <h4
        :class="{
          'text-greytxt': props.maxTests || !props.isDeviceAdded,
          'text-txt': !(props.maxTests || !props.isDeviceAdded),
        }"
        class="font-medium leading-6 text-17 font-wide"
      >
        Задание <span>{{ props.assignment.id }}</span>
      </h4>
      <span
        v-if="
          props.assignment.isCompleted &&
          !(props.maxTests || !props.isDeviceAdded)
        "
        class="px-1 py-0.5 text-xs font-medium leading-6 text-white rounded-md font-compact bg-positive"
        >Выполнено</span
      >
    </div>
    <p class="font-normal leading-6 text-greytxt text-17 font-text">
      Вопросов: <span>{{ props.assignment.questions }}</span>
    </p>
  </button>
</template>

<script setup>
const props = defineProps({
  assignment: Object,
  maxTests: Boolean,
  isDeviceAdded: Boolean,
});
</script>
