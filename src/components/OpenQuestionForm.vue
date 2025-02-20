<template>
  <form class="grid w-full grid-cols-2 p-6 bg-white gap-x-6 rounded-3xl">
    <h2 class="text-xl font-medium leading-6 text-black mb-9 font-wide">
      Открытый вопрос
    </h2>

    <div class="flex items-center justify-end gap-2 mb-4">
      <button class="bg-tertiary p-2.5 rounded-2xl">
        <img src="/icons/copy-btn.svg" alt="" />
      </button>

      <button class="bg-tertiary p-2.5 rounded-2xl">
        <img src="/icons/delete.svg" alt="" />
      </button>
    </div>

    <div class="flex flex-col gap-4">
      <FileInput v-for="(item, index) in displayedFileInputs" :key="index" :style="{ order: index }"
        @file-upload="(file) => addFile(file, index)" @file-remove="removeFile(index)" />
    </div>

    <div class="w-full">
      <label for="question" class="block mb-1 text-sm font-normal font-compact text-greytxt">Вопрос</label>
      <input type="text" id="question" placeholder="Введите текст вопроса"
        :value="props.testObj ? props.testObj.txt : ''"
        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-txt bg-tertiary mb-2"
        required />

      <input type="checkbox" id="required-question" :checked="props.testObj?.required" class="option custom-checkbox" />
      <label for="required-question"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt">Необязательный
        вопрос</label>

      <input type="checkbox" id="respondent-comment" :checked="props.testObj?.comment" class="option custom-checkbox" />
      <label for="respondent-comment"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt">Добавить поле
        "Комментарий" для респондентов</label>

      <input type="checkbox" id="comment-required" :checked="props.testObj?.commentRequired" class="option custom-checkbox" />
      <label for="comment-required"
        class="flex items-center w-full gap-2 font-normal leading-6 font-compact text-17 text-txt">Обязательный
        комментарий</label>
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
import FileInput from './ui/FileInput.vue';

const props = defineProps({
  testObj: Object,
})

const filesArr = ref(props.testObj?.files || []);
const newFile = ref(null);

const displayedFileInputs = computed(() => [...filesArr.value, null]);

function addFile(file, index) {
  const name = filesArr.value[index]?.name ? filesArr.value[index].name : null;
  newFile.value = {
    file: file,
    name: null,
  };

  if (index <= filesArr.value.length) {
    filesArr.value = filesArr.value.toSpliced(index, 0, newFile.value);
  } else {
    filesArr.value = [...filesArr.value, newFile.value];
  }
}

function removeFile(index) {
  filesArr.value = filesArr.value.toSpliced(index, 1);
}
</script>