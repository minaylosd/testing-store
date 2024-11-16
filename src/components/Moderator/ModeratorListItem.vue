<template>
  <div
    class="grid grid-cols-[2fr_2fr_2fr_3fr_3fr] items-center py-3 border-t border-divider/50"
  >
    <div class="text-sm font-normal font-compact text-txt">
      {{ props.item.name }}
    </div>
    <div class="text-sm font-normal font-compact text-txt">
      {{ props.item.author }}
    </div>
    <div class="text-sm font-normal font-compact text-txt">
      {{ props.item.creationDate }}
    </div>
    <div>
      <ModeratorItemStatusBadge :status="props.item.status" />
    </div>
    <div class="flex items-center justify-between">
      <div class="text-sm font-normal font-compact text-txt">
        {{ props.item.lastUpdateDate }}
      </div>
      <div>
        <StatusItemBtn />
      </div>
    </div>
  </div>
</template>

<script setup>
import ModeratorItemStatusBadge from "./ModeratorItemStatusBadge.vue";
import StatusItemBtn from "@/components/StatusItemBtn.vue";
const props = defineProps({
  item: Object,
});
</script>
