<template>
  <section class="rounded-4xl bg-[#e7eafa] px-10 pt-6 pb-8 w-full">
    <div class="w-full h-1"></div>
    <div class="my-6 min-h-35">
      <h1
        class="mb-4 font-medium leading-none text-black font-wide text-heading"
      >
        Магазин вознаграждений
      </h1>
      <p class="text-xl font-normal text-black font-compact">Description</p>
    </div>
    <div class="flex items-center justify-between">
      <router-link
        class="flex items-center p-2.5 text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
        to="/"
        ><span class="px-2 py-1">Подробнее</span></router-link
      >
      <div class="flex items-center gap-4">
        <div class="rounded-full cursor-pointer shadow-shadow">
          <Arrow />
        </div>
        <div class="rounded-full cursor-pointer shadow-shadow">
          <Arrow class="rotate-180" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Arrow from "./icons/Arrow.vue";
</script>
