import React from "react";
import "../pages/styles/ComplianceCheck.css";

const ComplianceCheck = () => {
  return (
    <div className="compliance fade-in">
      <h1>Compliance Check</h1>
      <p>View farms and their antimicrobial usage compliance status here.</p>
      <table>
        <thead>
          <tr>
            <th>Farm</th>
            <th>Animal</th>
            <th>Compliance</th>
            <th>Alert</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Farm A</td>
            <td>Cattle</td>
            <td>✓</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Farm B</td>
            <td>Pig</td>
            <td>✗</td>
            <td>MRL Violation</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComplianceCheck;
