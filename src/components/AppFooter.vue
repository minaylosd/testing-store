<template>
  <footer class="w-full py-16 bg-tertiary">
    <div class="mx-auto max-w-388">
      <div class="grid items-start w-full grid-cols-12 gap-8">
        <div class="col-span-4">
          <h2 class="mb-4 text-xl font-bold leading-6 font-text text-txt">
            Портал МТС тестирование
          </h2>
          <p class="mb-4 text-base font-normal font-text text-txt">
            Получай промокоды и другие бонусы за поиск багов
          </p>
          <p
            class="mb-4 text-base font-normal font-text text-greyfooter max-w-100"
          >
            Портал МТС Тестирование предназначен для дистанционной работы с
            внутренними и внешники тестировщиками компании МТС.
          </p>
        </div>

        <div class="col-span-4"></div>

        <nav class="flex items-start gap-[135px] col-span-4">
          <ul class="flex flex-col gap-5">
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
          <ul class="flex flex-col gap-5 max-w-65">
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
        </nav>
      </div>
      <div class="w-full bg-divider/50 h-[1px] my-[54px]"></div>
      <div class="grid items-start grid-cols-12 gap-8">
        <div class="col-span-2">
          <h3 class="mb-4 text-base font-normal font-text text-txt">
            Социальные сети
          </h3>
          <div class="flex gap-4">
            <a href="/"><img src="/icons/vk.svg" alt="Vk Logo" /></a>
            <a href="/"><img src="/icons/ok.svg" alt="Ok Logo" /></a>
          </div>
        </div>

        <div class="col-span-2">
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

        <div class="col-span-4"></div>

        <div
          class="flex flex-wrap col-span-3 text-base font-normal gap-x-2 gap-y-3 font-text text-greyfooter"
        >
          <a href="/">Контакты</a>
          <span>·</span>
          <a href="/">Раскрытие информации</a>
          <span>·</span>
          <a href="/">Документы ПАО МТС</a>
          <span>·</span>
          <a href="/">Документы ПАО МТС</a>
          <span>·</span>
          <a href="/">Комплаенс и деловая этика</a>
        </div>
      </div>

      <div
        class="flex items-center justify-between mt-8 text-base font-normal font-text text-greyfooter"
      >
        <p class="">© 2024 ПАО «МТС» Все права защищены</p>
        <p class="text-right">+18</p>
      </div>
    </div>
  </footer>
</template>
