<template>
    <div class="flex flex-col gap-6">
        <h2 class="mb-8 text-xl font-medium leading-6 text-txt font-wide">
            Пригласить респондентов МТС Тестирование
        </h2>
        <div class="grid grid-cols-3 gap-6">
            <div class="flex flex-col gap-4 p-6 bg-white rounded-4xl">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-medium leading-6 text-txt font-wide">
                        Поделиться ссылкой
                    </h2>
                    <div class="relative group">
                        <InfoIcon />
                        <div class="absolute right-0 flex translate-x-full -top-1 w-[350px] opacity-0">
                            <div class="-mr-0.5">
                                <img src="/icons/tooltip.svg" alt="">
                            </div>

                            <div class="bg-txt rounded-xl py-2.5 px-3 text-white font-compact text-sm font-normal">
                                <p class="w-[318px]">Ответы внешних респондентов будут обезличенными и отображены в
                                    отдельном отчете</p>
                            </div>
                        </div>
                    </div>

                </div>

                <p class="text-sm font-normal font-compact text-greytxt">
                    Для прохождения тестирования по ссылке регистрация респондентов на портале не требуется.
                </p>

                <div>
                    <label for="link" class="block mb-1 text-sm font-normal font-compact text-greytxt">
                        Ссылка
                    </label>
                    <div
                        class="flex items-center w-full justify-between gap-2 bg-tertiary border border-solid rounded-2xl border-divider/50 px-3 py-[14px]">
                        <input
                            class="w-full font-normal leading-6 bg-transparent border-none outline-none font-compact text-17 text-txt"
                            type="text" id="link" value="https://design.mts.ru/ds/onbording/dizaineram" disabled />
                        <img class="w-8 h-8" src="/icons/plus.svg" alt="" />
                    </div>
                </div>

            </div>

            <div class="flex flex-col gap-4 p-6 bg-white rounded-4xl">

                <h2 class="text-xl font-medium leading-6 text-txt font-wide">
                    География
                </h2>

                <p class="text-sm font-normal font-compact text-greytxt">
                    Охватите город или уточните геолокацию аудитории до определенных районов города
                </p>

                <DropdownInput label="Регион или город" :options="cities" />
            </div>

            <div class="flex flex-col gap-4 p-6 bg-white rounded-4xl">

                <h2 class="text-xl font-medium leading-6 text-txt font-wide">
                    Демография
                </h2>

                <p class="text-sm font-normal font-compact text-greytxt">
                    Охватите всю аудиторию или только определенный пол
                </p>

                <DropdownInput label="Пол аудитории" :options="sex" />
            </div>

            <div class="grid grid-cols-4 col-span-3 gap-4 p-6 bg-white rounded-4xl">

                <h2 class="col-span-4 text-xl font-medium leading-6 text-txt font-wide">
                    Детальные настройки
                </h2>

                <div>
                    <label for="ageMin" class="block mb-1 text-sm font-normal font-compact text-greytxt">
                        Возраст: от
                    </label>
                    <input type="number" id="ageMin" value="18"
                        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-txt placeholder:text-greytxt bg-tertiary mb-2"
                        required />
                </div>

                <div>
                    <label for="ageMax" class="block mb-1 text-sm font-normal font-compact text-greytxt">
                        Возраст: до
                    </label>
                    <input type="number" id="ageMax" value="25"
                        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-txt placeholder:text-greytxt bg-tertiary mb-2"
                        required />
                </div>

                <DropdownInput label="Авто" :options="[]" />

                <DropdownInput label="Марка" :options="[]" />

                <DropdownInput label="Образование" :options="[]" />

                <DropdownInput label="Род занятий" :options="[]" />

                <DropdownInput class="col-span-2" label="Уровень дохода" :options="[]" />

                <DropdownInput label="Семейное положение" :options="[]" />

                <DropdownInput label="Дети" :options="[]" />

                <DropdownInput label="Домашнее животное" :options="[]" />

                <DropdownInput label="Выберите" :options="[]" />

                <DropdownInput label="Пол ребенка" :options="[]" />

                <div>
                    <label for="childAge" class="block mb-1 text-sm font-normal font-compact text-greytxt">
                        Возраст
                    </label>
                    <input type="number" id="childAge" placeholder="Введите значение"
                        class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-txt placeholder:text-greytxt bg-tertiary mb-2"
                        required />
                </div>

                <DropdownInput class="col-span-2" label="Интересы" :options="[]" />

                <div class="col-span-2">
                    <button class="font-compact font-normal text-sm text-[#0070e5]">Добавить</button>
                </div>

                <DropdownInput class="col-span-2" label="Гаджет" :options="[]" />

                <DropdownInput label="Жилье" :options="[]" />

                <DropdownInput label="Форма владения" :options="[]" />

                <div class="col-span-2"></div>

                <DropdownInput class="col-span-2" label="Другое жилье" :options="[]" />
            </div>

        </div>

        <h2 class="self-end text-xl font-medium leading-6 text-txt font-wide">
            Подобрано респондентов: {{ 0 }}
        </h2>

        <button
            class="px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand self-end">
            Продолжить
        </button>
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
import DropdownInput from '../DropdownInput.vue';

const cities = [
    { value: 'any', label: 'Вся Россия' },
    { value: 'msk', label: 'Москва' },
    { value: 'spb', label: 'Санкт-Петербург' },
]

const sex = [
    { value: 'male', label: 'Мужской' },
    { value: 'female', label: 'Женский' },
]
</script>
