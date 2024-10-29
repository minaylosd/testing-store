<template>
  <div class="grid w-full grid-cols-2 gap-6 p-6 bg-white rounded-3xl">
    <div class="w-full">
      <h2 class="text-xl font-medium leading-6 text-black mb-9 font-wide">
        Выбор
      </h2>
      <div class="flex flex-col w-full h-full gap-1">
        <div
          class="flex-col gap-1 h-[264px] justify-center items-center flex px-4 py-6 bg-[#f2f3f7] rounded-[20px] border border-divider/50"
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
            Формат файла: JPG, GIF, MP3, MP4
          </p>
        </div>
        <p class="text-xs font-normal leading-none text-greytxt font-compact">
          GIF, MP3, MP4 длительностью до 1 минуты и весом не более 50мб. Для
          изображений вес до 5 МБ и разрешением 16000x16000
        </p>
      </div>
    </div>

    <div class="w-full">
      <div class="flex items-center justify-end gap-2 mb-4">
        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/copy-btn.svg" alt="" />
        </button>

        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/delete.svg" alt="" />
        </button>
      </div>

      <form>
        <label
          for="instruction"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >Инструкция для респондента</label
        >
        <textarea
          type="text"
          id="instruction"
          placeholder="Напишите текст инструкции"
          class="block w-full h-29 px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-6"
          required
        ></textarea>

        <label
          for="question"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >Вопрос</label
        >
        <input
          type="text"
          id="question"
          value="Что вы любите больше?"
          class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
          required
        />

        <input
          type="checkbox"
          id="required-question"
          checked
          class="option custom-checkbox"
        />

        <label
          for="required-question"
          class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
          >Необязательный вопрос</label
        >

        <label class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >Таймер</label
        >

        <div
          @click="toggleDropdown"
          class="relative flex w-full items-center px-3 py-3.5 border rounded-2xl border-divider/50 bg-tertiary mb-4 cursor-pointer"
        >
          <span
            class="flex w-full font-normal leading-6 font-compact text-17 text-greytxt bg-tertiary"
            >{{ timers[selectedTimer] }} секунд</span
          >
          <ChevronDown />

          <div
            v-if="isDropdownShown"
            class="absolute left-0 w-full bg-white top-full translate-y-1 rounded-2xl p-1.5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.14),0px_4px_24px_0px_rgba(0,0,0,0.12)]"
          >
            <div
              @click="updateRadio(index)"
              class="w-full py-[14px] px-1.5 cursor-pointer"
              v-for="(timer, index) in timers"
              :key="index"
            >
              <label
                class="font-normal leading-6 font-compact text-17 text-txt"
                :for="'timer-' + index"
                >{{ timer }} секунд<input
                  type="radio"
                  class="hidden"
                  :id="'timer-' + index"
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
          class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
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
      </form>
    </div>
  </div>
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
const timers = ref([5, 10, 30]);

const selectedTimer = ref(0);

function toggleDropdown() {
  isDropdownShown.value = !isDropdownShown.value;
}

function updateRadio(timerId) {
  selectedTimer.value = timerId;
}
</script>
