<template>
    <div @click.self="props.toggleModal" class="fixed inset-0 z-50 flex items-center justify-center bg-txt/40">
        <div class="flex flex-col gap-6 px-5 pt-8 pb-5 bg-white rounded-4xl w-[398px]">
            <h3 class="text-xl font-medium leading-6 text-center text-txt font-wide">
                {{ props.onlyOwnAudience? "Вы выбрали проведения тестирования среди собственной аудитории" : "Вы выбрали проведение тестирования на аудиторию респондентов МТС" }}
            </h3>

            <p class="font-normal leading-6 text-center font-compact text-17 text-txt">
                {{ props.onlyOwnAudience? "Предварительная модерация тестирования не требуется. После заполнения настроек тест будет создан и опубликован автоматически, вы сможете запустить его в любой момент и пригласить респондентов по ссылке." : "Перед публикацией тест будет отправлен на модерацию. После успешного прохождения модерации тест станет доступен в личной кабинете к публикации и приглашению в него респондентов МТС."}}
            </p>

            <button @click="props.toggleModal"
                class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand">
                Отлично
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    toggleModal: Function,
    onlyOwnAudience: Boolean,
});
</script>