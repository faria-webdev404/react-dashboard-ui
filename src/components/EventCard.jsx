// components/EventCard.jsx
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

// Register chart components (this must be done ONCE)
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const EventCard = () => {
  // Sample chart data
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Growth",
        data: [30, 50, 70, 60, 90, 100],
        fill: false,
        borderColor: "rgba(99, 102, 241, 1)", // Indigo-500
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
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
    <div className="bg-white p-4 rounded-xl shadow h-80">
      <h2 className="text-lg font-semibold mb-2">User Growth</h2>
      <div className="h-60">
        <Line data={lineChartData} options={lineChartOptions} />
      </div>
    </div>
  );
};

export default EventCard;
