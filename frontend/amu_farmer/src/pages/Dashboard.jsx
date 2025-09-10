import React from "react";
import "../pages/styles/Dashboard.css";
import Chart from "./Chart"; // ✅ fixed path

const Dashboard = () => {
  return (
    <div className="dashboard fade-in">
      <h1>Dashboard Overview</h1>
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Total Farms</h3>
          <p>120</p>
        </div>
        <div className="summary-card">
          <h3>Total Prescriptions</h3>
          <p>450</p>
        </div>
        <div className="summary-card">
          <h3>Compliance Rate</h3>
          <p>87%</p>
        </div>
        <div className="summary-card">
          <h3>Alerts Pending</h3>
          <p>12</p>
        </div>
      </div>
      <div className="dashboard-charts">
        <Chart title="AMU Trends" />
        <Chart title="Compliance Over Time" />
      </div>
    </div>
  );
};

export default Dashboard;
