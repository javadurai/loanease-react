import React, { useState, useEffect } from "react";

const EarlyPaymentsSection = () => {
  const [prepayments, setPrepayments] = useState("$0");
  const [interestPayable, setInterestPayable] = useState("$0");
  const [completedInstallments, setCompletedInstallments] = useState("0");
  const [accumulatedSavings, setAccumulatedSavings] = useState("$0");
  const [monthlyInstallment, setMonthlyInstallment] = useState("$0");
  const [totalRepayments, setTotalRepayments] = useState("$0");

  // Use useEffect to set default values on component mount
  useEffect(() => {
    // Function to set default values
    const setDefaultValues = () => {
      setPrepayments("$50,000");
      setInterestPayable("$2,500");
      setCompletedInstallments("20");
      setAccumulatedSavings("$1,000");
      setMonthlyInstallment("$500");
      setTotalRepayments("$15,000");
    };

    // Call the function to set default values
    setDefaultValues();
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <section id="early_payments_section">
      <div className="container text-center py-3">
        <div className="row align-items-end">
          <div className="col pb-3">
            <div className="card border-secondary">
              <div className="card-header bg-secondary text-white">
                <h6 className="m-2">
                  <i className="fas fa-hand-holding-usd text-white"></i> Total <br />
                  Prepayments
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-secondary">
                  <span id="total_prepayments_made">{prepayments}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col pb-3">
            <div className="card border-dark-subtle">
              <div className="card-header bg-dark-subtle text-dark">
                <h6 className="m-2">
                  <i className="fas fa-percent text-dark"></i> Interest <br />
                  Payable
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-dark">
                  <span id="total_interest_payable">{interestPayable}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col pb-3">
            <div className="card border-success">
              <div className="card-header bg-success text-white">
                <h6 className="m-2">
                  <i className="fas fa-check-circle text-white"></i> Number of <br />
                  Installments
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-success">
                  <span id="actual_installments_made">{completedInstallments}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col pb-3">
            <div className="card border-info">
              <div className="card-header bg-info text-dark">
                <h6 className="m-2">
                  <i className="fas fa-coins text-dark"></i> Savings <br />
                  Accumulated
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-dark">
                  <span id="total_savings">{accumulatedSavings}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col pb-3">
            <div className="card border-danger">
              <div className="card-header bg-danger text-white">
                <h6 className="m-2">
                  <i className="fas fa-wallet text-white"></i> Monthly <br />
                  Installment
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-danger">
                  <span id="monthly_installment">{monthlyInstallment}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col pb-3">
            <div className="card border-primary">
              <div className="card-header bg-primary text-white">
                <h6 className="m-2">
                  <i className="fas fa-credit-card text-white"></i> Total <br />
                  Repayments
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-primary">
                  <span id="total_amount_paid">{totalRepayments}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyPaymentsSection;
