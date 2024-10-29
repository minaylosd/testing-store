<template>
  <form class="grid w-full grid-cols-2 p-6 bg-white gap-x-6 rounded-3xl">
    <h2 class="text-xl font-medium leading-6 text-black mb-9 font-wide">
      Прототип
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
    <div class="w-full">
      <label
        for="link"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Вставьте ссылку на прототип Figma</label
      >
      <input
        type="text"
        id="link"
        placeholder="Ссылка"
        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-4"
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
        for="start"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Начальный шаг</label
      >
      <input
        type="text"
        id="start"
        placeholder="Опишите, с чего начать"
        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-4"
        required
      />

      <label
        for="finish"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Конечный шаг</label
      >
      <input
        type="text"
        id="finish"
        placeholder="Опишите целевое действие"
        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-4"
        required
      />

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
    <div class="w-full">
      <label
        for="assignment"
        class="block mb-1 text-sm font-normal font-compact text-greytxt"
        >Инструкция</label
      >
      <textarea
        type="text"
        id="assignment"
        placeholder="Опишите, что делать"
        class="block w-full h-[236px] px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-4"
        required
      ></textarea>
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
