<template>
  <div
    class="flex flex-col items-center w-full px-11 pt-4 pb-8 min-h-[796px] bg-white rounded-3xl"
  >
    <div class="flex items-center justify-between w-full mb-6">
      <p class="font-medium leading-6 text-left text-txt font-compact text-17">
        Сортировка карточек
      </p>

      <p class="leading-6 qfont-normal font-compact text-17 text-brand">
        1:00 мин
      </p>

      <span
        class="font-compact font-medium text-sm text-txt px-1.5 py-0.5 bg-tertiary rounded-lg"
        >1 из 1</span
      >
    </div>

    <div class="w-full h-[1px] bg-divider/50 mb-8"></div>

    <div class="flex flex-col items-center justify-center h-full grow">
      <h1
        class="mb-6 text-xl font-medium leading-6 text-center text-txt font-wide"
      >
        Отсортируйте каждую карточку в категорию, которая вам кается наиболее
        подходящей
      </h1>

      <div class="grid grid-cols-[1fr_2fr] gap-4 mb-6">
        <div>
          <draggable
            @change="log"
            :list="unsorted"
            group="items"
            class="grid items-start grid-cols-2 gap-4"
          >
            <div v-for="(item, index) in unsorted" :key="index">
              <div class="rounded-[20px] bg-tertiary p-4 flex flex-col gap-4">
                <img
                  class="object-cover w-full h-auto rounded-[10px]"
                  :src="item.img"
                  :alt="item.name"
                />
                <p class="font-normal leading-6 font-compact text-17 text-txt">
                  {{ item.name }}
                </p>
              </div>
            </div>
          </draggable>
        </div>

        <div
          class="grid grid-cols-3 gap-4 border border-solid rounded-3xl border-divider/50 min-h-[528px]"
        >
          <div
            v-for="(group, index) in groups"
            :class="index != groups.length - 1 ? 'border-r' : ''"
            class="flex flex-col justify-between h-full px-8 py-4 border-solid grow border-divider/50"
          >
            <div class="flex flex-col h-full gap-4">
              <div v-if="openType">
                <label
                  for="category-1"
                  class="block mb-1 text-sm font-normal font-compact text-greytxt"
                  >Назовите категорию</label
                >
                <input
                  type="text"
                  id="category-1"
                  placeholder="Напр., люди"
                  class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
                  required
                />
              </div>
              <p
                v-else
                class="font-medium leading-6 text-left text-txt font-compact text-17"
              >
                {{ group.name }}
              </p>

              <draggable
                @change="log"
                :list="groups[index].list"
                group="items"
                class="flex flex-col min-h-full gap-4 h-fit grow"
              >
                <div
                  v-for="(item, indexList) in groups[index].list"
                  :key="indexList"
                  class="rounded-[20px] bg-tertiary p-4 flex flex-col gap-4"
                >
                  <img
                    class="object-cover w-full h-auto rounded-[10px]"
                    :src="item.img"
                    :alt="item.name"
                  />
                  <p
                    class="font-normal leading-6 font-compact text-17 text-txt"
                  >
                    {{ item.name }}
                  </p>
                </div>
              </draggable>
            </div>

            <button
              v-if="openType"
              class="bg-tertiary p-2.5 rounded-2xl w-11 h-11 mt-4"
            >
              <img src="/icons/delete.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <button
        @click="$emit('answer')"
        :class="[
          'px-[22px] py-[18px] text-xs font-bold tracking-wider uppercase font-wide rounded-2xl self-end',
          !unsorted.length == 0
            ? 'bg-divider/50 text-inactive'
            : 'bg-brand text-white',
        ]"
        :disabled="unsorted.length != 0 ? true : false"
      >
        Продолжить
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const stage = ref("start");
const openType = ref(true);
const timer = ref(60000);
const groups = ref([
  { id: 0, name: "Животные", list: [] },
  { id: 2, name: "Насекомые", list: [] },
  { id: 3, name: "Растения", list: [] },
]);
const unsorted = ref([
  { name: "Котенок", img: "/test-img.jpg" },
  { name: "Человек", img: "/test-img.jpg" },
  { name: "Собака", img: "/test-img.jpg" },
  { name: "Медуза", img: "/test-img.jpg" },
  { name: "Креветка", img: "/test-img.jpg" },
]);

const isTestCompleted = ref(false);
const startTest = () => {
  stage.value = "question";
};

const log = (evt) => {
  console.log(evt);
};
</script>
