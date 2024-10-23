<template>
  <div
    class="relative flex items-center gap-1 p-3 py-3 text-sm font-medium font-compact text-txt group"
  >
    <span class="whitespace-nowrap">{{ dropdownLabel }}</span
    ><img src="/icons/filter-icon.svg" alt="" />
    <ul
      class="absolute z-10 bg-white top-full translate-y-[1px] -translate-x-3 rounded-2xl p-1.5 shadow-shadow w-full max-w-[164px] group-hover:block hidden"
    >
      <li v-for="item in dropdownItems" :key="item.value">
        <input
          type="checkbox"
          :id="item.value"
          :checked="item.checked"
          class="option custom-checkbox"
        />
        <label
          :for="item.value"
          class="flex items-end w-full gap-3 p-1.5 font-compact font-normal text-sm text-txt rounded-xl hover:bg-divider/25"
          >{{ item.label }}</label
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  dropdownType: {
    type: String,
    required: true,
  },
});

const dropdownItems = computed(() => {
  if (props.dropdownType === "operation type") {
    return [
      { value: "accrual", label: "Начисление", checked: true },
      { value: "replenishment", label: "Расходы", checked: true },
    ];
  } else if (props.dropdownType === "status") {
    return [
      { value: "delivered", label: "Доставлено", checked: true },
      { value: "in-progress", label: "Принято", checked: true },
    ];
  }
  return [];
});

const dropdownLabel = computed(() => {
  if (props.dropdownType === "operation type") {
    return "Тип операции";
  } else if (props.dropdownType === "status") {
    return "Статус";
  }
  return "";
});
</script>

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
  width: 16px;
  height: 16px;
}

.custom-checkbox:checked + label::before {
  background-image: url("/icons/Checkbox-checked.svg");
}
</style>
