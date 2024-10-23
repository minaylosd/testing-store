<template>
  <form class="w-full">
    <input
      type="text"
      id="name"
      placeholder="Название теста"
      class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-white mb-4"
      required
    />
    <textarea
      type="text"
      id="description"
      placeholder="Описание теста"
      class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-white mb-4"
      required
    ></textarea>
    <label
      for="dates"
      class="block mb-1 text-sm font-normal font-compact text-greytxt"
      >Период тестирования</label
    >
    <input
      type="date"
      id="dates"
      class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-white mb-2"
      required
    />
    <input
      type="checkbox"
      id="date-indefinitely"
      class="option custom-checkbox"
    />
    <label
      for="date-indefinitely"
      class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
      >Бессрочно</label
    >
    <div class="flex gap-2 mb-4">
      <div class="min-w-6 min-h-6">
        <InfoIcon />
      </div>

      <span class="font-normal leading-6 font-compact text-17 text-greytxt"
        >Необходимое количество респондентов для завершения теста</span
      >
    </div>
    <input
      type="number"
      id="respondents"
      placeholder="Укажите количество респондентов"
      class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-white mb-2"
      required
    />
    <input
      type="checkbox"
      id="respondents-limitless"
      class="option custom-checkbox"
    />
    <label
      for="respondents-limitless"
      class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
      >Без ограничений</label
    >
    <input
      type="number"
      id="reward"
      placeholder="Укажите значение вознаграждения"
      class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-white mb-6"
      required
    />

    <div class="mb-6">
      <p class="mb-2 text-sm font-medium text-black font-compact">
        Вознаграждение
      </p>
      <div class="flex items-center gap-2">
        <p class="font-medium leading-6 text-black text-17 font-compact">570</p>
        <div class="w-6 h-6"><Coin /></div>
      </div>
    </div>

    <div class="flex gap-2 mb-4">
      <div class="min-w-6 min-h-6">
        <InfoIcon />
      </div>

      <span class="font-normal leading-6 font-compact text-17 text-greytxt"
        >В режиме "Превью" ваши ответы не будут засчитаны
      </span>
    </div>

    <button
      class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-tertiary rounded-2xl bg-white mb-[14px]"
    >
      Превью
    </button>

    <button
      class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
    >
      Отправить на модерацию
    </button>
  </form>
</template>

<script setup>
import InfoIcon from "../components/icons/InfoIcon.vue";
import Coin from "../components/icons/Coin.vue";
</script>

<style scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}
.custom-checkbox + label::before {
  content: "";
  background-image: url("/icons/Checkbox-unchecked.svg");
  display: inline-block;
  width: 24px;
  height: 24px;
}

.custom-checkbox:checked + label::before {
  background-image: url("/icons/Checkbox-checked.svg");
}
</style>
