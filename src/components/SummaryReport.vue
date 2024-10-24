<template>
  <div class="col-span-2">
    <p class="mb-8 text-xl font-medium leading-6 text-txt font-wide">
      Всего проголосовало <span>{{ totalRespondents }}</span> респондентов
    </p>

    <div class="w-full p-6 bg-white rounded-3xl">
      <h2 class="mb-4 text-xl font-medium leading-6 text-txt font-wide">
        Шкала
      </h2>

      <div
        v-if="question == 'scale'"
        class="w-[584px] h-[300px] overflow-hidden rounded-3xl flex items-center mb-6"
      >
        <img class="object-cover w-full h-auto" src="/test-img.jpg" alt="" />
      </div>

      <div v-else class="flex items-center gap-3 mb-6">
        <img class="h-auto w-[314px] rounded-3xl" src="/audio-question.svg" />

        <button class="bg-tertiary p-2.5 rounded-2xl">
          <img src="/icons/sound.svg" alt="" />
        </button>
      </div>
      <canvas width="1200" height="400" ref="reportChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const reportChart = ref(null);

const question = ref("audio");

const data = ref([
  { answer: "Отдыхать", amount: 2 },
  { answer: "Наслаждаться жизнью", amount: 7 },
  { answer: "Кушать", amount: 1 },
]);

const totalRespondents = ref(10);

const getPercentage = (value) => {
  return ((value / totalRespondents.value) * 100).toFixed(2);
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
        },
      ],
    },
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
  createChart();
});
</script>
