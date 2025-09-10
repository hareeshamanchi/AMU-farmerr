import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Sidebar from "./components/Sidebar"; 
import { AuthContext } from "./context/AuthContext";

// Pages
import Home from "./components/Home"; 
import About from "./pages/About"; 
import Dashboard from "./pages/Dashboard"; 
import PrescriptionEntry from "./pages/PrescriptionEntry"; 
import ComplianceCheck from "./pages/ComplianceCheck"; 
import Reports from "./pages/Reports"; 
import FAQs from "./pages/Faq"; 
import Contact from "./pages/Contact"; 
import Login from "./pages/Login"; 
import Register from "./pages/Register"; 

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="app">
      <Navbar user={user} />
      {user && <Sidebar user={user} />}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />

          {user && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/prescriptions" element={<PrescriptionEntry />} />
              <Route path="/dashboard/compliance" element={<ComplianceCheck />} />
              <Route path="/dashboard/reports" element={<Reports />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
