<template>
  <div
    class="w-[440px] px-5 pt-8 pb-5 bg-white shadow-lg rounded-4xl flex flex-col gap-8"
  >
    <img class="mx-auto" :src="modalData.imgSrc" alt="" />

    <div>
      <h2
        class="mb-2 text-xl font-medium leading-6 text-center font-wide text-txt"
      >
        {{ modalData.heading }}
      </h2>
      <p
        class="font-normal leading-6 text-center text-17 font-compact text-greytxt"
        v-html="formattedMessage"
      ></p>
    </div>

    <button
      @click="close"
      class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary"
    >
      Хорошо
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};

const success = ref(true);

const modalData = computed(() => ({
  heading: success.value ? "Успешно" : "Что-то пошло не так",
  message: success.value
    ? "Товары были успешно оплачены, ожидайте уведомление в личном кабинете"
    : "При оплате товара произошла ошибка.\nПроверьте баланс или повторите попытку позднее",
  imgSrc: success.value ? "/icons/success.svg" : "/icons/error.svg",
}));

const formattedMessage = computed(() =>
  modalData.value.message.replace(/\n/g, "<br>")
);
</script>
