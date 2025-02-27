<template>
    <div class="flex items-center justify-center h-full">
        <div class="w-[608px]">
            <h2 class="text-[32px] mb-8 font-medium leading-9 text-center text-txt font-wide">
                Тест опубликован
            </h2>
            <div class="flex flex-col gap-4 p-6 bg-white rounded-4xl">
                <h3 class="text-xl font-medium leading-6 text-center text-txt font-wide">
                    Настройки тестирования
                </h3>

                <div>
                    <input type="number" id="question" placeholder="Укажите количество респондентов"
                        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-txt placeholder:text-greytxt bg-tertiary mb-2"
                        required />

                    <input type="checkbox" id="noRespondentsLimits" checked class="option custom-checkbox" />
                    <label for="noRespondentsLimits"
                        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt">
                        Без ограничений
                    </label>
                </div>


                <div class="flex gap-[14px]">
                    <div class="min-w-6 min-h-6">
                        <InfoIcon />
                    </div>

                    <span class="font-normal leading-6 font-compact text-17 text-greytxt">
                        Необходимое количество респондентов для завершения теста. В случае достижения нужного количества
                        раньше даты окончания тестирования, тестирование будет завершено автоматически.
                    </span>
                </div>

                <div>
                    <label for="date" class="block mb-1 text-sm font-normal font-compact text-greytxt">
                        Окончание тестирования
                    </label>
                    <input type="date" id="date"
                        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-white mb-2"
                        required />
                    <input type="checkbox" id="noDateLimits" checked class="option custom-checkbox" />
                    <label for="noDateimits"
                        class="flex items-center w-full gap-2 mb-4 font-normal leading-6 font-compact text-17 text-txt">
                        Бессрочно
                    </label>
                </div>

                <div class="flex gap-[14px]">
                    <div class="min-w-6 min-h-6">
                        <InfoIcon />
                    </div>

                    <span class="font-normal leading-6 font-compact text-17 text-greytxt">
                        Дата, когда ваше тестирование будет завершено. В случае достижения даты окончания тестирования
                        раньше, чем количества респондентов, тестирование будет завершено автоматически.
                    </span>
                </div>

                <h3 class="mb-1 text-xl font-medium leading-6 text-center text-txt font-wide">
                    Поделиться ссылкой
                </h3>

                <p class="font-normal leading-6 text-center font-compact text-17 text-greytxt">
                    Используйте ссылку, чтобы пригласить своих респондентов
                </p>

                <div
                    class="flex items-center w-full justify-between gap-2 bg-tertiary border border-solid rounded-2xl border-divider/50 px-3 py-[14px]">
                    <input
                        class="w-full font-normal leading-6 bg-transparent border-none outline-none font-compact text-17 text-txt"
                        type="text" value="https://design.mts.ru/ds/onbording/dizaineram" disabled />
                    <img class="w-8 h-8" src="/icons/plus.svg" alt="" />
                </div>

                <p for="noDateimits"
                    class="text-sm font-normal text-center font-compact text-greytxt">
                    Для прохождения тестирования по ссылке регистрация респондентов на портале не требуется.
                </p>
            </div>

        </div>
    </div>
</template>

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

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>

<script setup>
import InfoIcon from '../icons/InfoIcon.vue';
</script>
