import React from "react";
import MainSection from "./components/MainSection";
import EarlyPaymentsSection from "./components/EarlyPaymentsSection";
import ChartSection from "./components/ChartSection";
import AmortizationTable from "./components/AmortizationTable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// Component to wrap the entire HTML structure
const LoanEaseApp = () => {
  return (
    <div className="bg-secondary">
      <div className="container bg-white">
        <Header />
        <hr />
        <MainSection />
        <hr />
        <EarlyPaymentsSection />
        <hr />
        <ChartSection />
        <hr />
        <AmortizationTable />
        <Footer />
      </div>
    </div>
  );
};

export default LoanEaseApp;
