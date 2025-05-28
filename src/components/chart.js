"use client";
import { useEffect, useRef } from "react";

import {
  Chart,
  LineController,
  LineElement,
  BarController,
  BarElement,
  PieController,
  DoughnutController,
  RadarController,
  PointElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Filler,
} from "chart.js";

Chart.register(
  LineController,
  BarController,
  PieController,
  DoughnutController,
  RadarController,
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  LinearScale,
  CategoryScale,
  Filler
);

export default function DynamicChart({
  type = "line",
  labels = [],
  data = [],
}) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chartInstance = new Chart(ctx, {
      type,
      data: {
        labels,
        datasets: [
          {
            label: "Veri Seti",
            data,
            fill: type === "line",
            backgroundColor: ["#2396EF69", "#44ADFF", "#006ACD"],
            borderColor: ["#3E7EF7"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
        scales:
          type === "bar" || type === "line" ? { y: { beginAtZero: true } } : {},
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [type, labels, data]);

  return (
    <div className="py-2  mx-auto">
      <canvas ref={chartRef} />
    </div>
  );
}
