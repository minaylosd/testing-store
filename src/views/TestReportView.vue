<template>
  <main class="w-full pb-16 pt-25 bg-tertiary">
    <div class="px-4 mx-auto md:px-20 max-w-none md:max-w-388 2xl:px-9">
      <div class="grid justify-between grid-cols-2 gap-8">
        <h1 class="font-medium leading-7 text-black font-wide text-heading">
          Тест: Шкала
        </h1>
        <div class="flex justify-end gap-3">
          <span
            class="h-5 px-1 py-0.5 flex items-center justify-center text-xs font-medium leading-6 text-white rounded-md font-compact bg-positive"
            >Активный</span
          >

          <button class="p-1 bg-white rounded-lg">
            <img src="/icons/edit-icon.svg" alt="" />
          </button>

          <button class="p-1 bg-white rounded-lg">
            <img src="/icons/delete.svg" alt="" />
          </button>
        </div>

        <div class="flex gap-6">
          <div @click="showModeration" class="relative py-[14px] px-0.5">
            <p class="font-medium leading-6 text-17 text-txt font-compact">
              Модерация
            </p>
            <div
              v-show="inView == 'moderation'"
              class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"
            ></div>
          </div>

          <div @click="showAudience" class="relative py-[14px] px-0.5">
            <p class="font-medium leading-6 text-17 text-txt font-compact">
              Аудитория
            </p>
            <div
              v-show="inView == 'audience'"
              class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"
            ></div>
          </div>

          <div @click="showReport" class="relative py-[14px] px-0.5">
            <p class="font-medium leading-6 text-17 text-txt font-compact">
              Отчетность
            </p>
            <div
              v-show="inView == 'report'"
              class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"
            ></div>
          </div>
        </div>

        <button
          @click="showModal"
          class="justify-self-end px-[51px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
        >
          Выгрузка
        </button>

        <ModerationTab v-if="inView == 'moderation'" />
        <AudienceTab v-if="inView == 'audience'" />
        <ReportTab v-else-if="inView == 'report'" />
        <ExtractModal v-if="isModalShown" :closeModal="closeModal" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import ModerationTab from "@/components/Test/ModerationTab.vue";
import ReportTab from "@/components/Test/ReportTab.vue";
import AudienceTab from "@/components/Test/AudienceTab.vue";
import ExtractModal from "@/components/Test/ExtractModal.vue";

const inView = ref("audience");
const isModalShown = ref(false);

function showReport() {
  inView.value = "report";
}

function showAudience() {
  inView.value = "audience";
}

function showModeration() {
  inView.value = "moderation";
}

function showModal() {
  isModalShown.value = true;
}

function closeModal() {
  isModalShown.value = false;
}
</script>
