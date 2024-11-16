<template>
  <div
    @click.self="props.closeModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-txt/40"
  >
    <div
      class="flex flex-col gap-6 px-5 pt-8 pb-5 bg-white rounded-4xl w-[398px]"
    >
      <h3 class="text-xl font-medium leading-6 text-center text-txt font-wide">
        Модерация
      </h3>

      <DropdownInput :label="'Статус'" :options="[]" />

      <div>
        <label
          for="commentary"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >Комментарий</label
        >
        <textarea
          type="text"
          id="commentary"
          placeholder="Укажите причину отказа в модерации"
          class="block w-full h-[150px] px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary"
          required
        ></textarea>
      </div>

      <div>
        <label
          for="reward"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >Вопрос</label
        >
        <input
          type="number"
          id="reward"
          placeholder="Укажите сумму вознаграждения в коинах"
          class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary"
          required
        />
      </div>

      <div class="flex gap-3">
        <button
          @click="props.closeModal"
          class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary"
        >
          Отменить
        </button>
        <button
          class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
        >
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import DropdownInput from "@/components/DropdownInput.vue";
const props = defineProps({
  closeModal: Function,
});
</script>
