<template>
    <main class="w-full pb-16 min-h-lvh h-fit pt-25 bg-tertiary">
        <div class="px-4 mx-auto max-w-none md:max-w-[1400px] md:px-9">
            <section class="w-full">
                <div class="flex justify-between mb-6">
                    <h1 class="text-4xl font-medium text-black md:leading-none font-wide md:text-heading">
                        Запуск тестов
                    </h1>

                    <button
                        class="flex items-center h-fit justify-center py-[18px] px-[22px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-white">
                        Отменить изменения
                    </button>
                </div>


                <div class="flex gap-6 mb-8">
                    <div class="relative py-[14px] px-0.5">
                        <p class="font-medium leading-6 text-17 text-txt font-compact">
                            Модерация
                        </p>
                        <div class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"></div>
                    </div>

                    <div class="relative py-[14px] px-0.5">
                        <p class="font-medium leading-6 text-17 text-txt font-compact">
                            Аудитория
                        </p>
                        <!-- <div class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"></div> -->
                    </div>

                    <div class="relative py-[14px] px-0.5">
                        <p class="font-medium leading-6 text-17 text-txt font-compact">
                            Отчетность
                        </p>
                        <!-- <div class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"></div> -->
                    </div>
                </div>

                <div class="grid grid-cols-[400px_auto] gap-6">
                    <div class="flex flex-col w-full gap-6">
                        <div class="flex flex-col gap-4 p-6 bg-white rounded-3xl">
                            <h2 class="text-xl font-medium leading-6 text-black font-wide">
                                Автор тестирования
                            </h2>

                            <div class="flex items-center gap-3 py-2.5">
                                <img class="object-cover w-13 h-13 rounded-2xl outline outline-1 outline-divider/50 -outline-offset-1"
                                    src="/avatar.jpg" alt="Author">

                                <div>
                                    <p class="font-normal leading-6 font-compact text-17 text-txt">Юлия Кускова</p>
                                    <a class="font-normal font-compact text-base text-[#45B6FC]"
                                        href="mailto:example@gmail.com">example@gmail.com</a>
                                </div>
                            </div>

                            <button
                                class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary">
                                Связаться с автором
                            </button>
                        </div>

                        <input type="text" id="name" placeholder="Название теста" value="Короткий тест"
                            class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-txt bg-white"
                            required />
                        <textarea type="text" id="description"
                            v-text="'Короткий тест для разработки интерфейса тестирования'"
                            class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-txt bg-white"
                            required></textarea>

                        <button @click="openOperators"
                            class="flex items-center justify-center w-full py-[18px] text-xs bg-white text-txt font-bold tracking-wider uppercase font-wide rounded-2xl">
                            Настройка логики теста
                        </button>

                        <div class="flex flex-col gap-4">
                            <button
                                class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-white">
                                Превью
                            </button>

                            <div class="flex gap-[14px]">
                                <div class="min-w-6 min-h-6">
                                    <InfoIcon />
                                </div>

                                <span class="font-normal leading-6 font-compact text-17 text-greytxt">В режиме "Превью"
                                    ваши
                                    ответы не будут
                                    засчитаны
                                </span>
                            </div>
                        </div>

                        <button
                            class="px-[22px] py-[18px] text-xs w-full font-bold tracking-wider uppercase font-wide rounded-2xl self-end bg-brand text-white">
                            Сохранить
                        </button>
                    </div>
                    <div class="flex flex-col gap-8">
                        <div class="flex flex-col gap-8">
                            <EditTestForm :testObj="test" />
                        </div>
                    </div>
                </div>
                <ConditionalOperators :closeOperators="closeOperators" :questions="questions" v-if="isOperatorsOpen" />
            </section>
        </div>
    </main>

</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router/composables'
import InfoIcon from "@/components/icons/InfoIcon.vue";
import EditTestForm from "../components/Moderator/EditTestForm.vue";
import ConditionalOperators from "@/components/launch-tests/ConditionalOperators.vue";

const router = useRouter()
const route = useRoute()

const testList = [
    {
        id: 1,
        name: "Открытый вопрос",
        author: "Константин",
        creationDate: "04.10.2024",
        lastUpdateDate: "04.10.2024",
        status: "active",
        type: "open",
        txt: 'Отлично',
        required: true,
        comment: false,
        commentRequired: false,
        files: []
    },
    {
        id: 2,
        name: "Выбор",
        author: "Константин",
        creationDate: "04.10.2024",
        lastUpdateDate: "04.10.2024",
        status: "inProgress",
        type: "select",
        txt: 'Отлично',
        required: true,
        comment: false,
        commentRequired: false,
        files: []
    },
    {
        id: 3,
        name: "Шкала",
        author: "Константин",
        creationDate: "04.10.2024",
        lastUpdateDate: "04.10.2024",
        status: "failed",
        type: "scale",
        txt: 'Отлично',
        required: true,
        comment: false,
        commentRequired: false,
        files: []
    },
    {
        id: 4,
        name: "Открытый вопрос",
        author: "Константин",
        creationDate: "04.10.2024",
        lastUpdateDate: "04.10.2024",
        status: "passed",
        type: "open",
        txt: 'Отлично',
        required: true,
        comment: false,
        commentRequired: false,
        files: []
    },
];

const test = testList.find((test) => test.id == route.params.id);

const isOperatorsOpen = ref(false);

const openOperators = () => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    isOperatorsOpen.value = true;
};

const closeOperators = () => {
    isOperatorsOpen.value = false;
    const body = document.querySelector("body");
    body.style.overflow = "auto";
};
</script>

<style scoped>
.custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.custom-checkbox+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
}

.custom-checkbox+label::before {
    content: "";
    background-image: url("/icons/Checkbox-unchecked.svg");
    background-repeat: no-repeat;
    display: inline-block;
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
}

.custom-checkbox:checked+label::before {
    background-image: url("/icons/Checkbox-checked.svg");
}
</style>