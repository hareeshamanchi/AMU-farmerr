import React from "react";
import "../pages/styles/Chart.css";
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
} from "chart.js";

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ title }) => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: title,
        data: [5, 12, 9, 15, 13, 16],
        fill: false,
        borderColor: "#2E86AB",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div className="chart-card">
      <h3>{title}</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
