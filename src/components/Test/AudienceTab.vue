<template>
  <div v-if="!isActive" class="max-w-[501px]">
    <h3 class="mb-4 text-xl font-medium leading-6 text-txt font-wide">
      Подбор аудитории недоступен
    </h3>
    <p class="font-normal leading-6 font-compact text-17 text-greytxt">
      Вы сможете подобрать аудиторию после прохождения модерации
    </p>
  </div>
  <div v-else class="grid grid-cols-2 col-span-2 gap-6">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-4 p-6 bg-white rounded-3xl">
        <h3 class="text-xl font-medium leading-6 text-txt font-wide">
          География
        </h3>
        <p class="font-normal leading-6 text-black font-compact text-17">
          Вы сможете подобрать аудиторию после прохождения модерации
        </p>
        <DropdownInput :label="'Регион или город'" :options="[]" />
      </div>
      <div class="flex flex-col gap-4 p-6 bg-white rounded-3xl">
        <h3 class="text-xl font-medium leading-6 text-txt font-wide">
          Демография
        </h3>
        <div>
          <label
            class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >
            Пол
          </label>
          <div class="grid grid-cols-3 gap-4">
            <label
              :class="[
                'flex flex-col items-center justify-center gap-1 text-sm font-normal border rounded-2xl h-30 font-compact cursor-pointer',
                selectedSex === 'both' ? 'border-brand' : 'border-divider/50',
              ]"
            >
              <img class="h-13 w-13" src="/icons/sex-both.svg" alt="" />
              Все
              <input
                type="radio"
                class="hidden"
                id="sex-both"
                name="sex"
                value="both"
                v-model="selectedSex"
              />
            </label>

            <label
              :class="[
                'flex flex-col items-center justify-center gap-1 text-sm font-normal border rounded-2xl h-30 font-compact cursor-pointer',
                selectedSex === 'female' ? 'border-brand' : 'border-divider/50',
              ]"
            >
              <img class="h-13 w-13" src="/icons/sex-female.svg" alt="" />
              Женщины
              <input
                type="radio"
                class="hidden"
                id="sex-female"
                name="sex"
                value="female"
                v-model="selectedSex"
              />
            </label>

            <label
              :class="[
                'flex flex-col items-center justify-center gap-1 text-sm font-normal border rounded-2xl h-30 font-compact cursor-pointer',
                selectedSex === 'male' ? 'border-brand' : 'border-divider/50',
              ]"
            >
              <img class="h-13 w-13" src="/icons/sex-male.svg" alt="" />
              Мужчины
              <input
                type="radio"
                class="hidden"
                id="sex-male"
                name="sex"
                value="male"
                v-model="selectedSex"
              />
            </label>
          </div>
        </div>

        <DropdownInput :label="'Возраст'" :options="[]" />
      </div>
    </div>

    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-4 p-6 bg-white rounded-3xl">
        <h3 class="text-xl font-medium leading-6 text-txt font-wide">
          Интересы
        </h3>
        <p class="font-normal leading-6 text-black font-compact text-17">
          Уточните портрет, поведение или намерения аудитории
        </p>
        <DropdownInput :label="'Вид деятельности'" :options="[]" />
        <DropdownInput :label="'Интересы'" :options="[]" />
        <DropdownInput :label="'Доход в рублях'" :options="[]" />
        <DropdownInput :label="'Возраст детей'" :options="[]" />
        <DropdownInput :label="'Домашние животные'" :options="[]" />
        <DropdownInput :label="'Наличие автомобиля'" :options="[]" />
      </div>
      <button
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand self-end"
      >
        Запустить
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DropdownInput from "@/components/DropdownInput.vue";

const isActive = ref(true);
const selectedSex = ref(null);
</script>
