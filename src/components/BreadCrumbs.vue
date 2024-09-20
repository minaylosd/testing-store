<template>
  <nav>
    <ul class="flex items-center gap-1 mb-5 md:mb-8">
      <li>
        <a class="text-sm font-normal font-compact text-greyfooter" href="/"
          >Магазин вознаграждений</a
        >
      </li>
      <li><img src="/icons/breadcrumb-chevron.svg" alt="" /></li>
      <li>
        <a class="text-sm font-normal font-compact text-txt">
          {{ props.pageName }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  pageName: {
    type: String,
    required: true,
  },
});
</script>
