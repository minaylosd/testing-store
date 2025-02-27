<template>
    <main class="w-full min-h-full pb-16 pt-25 bg-tertiary grow">
        <div class="px-4 mx-auto max-w-none md:max-w-[1400px] md:px-9">
            <h1 class="mb-8 font-medium leading-none text-black font-wide text-heading">
                Запуск быстрых UX/UI тестов
            </h1>

            <div class="flex gap-6 mb-8">
                    <div class="relative py-[14px] px-0.5">
                        <p class="font-medium leading-6 text-17 text-txt font-compact">
                            Модерация
                        </p>
                        <!-- <div class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"></div> -->
                    </div>

                    <div class="relative py-[14px] px-0.5">
                        <p class="font-medium leading-6 text-17 text-txt font-compact">
                            Аудитория
                        </p>
                        <div class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"></div>
                    </div>

                    <div class="relative py-[14px] px-0.5">
                        <p class="font-medium leading-6 text-17 text-txt font-compact">
                            Отчетность
                        </p>
                        <!-- <div class="w-full absolute bottom-0 h-0.5 bg-brand rounded-[1px]"></div> -->
                    </div>
                </div>

            <AudienceSelector v-if="ownAudienceType == null" :setOwnAudienceType="setOwnAudienceType" />
            <OwnAudienceSettings v-else-if="ownAudienceType == true" />
            <MTSAudienceSettings v-else />
        </div>
    </main>


</template>

<script setup>
import { ref } from 'vue';
import AudienceSelector from '../components/launch-tests/AudienceSelector.vue';
import OwnAudienceSettings from '../components/launch-tests/OwnAudienceSettings.vue';
import MTSAudienceSettings from '../components/launch-tests/MTSAudienceSettings.vue';

const ownAudienceType = ref(null);

const setOwnAudienceType = (value) => {
    ownAudienceType.value = value;
} 
</script>