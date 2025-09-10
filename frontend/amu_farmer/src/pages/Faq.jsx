import React from "react";
import "../pages/styles/Faq.css";

const FAQs = () => {
  const faqs = [
    { question: "How do I record a prescription?", answer: "Go to the 'Prescription Entry' page and fill in the details." },
    { question: "How do I check compliance?", answer: "The 'Compliance Check' section shows farm compliance in real-time." },
  ];

  return (
    <div className="faqs fade-in">
      <h1>FAQs</h1>
      <div className="faq-cards">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card card">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
