<template>
  <div class="col-span-2">
    <p class="mb-8 text-xl font-medium leading-6 text-txt font-wide">
      Всего проголосовало <span>{{ totalRespondents }}</span> респондентов
    </p>

    <ReportSort v-if="question == 'sort'" />
    <ReportClick v-else-if="question == 'click'" />
    <ReportPrototype v-else-if="question == 'prototype'" />

    <div v-else class="w-full p-6 bg-white rounded-3xl">
      <h2 class="mb-4 text-xl font-medium leading-6 text-txt font-wide">
        Шкала
      </h2>

      <div
        v-if="question == 'scale'"
        class="w-[584px] h-[300px] overflow-hidden rounded-3xl flex items-center mb-6"
      >
        <img class="object-cover w-full h-auto" src="/test-img.jpg" alt="" />
      </div>

      <div v-else-if="question == 'audio'" class="flex items-center gap-3 mb-6">
        <img class="h-auto w-[314px] rounded-3xl" src="/audio-question.svg" />

        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/sound.svg" alt="" />
        </button>
      </div>

      <div class="flex gap-6" v-else-if="question == 'timer'">
        <img
          class="object-cover w-full h-auto rounded-3xl"
          src="/test-img.jpg"
          alt=""
        />
        <div class="flex flex-col w-full gap-4">
          <div>
            <label
              for="answer-1"
              class="block mb-1 text-sm font-normal font-compact text-greytxt"
              >Ответ</label
            >
            <input
              type="text"
              id="answer-1"
              value="Кисти"
              disabled
              class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
            />
          </div>

          <div>
            <label
              for="answer-2"
              class="block mb-1 text-sm font-normal font-compact text-greytxt"
              >Ответ</label
            >
            <input
              type="text"
              id="answer-2"
              value="Краски"
              disabled
              class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
            />
          </div>

          <div>
            <label
              for="answer-3"
              class="block mb-1 text-sm font-normal font-compact text-greytxt"
              >Ответ</label
            >
            <input
              type="text"
              id="answer-3"
              value="Ничего"
              disabled
              class="block w-full px-3 py-3.5 border border-divider/50 font-compact font-normal text-17 leading-6 rounded-2xl text-greytxt bg-tertiary mb-2"
            />
          </div>
        </div>
      </div>
      <canvas
        v-if="question != 'timer'"
        width="1200"
        height="400"
        ref="reportChart"
      ></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ReportSort from "@/components/ReportSort.vue";
import ReportClick from "@/components/ReportClick.vue";
import ReportPrototype from "@/components/ReportPrototype.vue";

const isDropdownShown = ref(false);

function toggleDropdown() {
  isDropdownShown.value = !isDropdownShown.value;
}

const reportChart = ref(null);

const question = ref("prototype");

const data = ref([
  { answer: "Отдыхать", amount: 2 },
  { answer: "Наслаждаться жизнью", amount: 7 },
  { answer: "Кушать", amount: 1 },
]);

const totalRespondents = ref(10);

const getPercentage = (value) => {
  const percentage = Math.round((value / totalRespondents.value) * 100);
  return percentage;
};

const createChart = () => {
  const ctx = reportChart.value.getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.value.map((item) => item.answer),
      datasets: [
        {
          data: data.value.map((item) => getPercentage(item.amount)),
          backgroundColor: "#FF0032",
          barThickness: 15,
          datalabels: {
            anchor: "end",
            align: "end",
            font: {
              family: "MTS Compact",
              weight: "400",
              size: 17,
            },
            formatter: (value, context) => {
              const amount = data.value[context.dataIndex].amount;
              const percentage = getPercentage(amount);
              return `${percentage}% (${amount})`;
            },
          },
        },
      ],
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      hover: {
        mode: null,
      },
      interaction: {
        mode: null,
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20,
            callback: function (value) {
              return value + "%";
            },
            font: {
              family: "MTS Compact",
              weight: "400",
              size: 17,
            },
          },
          beginAtZero: true,
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              family: "MTS Compact",
              weight: "400",
              size: 17,
            },
          },
        },
      },
    },
  });
};

onMounted(() => {
  if (question.value != "timer") {
    createChart();
  }
});
</script>
