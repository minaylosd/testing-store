<template>
  <div class="grid w-full grid-cols-2 gap-6 p-6 bg-white rounded-3xl">
    <div class="w-full">
      <h2 class="text-xl font-medium leading-6 text-black mb-9 font-wide">
        Шкала
      </h2>
      <img
        class="object-contain w-full h-auto rounded-[20px] mb-4"
        src="/test-img.jpg"
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
          <img src="/icons/administrator.svg" alt="" />
        </button>

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
          value="Оцените изображение по шкале"
          class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-white mb-2"
          required
        />

        <input
          type="checkbox"
          id="use-emoji"
          checked
          class="option custom-checkbox"
        />
        <label
          for="use-emoji"
          class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt"
          >Использовать emoji</label
        >

        <label
          for="minimum"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >Минимальное значение</label
        >
        <input
          type="text"
          id="minimum"
          placeholder="Напр., очень плохо"
          class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-white mb-2"
          required
        />

        <label
          for="maximum"
          class="block mb-1 text-sm font-normal font-compact text-greytxt"
          >Максимальное значение</label
        >
        <input
          type="text"
          id="maximum"
          placeholder="Напр., очень хорошо"
          class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-white mb-2"
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
  display: inline-block;
  width: 24px;
  height: 24px;
}

.custom-checkbox:checked + label::before {
  background-image: url("/icons/Checkbox-checked.svg");
}
</style>
