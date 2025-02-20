<template>
    <main class="w-full pb-16 min-h-lvh h-fit pt-25 bg-tertiary">
        <div class="px-4 mx-auto max-w-none md:max-w-[1400px] md:px-9">
            <div class="flex flex-col">
                <div class="flex items-center gap-5 mb-8">
                    <RouterLink to="/moderator" class="bg-white rounded-2xl p-2.5">
                        <img src="/icons/arrow-back.svg" alt="Back button">
                    </RouterLink>
                    
                    <h1 class="font-medium leading-none text-black font-wide text-heading">
                        Тест: Открытый вопрос
                    </h1>
                </div>



                <div class="grid grid-cols-[repeat(4,1fr),2fr] gap-4 mb-6">
                    <button
                        class="flex items-center justify-center py-[18px] px-[22px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-positive w-full">
                        Запустить
                    </button>

                    <button
                        class="flex items-center justify-center py-[18px] px-[22px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand w-full">
                        Отклонить
                    </button>

                    <button
                        class="flex items-center justify-center py-[18px] px-[22px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-white w-full">
                        Превью
                    </button>

                    <button
                        class="flex items-center justify-center py-[18px] px-[22px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-white w-full">
                        Настройки теста
                    </button>

                    <button
                        class="flex items-center justify-center py-[18px] px-[22px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-white w-full">
                        Параметры подбора респондентов
                    </button>
                </div>

                <div class="flex flex-col px-6 py-3 mb-6 bg-white rounded-2xl">
                    <div
                        class="grid items-center grid-cols-[repeat(3,156px),180px,156px,auto] gap-8 py-3 pl-3 border-b border-divider/50">
                        <div class="text-sm font-medium font-compact text-txt">Задания</div>
                        <div class="text-sm font-medium font-compact text-txt">
                            Число респондентов
                        </div>
                        <div class="text-sm font-medium font-compact text-txt">Вознаграждения</div>
                        <div class="text-sm font-medium font-compact text-txt">Статус</div>
                        <div class="text-sm font-medium font-compact text-txt">Администратор</div>
                        <div class="text-sm font-medium font-compact text-txt">Дата</div>
                    </div>
                    <div class="grid items-center grid-cols-[repeat(3,156px),180px,156px,auto] gap-8 h-12 pl-3">
                        <div class="text-sm font-normal font-compact text-txt">
                            Ответить на вопрос
                        </div>

                        <div class="text-sm font-normal font-compact text-txt">0</div>

                        <div class="flex items-center gap-1">
                            <span>200</span>
                            <img src="/icons/coin.svg" alt="Coin">
                        </div>

                        <div>
                            <ModeratorItemStatusBadge :status="status" />
                        </div>

                        <div class="text-sm font-normal font-compact text-txt">
                            Васильев И.И
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="text-sm font-normal font-compact text-txt">
                                30.01.2025
                            </div>

                            <div class="flex items-center gap-3">
                                <RouterLink :to="`../edit/${test.id}`">
                                    <EditBtn />
                                </RouterLink>
                                
                                <StartStopTestBtn />
                            </div>
                        </div>

                    </div>
                </div>

                <div class="flex flex-col gap-4 p-6 bg-white rounded-4xl w-fit">
                    <h3 class="text-xl font-medium leading-6 text-txt font-wide">
                        Вознаграждение
                    </h3>

                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-3 py-3.5 px-3 border border-divider/50 rounded-2xl">
                            <input type="number" id="reward" placeholder="Сумма" v-model="reward"
                                class="font-normal leading-6 font-compact text-17 text-txt w-13 focus:outline-none" />
                            <img src="/icons/coin.svg" alt="">
                        </div>

                        <button
                            class="flex items-center justify-center py-[18px] px-[22px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-positive">
                            Назначить вознаграждение
                        </button>
                    </div>
                </div>

                <ModerationModal v-if="isModalShown" :closeModal="closeModal" />
            </div>
        </div>
    </main>


</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router/composables";
import ModeratorItemStatusBadge from "@/components/Moderator/ModeratorItemStatusBadge.vue";
import ModerationModal from "@/components/Moderator/ModerationModal.vue";
import EditBtn from "../components/ui/EditBtn.vue";
import StartStopTestBtn from "../components/ui/StartStopTestBtn.vue";
import { RouterLink } from "vue-router";

const router = useRouter()
const route = useRoute()

const reward = ref(null);

const testList = [
    {
        id: 1,
        name: "Открытый вопрос",
        author: "Константин",
        creationDate: "04.10.2024",
        lastUpdateDate: "04.10.2024",
        status: "active",
        type: "open",
    },
    {
        id: 2,
        name: "Выбор",
        author: "Константин",
        creationDate: "04.10.2024",
        lastUpdateDate: "04.10.2024",
        status: "inProgress",
        type: "select",
    },
    {
        id: 3,
        name: "Шкала",
        author: "Константин",
        creationDate: "04.10.2024",
        lastUpdateDate: "04.10.2024",
        status: "failed",
        type: "scale",
    },
    {
        id: 4,
        name: "Открытый вопрос",
        author: "Константин",
        creationDate: "04.10.2024",
        lastUpdateDate: "04.10.2024",
        status: "passed",
        type: "open",
    },
];

const test = testList.find((test) => test.id == route.params.id);


const isModalShown = ref(true);
const status = ref("inProgress");

function showModal() {
    isModalShown.value = true;
}

function closeModal() {
    isModalShown.value = false;
}
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>