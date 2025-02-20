<template>
    <div @click.self="props.closeModal" class="fixed inset-0 z-50 flex items-center justify-center bg-txt/40">
        <div class="flex flex-col gap-6 px-5 pt-8 pb-5 bg-white rounded-4xl w-[398px]">
            <h3 class="text-xl font-medium leading-6 text-center text-txt font-wide">
                Изменения были успешно сохранены
            </h3>

            <button @click="props.closeModal"
                class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand">
                Отлично
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    closeModal: Function,
});
</script>