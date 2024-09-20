<template>
  <footer class="w-full py-5 md:py-16 bg-tertiary">
    <div class="md:px-20 px-5 mx-auto 2xl:px-8 max-w-[360px] md:max-w-388">
      <div class="flex flex-col items-start w-full grid-cols-12 gap-8 md:grid">
        <div class="col-span-4">
          <h2 class="mb-4 text-xl font-bold leading-6 font-text text-txt">
            Портал МТС тестирование
          </h2>
          <p class="mb-4 text-base font-normal font-text text-txt">
            Получай промокоды и другие бонусы за поиск багов
          </p>
          <p
            class="mb-4 text-base font-normal font-text text-greyfooter max-w-100">
            Портал МТС Тестирование предназначен для дистанционной работы с
            внутренними и внешники тестировщиками компании МТС.
          </p>
        </div>

        <ul class="flex flex-col col-span-2 col-start-8 gap-5 lg:col-start-9">
          <li>
            <router-link
              to="/"
              class="text-base font-normal font-text text-greyfooter"
              >Главная</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="text-base font-normal font-text text-greyfooter"
              >Продукты</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              class="text-base font-normal font-text text-greyfooter"
              >Войти</router-link
            >
          </li>
        </ul>
        <ul
          class="flex flex-col w-full col-span-3 gap-5 lg:col-span-2 md:max-w-65">
          <li>
            <a
              class="text-base font-normal font-text text-greyfooter"
              href="/"
              target="_blank"
              >Магазин</a
            >
          </li>
          <li>
            <a
              class="text-base font-normal font-text text-greyfooter"
              href="/"
              target="_blank"
              >Акции</a
            >
          </li>
          <li>
            <a
              class="text-base font-normal font-text text-greyfooter"
              href="/"
              target="_blank"
              >Поддержка</a
            >
          </li>
          <li>
            <a
              class="text-base font-normal font-text text-greyfooter"
              href="/"
              target="_blank"
              >Согласие на обработку персональных данных</a
            >
          </li>
          <li>
            <a
              class="text-base font-normal font-text text-greyfooter"
              href="/"
              target="_blank"
              >Условия проведения акции</a
            >
          </li>
        </ul>
      </div>
      <div class="w-full hidden md:block bg-divider/50 h-[1px] my-[54px]"></div>
      <div
        class="flex flex-col items-start grid-cols-12 gap-8 mt-10 md:grid md:mt-0">
        <div class="col-span-3 lg:col-span-2">
          <h3
            class="hidden mb-4 text-base font-normal font-text text-txt md:block">
            Социальные сети
          </h3>
          <div class="flex gap-8 md:gap-4">
            <a href="/"
              ><img
                :src="isMobile == true ? '/icons/vk-mob.svg' : '/icons/vk.svg'"
                alt="Vk Logo"
            /></a>
            <a href="/"
              ><img
                :src="isMobile == true ? '/icons/ok-mob.svg' : '/icons/ok.svg'"
                alt="Ok Logo"
            /></a>
          </div>
        </div>

        <div class="col-span-3 lg:col-span-2">
          <h3 class="mb-4 text-base font-normal font-text text-txt">
            Приложение
          </h3>
          <div class="flex gap-4">
            <img src="/icons/footer-logo.svg" alt="MTS Logo" />
            <div class="flex flex-col text-base font-normal font-text text-txt">
              Мой МТС
              <a class="font-medium text-accent font-compact" href="/"
                >Скачать</a
              >
            </div>
          </div>
        </div>

        <div
          class="flex flex-col flex-wrap col-span-3 col-start-8 text-base font-normal md:flex-row lg:col-start-9 gap-x-2 gap-y-3 font-text text-greyfooter">
          <div class="flex gap-2">
            <a href="/">Контакты</a>
            <span class="hidden md:block">·</span>
          </div>
          <div class="flex gap-2">
            <a class="whitespace-nowrap" href="/">Раскрытие информации</a>
            <span class="hidden md:block">·</span>
          </div>
          <div class="flex gap-2">
            <a class="whitespace-nowrap" href="/">Документы ПАО МТС</a>
            <span class="hidden md:block">·</span>
          </div>
          <div class="flex gap-2">
            <a class="whitespace-nowrap" href="/">Документы ПАО МТС</a>
            <span class="hidden md:block">·</span>
          </div>
          <a class="whitespace-nowrap" href="/">Комплаенс и деловая этика</a>
        </div>
      </div>

      <div
        class="flex items-center justify-between mt-8 text-base font-normal font-text text-greyfooter">
        <p class="">© 2024 ПАО «МТС» Все права защищены</p>
        <p class="text-right">+18</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { inject } from "vue";
const isMobile = inject("isMobile");
</script>
