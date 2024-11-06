<template>
  <div class="flex flex-col gap-8">
    <h1 class="font-medium leading-none text-black font-wide text-heading">
      Тест: Открытый вопрос
    </h1>

    <div class="flex gap-4">
      <button
        class="flex items-center justify-center py-[18px] px-[22px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
      >
        Запустить
      </button>

      <button
        class="flex items-center justify-center py-[18px] px-[22px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-white"
      >
        Снять с модерации
      </button>

      <button
        class="flex items-center justify-center py-[18px] px-[22px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-white"
      >
        Превью
      </button>
    </div>

    <div class="flex flex-col px-6 py-3 bg-white rounded-3xl">
      <div class="grid items-center grid-cols-3 py-3">
        <div class="text-sm font-medium font-compact text-txt">Задания</div>
        <div class="text-sm font-medium font-compact text-txt">
          Число респондентов
        </div>
        <div class="text-sm font-medium font-compact text-txt">Статус</div>
      </div>
      <div
        class="grid items-center grid-cols-3 py-3 border-t border-divider/50"
      >
        <div class="text-sm font-normal font-compact text-txt">
          Ответить на вопрос
        </div>
        <div class="text-sm font-normal font-compact text-txt">0</div>
        <div class="flex items-center justify-between">
          <ModeratorItemStatusBadge :status="status" />

          <button
            @click="showModal"
            v-if="status == 'inProgress'"
            class="p-2 rounded-lg bg-tertiary"
          >
            <img class="w-4 h-4" src="/icons/edit-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>

    <ModerationModal v-if="isModalShown" :closeModal="closeModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModeratorItemStatusBadge from "./ModeratorItemStatusBadge.vue";
import ModerationModal from "./ModerationModal.vue";

const isModalShown = ref(false);
const status = ref("inProgress");

function showModal() {
  isModalShown.value = true;
}

function closeModal() {
  isModalShown.value = false;
}
</script>
