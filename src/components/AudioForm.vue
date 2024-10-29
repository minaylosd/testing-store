<template>
  <div class="grid w-full grid-cols-2 gap-6 p-6 bg-white rounded-3xl">
    <div class="w-full">
      <h2 class="text-xl font-medium leading-6 text-black mb-9 font-wide">
        Выбор
      </h2>
      <img
        class="object-contain w-full h-auto rounded-[20px] mb-4"
        src="/audio.svg"
        alt=""
      />
      <div class="flex items-center gap-2">
        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/delete.svg" alt="" />
        </button>

        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/edit-icon.svg" alt="" />
        </button>
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
          for="question"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >Вопрос</label
        >
        <input
          type="text"
          id="question"
          value="Прослушайте аудио и выберите вариант развлечения"
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
          for="answer-one"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >А1. Ответ</label
        >
        <input
          type="text"
          id="answer-one"
          value="Отдыхать"
          class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
          required
        />

        <label
          for="answer-two"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >А2. Ответ</label
        >
        <input
          type="text"
          id="answer-two"
          placeholder="Введите ответ на вопрос"
          class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-3"
          required
        />

        <button
          class="text-[#0070e5] text-17 font-normal font-compact leading-normal mb-3"
        >
          Добавить вариант ответа
        </button>

        <input
          type="checkbox"
          id="other-variant"
          checked
          class="option custom-checkbox"
        />
        <label
          for="other-variant"
          class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
          >Свой вариант</label
        >

        <input
          type="checkbox"
          id="scramble-answers"
          checked
          class="option custom-checkbox"
        />
        <label
          for="scramble-answers"
          class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
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
