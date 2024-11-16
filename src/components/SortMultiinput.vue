<template>
  <div>
    <label
      for="categories"
      class="block mb-1 text-sm font-normal font-compact text-greytxt"
    >
      Категории
    </label>
    <div
      class="w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2 flex flex-wrap gap-2"
      id="categories"
    >
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="flex items-center gap-2 px-3 py-1 text-white rounded-lg bg-brand"
      >
        <span>{{ category }}</span>
        <button type="button" @click="removeCategory(index)" class="text-white">
          &times;
        </button>
      </div>
      <input
        type="text"
        v-model="newCategory"
        placeholder="Введите категории для сортировки"
        @keydown.enter.prevent="addCategory"
        class="flex-grow bg-transparent border-none outline-none text-greytxt"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newCategory = ref("");
const categories = ref([]);

const addCategory = () => {
  const trimmedCategory = newCategory.value.trim();
  if (trimmedCategory && !categories.value.includes(trimmedCategory)) {
    categories.value.push(trimmedCategory);
  }
  newCategory.value = "";
};

const removeCategory = (index) => {
  categories.value.splice(index, 1);
};
</script>
