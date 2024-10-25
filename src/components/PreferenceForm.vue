<template>
  <form class="grid w-full grid-cols-2 p-6 bg-white gap-x-6 rounded-3xl">
    <h2 class="text-xl font-medium leading-6 text-black mb-9 font-wide">
      Предпочтение
    </h2>

    <div class="flex items-center justify-end gap-2 mb-4">
      <button class="bg-tertiary p-2.5 rounded-2xl">
        <img src="/icons/administrator.svg" alt="" />
      </button>

      <button class="bg-tertiary p-2.5 rounded-2xl">
        <img src="/icons/copy-btn.svg" alt="" />
      </button>

      <button class="bg-tertiary p-2.5 rounded-2xl">
        <img src="/icons/delete.svg" alt="" />
      </button>
    </div>

    <div class="w-full">
      <img
        class="object-contain w-full h-auto rounded-[20px]"
        src="/test-img.jpg"
        alt=""
      />
    </div>

    <div class="flex flex-col w-full h-full gap-1">
      <div
        class="flex-col gap-1 h-full justify-center items-center flex px-4 py-6 bg-[#f2f3f7] rounded-[20px] border border-divider/50"
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

    <div class="flex items-center col-span-2 gap-2 mt-4 mb-6">
      <button class="bg-tertiary p-2.5 rounded-2xl">
        <img src="/icons/delete.svg" alt="" />
      </button>

      <button class="bg-tertiary p-2.5 rounded-2xl">
        <img src="/icons/edit-icon.svg" alt="" />
      </button>
    </div>

    <div class="w-full">
      <label
        for="question"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Вопрос</label
      >
      <input
        type="text"
        id="question"
        value="Что вы любите больше"
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

      <label
        for="object-one"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >1 объект</label
      >
      <input
        type="text"
        id="object-one"
        placeholder="Название"
        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
        required
      />

      <label
        for="object-two"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >2 объект</label
      >
      <input
        type="text"
        id="object-two"
        placeholder="Название"
        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
        required
      />

      <input
        type="checkbox"
        id="scramble-answers"
        checked
        class="option custom-checkbox"
      />
      <label
        for="scramble-answers"
        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
        >Перемешать ответы</label
      >
    </div>

    <div class="w-full pt-6">
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
