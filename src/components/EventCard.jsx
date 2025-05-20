import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const EventCard = () => {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Growth",
        data: [30, 50, 70, 60, 90, 100],
        fill: false,
        borderColor: "rgba(99, 102, 241, 1)",
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full h-full min-h-[300px]">
      <h2 className="text-lg font-semibold mb-2">User Growth</h2>
      <div className="relative w-full h-60 sm:h-72 md:h-80">
        <Line data={lineChartData} options={lineChartOptions} />
      </div>
    </div>
  );
};

export default EventCard;
