import { Line } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { db } from "../../../config";
import { ref, onValue, off } from "firebase/database";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const dias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export function Graph() {
  const [tempData, setTempData] = useState({
    labels: dias,
    datasets: [
      {
        label: "Pecera 1",
        data: [],
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
      },
    ],
  });

  useEffect(() => {
    const obtenerTemp = ref(db, "test/temp");

    const fetchDataAndUpdate = () => {
      onValue(obtenerTemp, (snapshot) => {
        const data = snapshot.val();
        // Update the array for "Pecera 1" ensuring it always contains 7 values
        setTempData((prevData) => {
          const lastData = prevData.datasets[0].data;
          const newData = [...lastData.slice(-6), { x: generateID(), y: data }];
          return {
            ...prevData,
            datasets: [
              {
                ...prevData.datasets[0],
                data: newData,
              },
            ],
          };
        });
      });
    };

    // Initial fetch and update
    fetchDataAndUpdate();

    // Fetch data every 20 seconds
    const interval = setInterval(fetchDataAndUpdate, 20 * 1000); // 20 seconds

    // Clean up function
    return () => {
      clearInterval(interval);
      off(obtenerTemp);
    };
  }, []);

  const generateID = () => {
    return new Date().getTime(); // Using timestamp as ID
  };

  const options = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "rgb(0, 0, 255,)" },
      },
    },
  };

  return <Line data={tempData} options={options} />;
}
