import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import RangeHandler from "./RangeHandler";
import styles from "./RangeSelector.module.css"; // Import the CSS module
import { connect } from "react-redux";
import { setLoanTerm, calculatePayments } from "../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons";

const LoanTermSelector = ({ loanTerm, setLoanTerm, calculatePayments, loanAmount, interestRate, partPayment, loanStartDate, partPaymentInstallment }) => {
  useEffect(() => {
    RangeHandler.initRangeHandler(
      "loan_term",
      "loan_term_range",
      ".loan_term_ticks",
      3,
      (value) => value,
      (value) => value,
      (value) => value,
      setLoanTerm
    );
  }, [setLoanTerm]); // Empty dependency array to run this effect only once after initial render

  const handleLoanTermChange = (event) => {
    const newLoanTerm = event.target.value;
    setLoanTerm(newLoanTerm);
    console.log(newLoanTerm);
    // Dispatch action to calculate early payments based on new loan amount
    calculatePayments(loanAmount, interestRate, newLoanTerm, partPayment, loanStartDate, partPaymentInstallment);
  };

  return (
    <div className={`${styles.holder}`}>
      <h6 className="card-title m-2">
        <FontAwesomeIcon icon={faDonate} /> Loan Term (Years)
      </h6>
      <div className="d-flex justify-content-center align-items-center">
        <Form.Control id="loan_term" type="text" className={`${styles.input}`} value={loanTerm} onChange={handleLoanTermChange} />
      </div>
      <Form.Range className="form-range" min="0" max="15" step="1" value={loanTerm} id="loan_term_range" onChange={handleLoanTermChange} />
      <div className={`${styles.ticks} loan_term_ticks`}></div>
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
});

const mapDispatchToProps = {
  setLoanTerm,
  calculatePayments,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoanTermSelector);
