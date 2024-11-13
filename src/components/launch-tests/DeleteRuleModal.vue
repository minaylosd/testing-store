<template>
  <div
    @click.self="props.closeModal"
    class="fixed inset-0 z-[70] flex items-center justify-center bg-txt/40"
  >
    <div
      class="flex flex-col gap-6 px-5 pt-8 pb-5 bg-white rounded-4xl w-[600px]"
    >
      <h3 class="text-xl font-medium leading-6 text-center text-txt font-wide">
        Вы удаляете вопрос, связанный с правилом № 1
      </h3>

      <p class="font-normal leading-6 text-17 font-compact text-txt">
        Это правило будет удалено. Продолжить?
      </p>

      <div class="flex gap-3">
        <button
          @click="props.deleteRule"
          class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary"
        >
          Удалить
        </button>
        <button
          @click="props.closeModal"
          class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
        >
          Отменить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  closeModal: Function,
  deleteRule: Function,
});
</script>
