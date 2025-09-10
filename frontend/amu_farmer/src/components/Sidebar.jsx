import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ user }) => {
  if (!user) return null;

  return (
    <div className="sidebar fade-in">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/dashboard/prescriptions">Prescription Entry</NavLink>
      <NavLink to="/dashboard/compliance">Compliance Check</NavLink>
      <NavLink to="/dashboard/reports">Reports</NavLink>
      {(user.role === "admin" || user.role === "superadmin") && (
        <NavLink to="/dashboard/blockchain">Blockchain Verify</NavLink>
      )}
    </div>
  );
};

export default Sidebar;
