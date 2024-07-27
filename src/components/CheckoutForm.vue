<template>
  <div
    class="w-[440px] px-5 pt-8 pb-5 bg-white shadow-lg rounded-4xl flex flex-col gap-8"
  >
    <div>
      <h2
        class="px-4 mb-2 text-xl font-medium leading-6 text-center font-wide text-txt"
      >
        Оформление заказа
      </h2>
      <p
        class="px-4 font-normal leading-6 text-center text-17 font-compact text-greytxt"
      >
        Пожалуйста, заполните поля
      </p>
    </div>

    <form>
      <div class="mb-4">
        <label
          for="city"
          class="block text-sm font-normal font-compact text-greytxt"
          >Город</label
        >
        <input
          type="text"
          id="city"
          placeholder="Placeholder"
          v-model="form.city"
          class="block w-full px-3 py-3.5 mt-1 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary"
          required
        />
      </div>
      <div class="mb-4">
        <label
          for="street"
          class="block text-sm font-normal font-compact text-greytxt"
          >Улица</label
        >
        <input
          type="text"
          id="street"
          placeholder="Placeholder"
          v-model="form.street"
          class="block w-full px-3 py-3.5 mt-1 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary"
          required
        />
      </div>
      <div class="flex items-start gap-4 mb-6">
        <div>
          <label
            for="building"
            class="block text-sm font-normal font-compact text-greytxt"
            >Дом</label
          >
          <input
            type="text"
            id="building"
            placeholder="Placeholder"
            v-model="form.building"
            class="block w-full px-3 py-3.5 mt-1 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary"
            required
          />
        </div>

        <div>
          <label
            for="apartment"
            class="block text-sm font-normal font-compact text-greytxt"
            >Квартира/Офис</label
          >
          <input
            type="text"
            id="apartment"
            placeholder="Placeholder"
            v-model="form.apartment"
            class="block w-full px-3 py-3.5 mt-1 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary"
          />
          <p class="text-xs font-normal font-compact text-greytxt">
            Необязательно
          </p>
        </div>
      </div>

      <p class="mb-3 text-sm font-normal font-compact text-txt">
        Продолжая, вы соглашаетесь с
        <a class="text-accent" href="/"
          >условиями обработки персональных данных.</a
        >
      </p>

      <div class="flex gap-3">
        <button
          @click="returnToCart"
          class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-txt rounded-2xl bg-tertiary"
        >
          Отменить
        </button>
        <button
          class="flex items-center justify-center w-full py-[18px] text-xs font-bold tracking-wider uppercase font-wide text-white rounded-2xl bg-brand"
        >
          Купить
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const emit = defineEmits(["returnToCart"]);

const returnToCart = () => {
  emit("returnToCart");
};

const form = reactive({
  city: "",
  street: "",
  building: "",
  apartment: "",
});

const submitForm = () => {
  console.log("Form submitted:", form);
};
</script>
