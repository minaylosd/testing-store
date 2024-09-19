<template>
  <section
    class="rounded-4xl bg-[#e7eafa] px-4 pt-4 pb-4 lg:px-10 lg:pt-6 lg:pb-8 w-full h-[300px] flex flex-col"
  >
    <div class="w-full h-1"></div>
    <div class="my-3 lg:my-6">
      <h1
        class="mb-4 text-2xl font-medium leading-7 text-black lg:leading-none font-wide lg:text-heading white"
      >
        Магазин вознаграждений
      </h1>
      <p
        class="text-sm font-normal text-black h-30 lg:h-20 lg:text-xl font-compact"
      >
        Description
      </p>
    </div>
    <div class="flex items-center justify-between mt-auto mb-0 align-bottom">
      <router-link
        class="flex items-center p-[14px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
        to="/"
        ><span class="lg:px-2 lg:py-1 px-1 py-0.5">Подробнее</span></router-link
      >
      <div class="items-center hidden gap-4 lg:flex">
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
