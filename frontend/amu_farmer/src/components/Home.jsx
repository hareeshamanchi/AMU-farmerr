import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container fade-in">
      <h1>Digital Farm Management Portal</h1>
      <p>Track antimicrobial usage, ensure compliance, and improve livestock health.</p>
      <div className="features">
        <div className="card feature-card">
          <h3>Prescription Entry</h3>
          <p>Record antimicrobial usage for livestock easily.</p>
        </div>
        <div className="card feature-card">
          <h3>Compliance Check</h3>
          <p>Ensure MRL norms are followed in farms.</p>
        </div>
        <div className="card feature-card">
          <h3>Reports & Analysis</h3>
          <p>Generate data-driven reports for regulators and farms.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
