import { Line } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { db } from "../../../config";
import { ref, onValue, off } from "firebase/database";

const dias = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export function GraphPh() {
  const [phData, setPhData] = useState({
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
    const obtenerPh = ref(db, "test/TDS");

    const fetchDataAndUpdate = () => {
      onValue(obtenerPh, (snapshot) => {
        const data = snapshot.val();
        // Update the array for "Pecera 1" ensuring it always contains 7 values
        setPhData((prevData) => {
          const updatedData = [...prevData.datasets[0].data.slice(-6), data];
          return {
            ...prevData,
            datasets: [
              {
                ...prevData.datasets[0],
                data: updatedData,
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
      off(obtenerPh);
    };
  }, []);

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

  return <Line data={phData} options={options} />;
}
