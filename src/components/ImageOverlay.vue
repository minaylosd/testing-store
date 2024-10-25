<template>
  <div
    @click="props.closeOverlay"
    class="fixed inset-0 z-50 flex items-center justify-center bg-txt/40"
  >
    <div class="p-6 bg-white rounded-3xl">
      <img
        class="object-contain w-full h-full rounded-lg"
        src="/test-img.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  closeOverlay: Function,
});
</script>
