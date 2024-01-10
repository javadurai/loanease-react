import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import RangeHandler from "./RangeHandler";
import styles from "./RangeSelector.module.css"; // Import the CSS module
import { connect } from "react-redux";
import { setInterestRate, calculatePayments } from "../actions";

const InterestRateSelector = ({ interestRate, setInterestRate, calculatePayments, loanAmount, loanTerm, partPayment, loanStartDate, partPaymentInstallment }) => {
  useEffect(() => {
    RangeHandler.initRangeHandler(
      "interest_rate",
      "interest_rate_range",
      ".interest_rate_ticks",
      5,
      (value) => value,
      (value) => value,
      (value) => value,
      setInterestRate
    );
  }, [setInterestRate]); // Empty dependency array to run this effect only once after initial render

  const handleInterestRateChange = (event) => {
    const newInterestRate = event.target.value;
    setInterestRate(newInterestRate);
    // Dispatch action to calculate early payments based on new loan amount
    calculatePayments(loanAmount, newInterestRate, loanTerm, partPayment, loanStartDate, partPaymentInstallment);
  };

  return (
    <div className={`${styles.holder}`}>
      <h6 className="card-title m-2">
        <i className="fas fa-wallet"></i> Annual Interest Rate
      </h6>
      <div className="d-flex justify-content-center align-items-center">
        <Form.Control id="interest_rate" type="text" className={`${styles.input}`} value={interestRate} onChange={handleInterestRateChange} />
      </div>
      <Form.Range className="form-range" min="0" max="25" step=".1" value={interestRate} id="interest_rate_range" onChange={handleInterestRateChange} />
      <div className={`${styles.ticks} interest_rate_ticks`}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loanAmount: state.loanAmountProvider.loanAmount,
  interestRate: state.interestRateProvider.interestRate,
  loanTerm: state.loanTermProvider.loanTerm,
  partPayment: state.partPaymentProvider.partPayment,
  loanStartDate: state.loanStartDateProvider.loanStartDate,
  partPaymentInstallment: state.partPaymentInstallmentProvider.partPaymentInstallment,
  // map other state values...
});

const mapDispatchToProps = {
  setInterestRate,
  calculatePayments,
};

export default connect(mapStateToProps, mapDispatchToProps)(InterestRateSelector);
