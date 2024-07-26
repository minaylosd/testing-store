<template>
  <main class="w-full mx-auto max-w-388 mt-25">
    <BreadCrumbs pageName="История покупок" />
    <div class="flex items-center gap-4 mb-8">
      <h1 class="font-medium leading-none text-black font-wide text-heading">
        История покупок
      </h1>
    </div>
    <section
      class="flex flex-col w-full px-6 mb-[182px] pt-3 pb-2 border mb- border-divider/50 rounded-2xl"
    >
      <div class="grid w-full gap-8 grid-cols-purchases">
        <div class="p-3 text-sm font-medium font-compact text-txt">
          ID заказа
        </div>

        <div class="p-3 text-sm font-medium font-compact text-txt">Товары</div>

        <div class="p-3 text-sm font-medium font-compact text-txt">
          Стоимость
        </div>

        <div class="p-3 text-sm font-medium font-compact text-txt">
          Адрес доставки
        </div>

        <div
          class="flex items-center gap-1 p-3 text-sm font-medium font-compact text-txt"
        >
          Дата<img src="/icons/date-icon.svg" alt="" />
        </div>

        <div
          class="flex items-center gap-1 p-3 text-sm font-medium font-compact text-txt"
        >
          Статус<img src="/icons/filter-icon.svg" alt="" />
        </div>
      </div>

      <div
        v-for="(operation, index) in operations"
        :key="index"
        class="grid items-start w-full gap-8 border-t grid-cols-purchases border-divider"
      >
        <div class="p-3 text-sm font-normal font-compact text-txt">
          {{ operation.id }}
        </div>

        <div class="flex flex-col gap-3 p-3">
          <div v-for="(item, i) in operation.items" :key="i">
            <div class="text-sm font-normal font-compact text-txt">
              {{ item.name }}
            </div>
            <div class="text-xs font-normal font-compact text-greytxt">
              {{ item.amount }} шт.<span
                class="uppercase"
                v-if="item.size !== false"
                >, {{ item.size }}</span
              >
            </div>
          </div>
        </div>

        <div class="p-3 text-sm font-normal font-compact text-txt">
          {{ operation.total }} ₿
        </div>

        <div class="p-3 text-sm font-normal font-compact text-txt">
          {{ operation.address }}
        </div>

        <div
          class="flex items-center gap-1 p-3 text-sm font-normal font-compact text-txt"
        >
          {{ formatDate(operation.date) }}
        </div>

        <div
          class="flex items-center gap-1.5 p-3 text-sm font-normal font-compact text-txt"
        >
          <div
            :class="{
              'w-1.5 h-1.5 rounded-full': true,
              'bg-positive': operation.status === 'Доставлено',
              'bg-accent': operation.status === 'Принято',
            }"
          ></div>
          {{ operation.status }}
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import BreadCrumbs from "../components/BreadCrumbs.vue";

const operations = [
  {
    id: 1,
    items: [
      {
        name: "Промокод на подписку в MTS Music",
        amount: 1,
        size: false,
      },
    ],
    total: 570,
    address: "Россия, г.Москва, ул.Южная, д9",
    date: "2024-03-21",
    status: "Доставлено",
  },
  {
    id: 2,
    items: [
      {
        name: "Фирменная футболка МТС",
        amount: 1,
        size: "s",
      },
      {
        name: "Фирменная футболка МТС",
        amount: 1,
        size: "s",
      },
    ],
    total: 570,
    address: "Россия, г.Москва, ул.Южная, д9",
    date: "2024-03-21",
    status: "Принято",
  },
];

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
</script>
