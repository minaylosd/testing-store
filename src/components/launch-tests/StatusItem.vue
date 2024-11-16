<template>
  <div
    class="grid grid-cols-[4fr_5fr_3fr] items-center py-3 border-t border-divider/50"
  >
    <div class="text-sm font-normal font-compact text-txt">
      {{ props.item.name }}
    </div>
    <div class="text-sm font-normal font-compact text-txt">
      {{ props.item.description }}
    </div>
    <div class="flex items-center justify-between">
      <StatusItemBadge :status="props.item.status" />
      <StatusItemBtn />
    </div>
  </div>
</template>

<script setup>
import StatusItemBadge from "./StatusItemBadge.vue";
import StatusItemBtn from "@/components/StatusItemBtn.vue";
const props = defineProps({
  item: Object,
});
</script>
