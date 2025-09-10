import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">FarmPortal</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/guidelines">Guidelines</Link></li>
        <li><Link to="/problem-statements">Problem Statements</Link></li>
        <li><Link to="/spoc">SPOC</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {user ? (
          <li><Link to="/dashboard">Dashboard</Link></li>
        ) : (
          <li><Link to="/auth/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
