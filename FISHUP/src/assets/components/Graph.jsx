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

var temperatura = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
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
      data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
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
      ticks: { color: "rgb(255, 99, 132)" },
    },
  },
};

export default function Graph() {
  return <Line data={data} options={dias} />;
}
