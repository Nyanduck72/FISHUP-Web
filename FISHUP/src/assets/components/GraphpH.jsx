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

var ph = [7, 7, 7, 6.8, 7.1, 7.2, 7];
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
      data: ph,
      fill: true,
      borderColor: "rgb(255, 99, 132)",
      pointRadius: 5,
      pointBorderColor: "rgba(255, 99, 132)",
    },
    {
      label: "Pecera 2",
      data: [7, 7, 6.5, 6.7, 7.1, 7, 7.3],
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

export function GraphPh() {
  return <Line data={data} options={dias} />;
}
