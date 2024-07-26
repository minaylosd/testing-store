<template>
  <div class="flex items-center justify-center gap-4 mt-8">
    <button
      class="flex items-center justify-center w-8 h-8 font-medium leading-6 rounded-md cursor-pointer text-17 font-compact"
      v-for="page in totalPagesArray"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["page-changed"]);

const totalPagesArray = computed(() => {
  return Array.from({ length: props.totalPages }, (_, i) => i + 1);
});

const goToPage = (page) => {
  emit("page-changed", page);
};
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
}

button.active {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
</style>
