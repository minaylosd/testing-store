<template>
    <div class="flex items-center justify-center h-full">
        <div class="flex flex-col items-center gap-6 w-[608px]">
            <h2 class="text-[32px] font-medium leading-9 text-center text-txt font-wide">
                Тест опубликован
            </h2>
            <h3 class="mb-1 text-xl font-medium leading-6 text-center text-txt font-wide">
                Давайте пригласим в него респондентов.<br />
                Выберите тип аудитории
            </h3>
            <div class="flex items-center gap-5 mb-1">
                <div>
                    <input @change="setAudience(true)" type="radio" id="onlyOwnAudience" class="option radio"
                        v-model="onlyOwnAudience" name="audienceSource" :value="true" />
                    <label for="onlyOwnAudience"
                        class="flex items-center w-full gap-2 font-normal leading-6 font-compact text-17 text-txt">
                        Только своя аудитория
                    </label>
                </div>

                <div>
                    <input @change="setAudience(false)" type="radio" id="mtsAndOwnAudience" class="option radio"
                        v-model="onlyOwnAudience" name="audienceSource" :value="false" />
                    <label for="mtsAndOwnAudience"
                        class="flex items-center w-full gap-2 font-normal leading-6 font-compact text-17 text-txt">
                        Респонденты МТС и своя аудитория
                    </label>
                </div>
            </div>
            <button @click="submitForm"
                class="px-[35.5px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand">
                Продолжить
            </button>
        </div>

        <AudienceModal v-if="isModalShown" :toggleModal="toggleModal" :onlyOwnAudience="onlyOwnAudience" />
    </div>
</template>

<style scoped>
.radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.radio+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.radio+label::before {
  content: "";
  background-image: url("/icons/Radiobutton.svg");
  background-repeat: no-repeat;
  display: inline-block;
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
}

.radio:checked+label::before {
  background-image: url("/icons/RadiobuttonActive.svg");
}
</style>

<script setup>
import { ref } from "vue";
import AudienceModal from "./AudienceModal.vue";

const props = defineProps({
    setOwnAudienceType: Function,
})

const onlyOwnAudience = ref(true);
const isModalShown = ref(false);

const toggleModal = () => {
    isModalShown.value = !isModalShown.value;
}

const setAudience = (value) => {
    onlyOwnAudience.value = value;
};

const submitForm = () => {
    console.log("Selected Audience:", onlyOwnAudience.value ? "Только своя аудитория" : "Респонденты МТС и своя аудитория");
    
    props.setOwnAudienceType(onlyOwnAudience.value);
    toggleModal();
};
</script>