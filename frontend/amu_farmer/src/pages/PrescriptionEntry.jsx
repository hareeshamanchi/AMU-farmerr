import React, { useState } from "react";
import "../pages/styles/PrescriptionEntry.css";

const PrescriptionEntry = () => {
  const [form, setForm] = useState({ farm: "", animal: "", drug: "", dosage: "", date: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert("Prescription Recorded!"); }

  return (
    <div className="prescription fade-in">
      <h1>Prescription Entry</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="farm" placeholder="Farm Name" value={form.farm} onChange={handleChange} required />
        <input type="text" name="animal" placeholder="Animal Type" value={form.animal} onChange={handleChange} required />
        <input type="text" name="drug" placeholder="Drug Name" value={form.drug} onChange={handleChange} required />
        <input type="text" name="dosage" placeholder="Dosage" value={form.dosage} onChange={handleChange} required />
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Record</button>
      </form>
    </div>
  );
};

export default PrescriptionEntry;
