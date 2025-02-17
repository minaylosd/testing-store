<template>
  <form class="grid w-full grid-cols-2 px-6 pt-5 pb-6 bg-white gap-x-6 rounded-3xl">
    <div class="flex justify-between col-span-2 mb-4">
      <h2 class="text-xl font-medium leading-6 text-black font-wide">
        Сортировка
      </h2>

      <div class="flex items-center justify-end gap-2">
        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/copy-btn.svg" alt="" />
        </button>

        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/delete.svg" alt="" />
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div>
        <label for="assignment" class="block mb-1 text-sm font-normal font-compact text-greytxt">
          Инструкция для респондента
        </label>
        <textarea type="text" id="assignment" placeholder="Напишите текст инструкции"
          class="block w-full h-25 px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-txt bg-tertiary"
          required>
        </textarea>
      </div>

      <div>
        <label class="block mb-1 text-sm font-normal font-compact text-greytxt">Тип сортировки</label>
        <div @click="toggleDropdown"
          class="relative flex w-full items-center px-3 py-3.5 border rounded-2xl border-divider/50 bg-tertiary cursor-pointer">
          <span class="flex w-full font-normal leading-6 font-compact text-17 text-greytxt bg-tertiary">
            {{ isOpenType ?
            "Открытая" : "Закрытая" }}
          </span>

          <ChevronDown />

          <div v-if="isDropdownShown"
            class="absolute left-0 z-20 w-full bg-white top-full translate-y-1 rounded-2xl p-1.5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.14),0px_4px_24px_0px_rgba(0,0,0,0.12)]">
            <div @click="setType(true)" class="w-full py-[14px] px-1.5 cursor-pointer">
              <label class="font-normal leading-6 font-compact text-17 text-txt" for="open">
                Открытая
                <input type="radio"
                  class="hidden" id="open" />
              </label>
            </div>

            <div @click="setType(false)" class="w-full py-[14px] px-1.5 cursor-pointer">
              <label class="font-normal leading-6 font-compact text-17 text-txt" for="closed">
                Закрытая
                <input
                  type="radio" class="hidden" id="closed" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <TimerSlideInput />
    </div>

    <div class="w-full">
      <input type="checkbox" id="required-question" checked class="option custom-checkbox" />
      <label for="required-question"
        class="flex items-center w-full gap-2 mt-6 mb-4 font-normal leading-6 font-compact text-17 text-txt">Необязательный
        вопрос</label>

      <input type="checkbox" id="scramble-cards" checked class="option custom-checkbox" />
      <label for="scramble-cards"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt">Перемешать
        карточки</label>

      <input type="checkbox" id="scramble-categories" checked class="option custom-checkbox" />
      <label for="scramble-categories"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt">Перемешать
        категории</label>

      <input type="checkbox" id="respondent-comment" checked class="option custom-checkbox" />
      <label for="respondent-comment"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt">Добавить
        поле "Комментарий" для респондентов</label>

      <input type="checkbox" id="comment-required" checked class="option custom-checkbox" />
      <label for="comment-required"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt">Обязательный
        комментарий</label>

      <input type="checkbox" id="allow-comment" checked class="option custom-checkbox" />
      <label for="allow-comment"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt">Разрешить
        респонденту комментировать ответ</label>
    </div>

    <div>
      <div v-for="(item, index) in filesArr" :key="index" class="mb-4">
        <label :for="`item-${index}`" class="block mb-1 text-sm font-normal font-compact text-greytxt">
          Карточки
        </label>
        <input  type="text" @input="inputItemName(index, $event.target.value)" :id="`item-${index}`" placeholder="Введите название карточки для сортировки"
          class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-4"
          required />
        <FileInput :style="{ order: index }" :id="index" @file-upload="(file) => addFile(file, index)"
          @file-remove="removeFile(index)" />
      </div>

      <div @click="addCard" class="flex items-center gap-3">
        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/plus.svg" alt="" />
        </button>
        <p class="font-normal leading-6 text-17 font-compact text-txt">Добавить карточку</p>
      </div>
    </div>

    <div v-if="isOpenType">
      <label for="categories-number" class="block mb-1 text-sm font-normal font-compact text-greytxt">
        Минимальное количество категорий
      </label>
        <input type="text" id="categories-number" placeholder="Введите число от (2 до 9)"
          class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-txt bg-tertiary mb-2"
          required />
    </div>

    <div v-else>
      <label class="block mb-1 text-sm font-normal font-compact text-greytxt">
        Категории
      </label>
        <input v-for="(category, index) in categories" :key="index" type="text" :id="`category-${index}`" placeholder="Введите название категории"
          class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-txt bg-tertiary mb-2"
          required />

        <div @click="addCategory" class="flex items-center gap-3">
          <button class="bg-tertiary p-2.5 rounded-2xl">
            <img src="/icons/plus.svg" alt="" />
          </button>
          <p class="font-normal leading-6 text-17 font-compact text-txt">Добавить категорию</p>
        </div>
    </div>
  </form>
</template>

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

<script setup>
import { ref, computed } from "vue";
import ChevronDown from "@/components/icons/ChevronDown.vue";
import TimerSlideInput from "./ui/TimerSlideInput.vue";
import FileInput from './ui/FileInput.vue'

const isDropdownShown = ref(false);
const isOpenType = ref(false)

function toggleDropdown() {
  isDropdownShown.value = !isDropdownShown.value;
}

function setType(value) {
  isOpenType.value = value;
}

const filesArr = ref([{
  file: null,
  name: null,
}]);

const categories = ref([null]);

const newFile = ref(null);

function addFile(file, index) {
  console.log(index);
  const name = filesArr.value[index]?.name? filesArr.value[index].name : null;
  newFile.value = {
    file: file,
    name: name,
  };
  if (index < filesArr.value.length) {
    filesArr.value[index] = newFile.value;
  } else {
    filesArr.value = [...filesArr.value, newFile.value];
  }
}

function removeFile(index) {
  if (index < filesArr.value.length) {
    filesArr.value[index].file = null;
  } else {
    filesArr.value = filesArr.value.filter((_, i) => i !== index);
  }
  console.log(filesArr.value);
}

function inputItemName(index, name) {
  if (filesArr.value[index]) {
    filesArr.value[index] = { ...filesArr.value[index], name };
  }
  console.log(filesArr.value[index])
}

function addCard() {
  filesArr.value = [...filesArr.value, {file: null, name: null}];
}

function addCategory() {
  categories.value = [...categories.value, null];
}
</script>
