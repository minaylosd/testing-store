<template>
  <form class="grid w-full grid-cols-2 p-6 bg-white gap-x-6 rounded-3xl">
    <h2 class="text-xl font-medium leading-6 text-black mb-9 font-wide">
      Сортировка карточек
    </h2>
    <div class="w-full">
      <div class="flex items-center justify-end gap-2 mb-4">
        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/copy-btn.svg" alt="" />
        </button>

        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/delete.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="flex flex-col col-span-2 mb-6">
      <div class="grid w-full grid-cols-3 gap-2 mb-6">
        <div class="flex flex-col gap-3">
          <div
            class="flex-col gap-1 h-[150px] justify-center items-center flex px-4 py-6 bg-[#f2f3f7] rounded-[20px] border border-divider/50"
          >
            <p
              class="flex flex-col font-normal leading-normal text-center text-txt text-17 font-compact"
            >
              Переместите файл сюда или
              <span
                class="text-[#0070e5] text-17 font-normal font-compact leading-normal"
              >
                загрузите вручную
              </span>
            </p>
            <p
              class="text-xs font-normal leading-none text-center text-greytxt font-compact"
            >
              Формат файла: JPG
            </p>
          </div>
          <div>
            <label
              for="question-1"
              class="block mb-1 text-sm font-normal font-compact text-greytxt"
              >Название изображения</label
            >
            <input
              type="text"
              id="question-1"
              value="Котенок"
              class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
              required
            />
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <div
            class="flex-col gap-1 h-[150px] justify-center items-center flex px-4 py-6 bg-[#f2f3f7] rounded-[20px] border border-divider/50"
          >
            <p
              class="flex flex-col font-normal leading-normal text-center text-txt text-17 font-compact"
            >
              Переместите файл сюда или
              <span
                class="text-[#0070e5] text-17 font-normal font-compact leading-normal"
              >
                загрузите вручную
              </span>
            </p>
            <p
              class="text-xs font-normal leading-none text-center text-greytxt font-compact"
            >
              Формат файла: JPG
            </p>
          </div>
          <div>
            <label
              for="question-2"
              class="block mb-1 text-sm font-normal font-compact text-greytxt"
              >Название изображения</label
            >
            <input
              type="text"
              id="question-2"
              value="Котенок"
              class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
              required
            />
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <div
            class="flex-col gap-1 h-[150px] justify-center items-center flex px-4 py-6 bg-[#f2f3f7] rounded-[20px] border border-divider/50"
          >
            <p
              class="flex flex-col font-normal leading-normal text-center text-txt text-17 font-compact"
            >
              Переместите файл сюда или
              <span
                class="text-[#0070e5] text-17 font-normal font-compact leading-normal"
              >
                загрузите вручную
              </span>
            </p>
            <p
              class="text-xs font-normal leading-none text-center text-greytxt font-compact"
            >
              Формат файла: JPG
            </p>
          </div>
          <div>
            <label
              for="question-3"
              class="block mb-1 text-sm font-normal font-compact text-greytxt"
              >Название изображения</label
            >
            <input
              type="text"
              id="question-3"
              value="Котенок"
              class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
              required
            />
          </div>
        </div>
      </div>
      <button
        class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary w-1/3"
      >
        Добавить карточку
      </button>
    </div>
    <div class="w-full">
      <label
        for="assignment"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Инструкция для респондента</label
      >
      <textarea
        type="text"
        id="assignment"
        placeholder="Напишите текст инструкции"
        class="block w-full h-25 px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-4"
        required
      ></textarea>
    </div>

    <div class="w-full">
      <input
        type="checkbox"
        id="required-question"
        checked
        class="option custom-checkbox"
      />
      <label
        for="required-question"
        class="flex items-center w-full gap-2 mt-6 mb-4 font-normal leading-6 font-compact text-17 text-txt"
        >Необязательный вопрос</label
      >

      <input
        type="checkbox"
        id="scramble-cards"
        checked
        class="option custom-checkbox"
      />
      <label
        for="scramble-cards"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
        >Перемешать карточки</label
      >

      <input
        type="checkbox"
        id="scramble-categories"
        checked
        class="option custom-checkbox"
      />
      <label
        for="scramble-categories"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
        >Перемешать категории</label
      >
    </div>

    <div class="w-full">
      <label class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Варианты ответа</label
      >

      <div
        @click="toggleDropdown"
        class="relative flex w-full items-center px-3 py-3.5 border rounded-2xl border-divider/50 bg-tertiary mb-4 cursor-pointer"
      >
        <span
          class="flex w-full font-normal leading-6 font-compact text-17 text-greytxt bg-tertiary"
          >{{ isOpenType ? "Открытая" : "Закрытая" }}</span
        >
        <ChevronDown />

        <div
          v-if="isDropdownShown"
          class="absolute left-0 w-full bg-white top-full translate-y-1 rounded-2xl p-1.5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.14),0px_4px_24px_0px_rgba(0,0,0,0.12)]"
        >
          <div
            @click="setType(true)"
            class="w-full py-[14px] px-1.5 cursor-pointer"
          >
            <label
              class="font-normal leading-6 font-compact text-17 text-txt"
              for="open"
              >Открытая<input type="radio" class="hidden" id="open"
            /></label>
          </div>

          <div
            @click="setType(false)"
            class="w-full py-[14px] px-1.5 cursor-pointer"
          >
            <label
              class="font-normal leading-6 font-compact text-17 text-txt"
              for="closed"
              >Закрытая <input type="radio" class="hidden" id="closed"
            /></label>
          </div>
        </div>
      </div>

      <label
        for="timer"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Время прохождения тестирования</label
      >
      <input
        type="time"
        id="timer"
        value="00:01:00"
        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
        required
      />

      <input
        type="checkbox"
        id="no-time-limit"
        checked
        class="option custom-checkbox"
      />
      <label
        for="no-time-limit"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
        >Без ограничений</label
      >
    </div>

    <div class="w-full">
      <label class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Выберите категории</label
      >

      <div
        @click="toggleCategoryDropdown"
        class="relative flex w-full items-center px-3 py-3.5 border rounded-2xl border-divider/50 bg-tertiary mb-4 cursor-pointer"
      >
        <span
          class="flex w-full font-normal leading-6 font-compact text-17 text-greytxt bg-tertiary"
          >Категории для сортировки</span
        >
        <ChevronDown />

        <div
          v-if="isCategoryDropdownShown"
          class="absolute left-0 w-full bg-white top-full translate-y-1 rounded-2xl p-1.5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.14),0px_4px_24px_0px_rgba(0,0,0,0.12)]"
        >
          <div
            @click="setType(true)"
            class="w-full py-[14px] px-1.5 cursor-pointer"
          >
            <label
              class="font-normal leading-6 font-compact text-17 text-txt"
              for="open"
              >Открытая<input type="radio" class="hidden" id="open"
            /></label>
          </div>

          <div
            @click="setType(false)"
            class="w-full py-[14px] px-1.5 cursor-pointer"
          >
            <label
              class="font-normal leading-6 font-compact text-17 text-txt"
              for="closed"
              >Закрытая <input type="radio" class="hidden" id="closed"
            /></label>
          </div>
        </div>
      </div>

      <input
        type="checkbox"
        id="respondent-comment"
        checked
        class="option custom-checkbox"
      />
      <label
        for="respondent-comment"
        class="flex items-center w-full gap-2 mt-6 mb-4 font-normal leading-6 font-compact text-17 text-txt"
        >Добавить поле "Комментарий" для респондентов</label
      >

      <input
        type="checkbox"
        id="comment-required"
        checked
        class="option custom-checkbox"
      />
      <label
        for="comment-required"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
        >Обязательный комментарий</label
      >

      <input
        type="checkbox"
        id="allow-comment"
        checked
        class="option custom-checkbox"
      />
      <label
        for="allow-comment"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
        >Разрешить респонденту комментировать ответ</label
      >
    </div>
  </form>
</template>

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
  background-repeat: no-repeat;
  display: inline-block;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
}

.custom-checkbox:checked + label::before {
  background-image: url("/icons/Checkbox-checked.svg");
}
</style>

<script setup>
import { ref } from "vue";
import ChevronDown from "@/components/icons/ChevronDown.vue";

const isDropdownShown = ref(false);
const isCategoryDropdownShown = ref(false);

function toggleDropdown() {
  isDropdownShown.value = !isDropdownShown.value;
}

function toggleCategoryDropdown() {
  isCategoryDropdownShown.value = !isCategoryDropdownShown.value;
}

function setType(value) {
  isOpenType.value = value;
}
</script>
