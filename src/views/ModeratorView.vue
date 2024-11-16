<template>
  <main class="w-full pb-16 pt-25 bg-tertiary grow">
    <div class="px-4 mx-auto md:px-20 max-w-none md:max-w-388 2xl:px-9">
      <ModeratorList v-if="!isDetailsOpen" />
      <ModeratorItemDetails v-else />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import ModeratorList from "@/components/Moderator/ModeratorList.vue";
import ModeratorItemDetails from "@/components/Moderator/ModeratorItemDetails.vue";

const isDetailsOpen = ref(false);
</script>
