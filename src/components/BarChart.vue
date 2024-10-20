<template>
  <div
    class="flex items-center justify-center w-full h-full p-6 overflow-auto bg-white rounded-xl"
  >
    <div class="flex items-center md:justify-center w-[570px] h-[280px]">
      <Bar v-if="chartData" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const chartData = computed(() => {
  const getBackgroundColor = (value) => {
    const percentage = (value / 100) * 100;
    if (percentage < 30) return "#00724D";
    if (percentage >= 30 && percentage < 70) return "#F37F19";
    return "#FF0032";
  };

  return {
    labels: props.data.labels,
    datasets: [
      {
        label: "Data",
        backgroundColor: props.data.values.map(getBackgroundColor),
        data: props.data.values,
        barThickness: 15,
      },
    ],
  };
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top",
      align: "end",
      labels: {
        boxWidth: 16,
        boxHeight: 16,
        usePointStyle: false,
        font: {
          family: "MTS Text",
          weight: "regular",
          size: 17,
        },
        generateLabels: function (chart) {
          const labels = ["Низкая", "Средняя", "Высокая"];
          const colors = ["#00724D", "#F37F19", "#FF0032"];
          return labels.map((label, index) => ({
            text: label,
            fillStyle: colors[index],
            strokeStyle: colors[index],
            lineWidth: 1,
            hidden: false,
          }));
        },
      },
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
          family: "MTS Text",
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
    },
  },
};
</script>
