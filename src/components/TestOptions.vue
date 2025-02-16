<template>
  <form class="flex flex-col w-full gap-6">
    <input type="text" id="name" placeholder="Название теста"
      class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-white"
      required />
    <textarea type="text" id="description" placeholder="Описание теста"
      class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-white"
      required></textarea>

    <div class="flex flex-col gap-4">
      <button @click="props.openOperators" :class="props.tests.length > 0
        ? 'bg-brand text-white'
        : 'bg-white text-inactive'
        "
        class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide rounded-2xl mb-[14px]">
        Настройка логики теста
      </button>

      <div class="flex gap-[14px]">
        <div class="min-w-6 min-h-6">
          <InfoIcon />
        </div>

        <span class="font-normal leading-6 font-compact text-17 text-greytxt">Настройка условий переходов между
          различными
          типами заданий во время тестирования, осуществляется после добавления всех заданий, участвующих в тестировании
        </span>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <button
        class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-inactive rounded-2xl bg-white mb-[14px]">
        Превью
      </button>

      <div class="flex gap-[14px]">
        <div class="min-w-6 min-h-6">
          <InfoIcon />
        </div>

        <span class="font-normal leading-6 font-compact text-17 text-greytxt">В режиме "Превью" ваши ответы не будут
          засчитаны
        </span>
      </div>
    </div>

    <button :class="[
      'px-[22px] py-[18px] text-xs w-full font-bold tracking-wider uppercase font-wide rounded-2xl self-end',
      !isFormFilled ? 'bg-divider/50 text-inactive' : 'bg-brand text-white',
    ]" :disabled="!isFormFilled">
      Опубликовать
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import InfoIcon from "../components/icons/InfoIcon.vue";

const props = defineProps({
  openOperators: Function,
  tests: Array,
});

const isFormFilled = ref(false);
</script>

<style scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.custom-checkbox+label::before {
  content: "";
  background-image: url("/icons/Checkbox-unchecked.svg");
  background-repeat: no-repeat;
  display: inline-block;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
}

.custom-checkbox:checked+label::before {
  background-image: url("/icons/Checkbox-checked.svg");
}
</style>
