<template>
  <RouterLink :to="`moderator/test/${props.item.id}`"
    class="grid grid-cols-[2fr_2fr_2fr_3fr_3fr] items-center py-3 border-t border-divider/50">
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
      <div class="flex items-center gap-2">
        <RouterLink :to="`moderator/edit/${props.item.id}`">
          <EditBtn />
        </RouterLink>

        <StartStopTestBtn :status="props.item.status" />
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import ModeratorItemStatusBadge from "./ModeratorItemStatusBadge.vue";
import StartStopTestBtn from "../ui/StartStopTestBtn.vue";
import EditBtn from "../ui/EditBtn.vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  item: Object,
});
</script>
