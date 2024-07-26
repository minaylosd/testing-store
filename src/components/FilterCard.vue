<template>
  <div class="px-5 pt-5 pb-2 bg-white border border-divider/50 rounded-3xl">
    <h2
      class="mt-1 mb-2 font-medium leading-6 font-compact text-17 text-greytxt"
    >
      Тип товара
    </h2>
    <ul>
      <li>
        <input
          type="checkbox"
          id="option-one"
          checked
          class="option custom-checkbox"
        />
        <label
          for="option-one"
          class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
          >Мерч</label
        >
        <ul class="ml-4">
          <li>
            <input
              type="checkbox"
              id="subOption-one"
              class="subOption custom-checkbox"
            />
            <label
              for="subOption-one"
              class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
              >Red Square</label
            >
          </li>
          <li>
            <input
              type="checkbox"
              id="subOption-two"
              class="subOption custom-checkbox"
            />
            <label
              for="subOption-two"
              class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
              >TechWear 2.0</label
            >
          </li>
          <li>
            <input
              type="checkbox"
              id="subOption-three"
              class="subOption custom-checkbox"
            />
            <label
              for="subOption-three"
              class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
              >МТС</label
            >
          </li>
        </ul>
      </li>
      <li>
        <input
          type="checkbox"
          id="option-two"
          class="option custom-checkbox"
        /><label
          class="flex items-center w-full gap-[9px] py-2.5 font-compact font-normal text-17 leading-6 text-txt"
          for="option-two"
          >Промокоды</label
        >
      </li>
    </ul>
  </div>
</template>

<script setup></script>

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
