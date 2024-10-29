<template>
  <form class="grid w-full grid-cols-2 p-6 bg-white gap-x-6 rounded-3xl">
    <h2 class="text-xl font-medium leading-6 text-black mb-9 font-wide">
      Первый клик
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

    <div>
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
          Формат файла: JPG
        </p>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div>
        <label
          for="assignment"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >Задание для респондента</label
        >
        <textarea
          type="text"
          id="assignment"
          placeholder="Напишите задание для респондента"
          class="block w-full h-25 px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary"
          required
        ></textarea>
      </div>

      <input
        type="checkbox"
        id="required-question"
        checked
        class="option custom-checkbox"
      />
      <label
        for="required-question"
        class="flex items-start w-full gap-2 font-normal leading-6 font-compact text-17 text-txt"
        >Необязательный вопрос</label
      >

      <input
        type="checkbox"
        id="respondent-comment"
        checked
        class="option custom-checkbox"
      />
      <label
        for="respondent-comment"
        class="flex items-start w-full gap-2 font-normal leading-6 font-compact text-17 text-txt"
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
        class="flex items-start w-full gap-2 font-normal leading-6 font-compact text-17 text-txt"
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
        class="flex items-start w-full gap-2 font-normal leading-6 font-compact text-17 text-txt"
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
