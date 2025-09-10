import React from "react";
import "../pages/styles/Reports.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Reports = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "AMU Trend",
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
        text: "AMU Trend Over Time",
      },
    },
  };

  return (
    <div className="reports fade-in">
      <h1>Reports</h1>
      <div className="charts">
        <div className="chart-card">
          <h3>AMU Trend Analysis</h3>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
