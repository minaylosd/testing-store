<script setup>
import { ref, computed } from "vue";
import Slider from "../components/Slider.vue";
import FilterCard from "../components/FilterCard.vue";
import Card from "../components/Card.vue";
import Pagination from "../components/Pagination.vue";
import ItemDetailsOverlay from "../components/ItemDetailsOverlay.vue";

const itemsPerPage = 9;
const currentPage = ref(1);

const itemDetailsIsShown = ref(false);
const itemDetailsRef = ref();

const showItemDetails = (item) => {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";

  itemDetailsIsShown.value = true;
  itemDetailsRef.value = item;
};

const closeItemDetails = () => {
  const body = document.querySelector("body");
  body.style.overflow = "auto";

  itemDetailsIsShown.value = false;
};

const data = [
  {
    id: 0,
    name: "Товар",
    description: "Description",
    imgSrc: "1.jpg",
    size: true,
    price: 570,
  },
  {
    id: 1,
    name: "Товар",
    description: "Description",
    imgSrc: "2.jpg",
    size: false,
    price: 570,
  },
  {
    id: 2,
    name: "Товар",
    description: "Description",
    imgSrc: "3.jpg",
    size: false,
    price: 570,
  },
  {
    id: 3,
    name: "Товар",
    description: "Description",
    imgSrc: "4.jpg",
    size: true,
    price: 570,
  },
  {
    id: 4,
    name: "Товар",
    description: "Description",
    imgSrc: "5.jpg",
    size: false,
    price: 570,
  },
  {
    id: 5,
    name: "Товар",
    description: "Description",
    imgSrc: "6.jpg",
    size: true,
    price: 570,
  },
  {
    id: 6,
    name: "Товар",
    description: "Description",
    imgSrc: "1.jpg",
    size: false,
    price: 570,
  },
  {
    id: 7,
    name: "Товар",
    description: "Description",
    imgSrc: "2.jpg",
    size: true,
    price: 570,
  },
  {
    id: 8,
    name: "Товар",
    description: "Description",
    imgSrc: "3.jpg",
    size: true,
    price: 570,
  },
  {
    id: 9,
    name: "Товар",
    description: "Description",
    imgSrc: "4.jpg",
    size: false,
    price: 570,
  },
  {
    id: 10,
    name: "Товар",
    description: "Description",
    imgSrc: "5.jpg",
    size: false,
    price: 570,
  },
  {
    id: 11,
    name: "Товар",
    description: "Description",
    imgSrc: "6.jpg",
    size: true,
    price: 570,
  },
  {
    id: 12,
    name: "Товар",
    description: "Description",
    imgSrc: "1.jpg",
    size: true,
    price: 570,
  },
  {
    id: 13,
    name: "Товар",
    description: "Description",
    imgSrc: "2.jpg",
    size: false,
    price: 570,
  },
  {
    id: 14,
    name: "Товар",
    description: "Description",
    imgSrc: "3.jpg",
    size: true,
    price: 570,
  },
  {
    id: 15,
    name: "Товар",
    description: "Description",
    imgSrc: "4.jpg",
    size: false,
    price: 570,
  },
  {
    id: 16,
    name: "Товар",
    description: "Description",
    imgSrc: "5.jpg",
    size: true,
    price: 570,
  },
  {
    id: 17,
    name: "Товар",
    description: "Description",
    imgSrc: "6.jpg",
    size: false,
    price: 570,
  },
  {
    id: 18,
    name: "Товар",
    description: "Description",
    imgSrc: "1.jpg",
    size: false,
    price: 570,
  },
  {
    id: 19,
    name: "Товар",
    description: "Description",
    imgSrc: "2.jpg",
    size: true,
    price: 570,
  },
  {
    id: 20,
    name: "Товар",
    description: "Description",
    imgSrc: "3.jpg",
    size: false,
    price: 570,
  },
  {
    id: 21,
    name: "Товар",
    description: "Description",
    imgSrc: "4.jpg",
    size: true,
    price: 570,
  },
  {
    id: 22,
    name: "Товар",
    description: "Description",
    imgSrc: "5.jpg",
    size: true,
    price: 570,
  },
  {
    id: 23,
    name: "Товар",
    description: "Description",
    imgSrc: "6.jpg",
    size: true,
    price: 570,
  },
];

const totalPages = computed(() => Math.ceil(data.length / itemsPerPage));

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return data.slice(start, end);
});

const handlePageChange = (page) => {
  currentPage.value = page;
};
</script>
<template>
  <main
    class="w-full max-w-[360px] px-5 mx-auto lg:px-20 md:max-w-388 lg:mt-25 mt-14 2xl:px-9"
  >
    <ItemDetailsOverlay
      v-if="itemDetailsIsShown"
      :item="itemDetailsRef"
      @close-details="closeItemDetails"
    />
    <Slider />
    <section
      class="grid items-start grid-cols-1 gap-8 mt-8 mb-16 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <FilterCard />
      <div class="lg:col-span-2 2xl:col-span-3">
        <div
          class="grid items-center justify-center grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3"
        >
          <Card
            v-for="(item, index) in paginatedData"
            :key="index"
            :product="item"
            @open-details="showItemDetails(item)"
          />
        </div>
        <Pagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          @page-changed="handlePageChange"
        />
      </div>
    </section>
  </main>
</template>
