import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var temperatura = [20, 24, 18, 22, 23, 12, 15];
var dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

var data = {
  labels: dias,
  datasets: [
    // Cada una de las líneas del gráfico
    {
      label: "Pecera 1",
      data: temperatura,
      fill: true,
      borderColor: "rgb(255, 99, 132)",
      pointRadius: 5,
      pointBorderColor: "rgba(255, 99, 132)",
    },
    {
      label: "Pecera 2",
      data: [19, 15, 18, 20, 23, 16, 17],
      borderColor: "rgb(0, 255, 0)",
      pointRadius: 5,
      pointBorderColor: "rgb(0, 255, 0)",
    },
  ],
};

var dias = {
  scales: {
    y: {
      min: 0,
    },
    x: {
      ticks: { color: "rgb(0, 0, 255,)" },
    },
  },
};

export function Graph() {
  return <Line data={data} options={dias} />;
}
