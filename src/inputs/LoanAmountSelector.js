import React, { useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import RangeHandler from "./RangeHandler";
import styles from "./RangeSelector.module.css"; // Import the CSS module
import { connect } from "react-redux";
import { setLoanAmount, calculatePayments } from "../actions";
import { toNumber } from "../handlers/ValidationHanders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const LoanAmountSelector = ({ loanAmount, setLoanAmount, calculatePayments, interestRate, loanTerm, partPayment, loanStartDate, partPaymentInstallment }) => {
  useEffect(() => {
    RangeHandler.initRangeHandler(
      "loan_amount",
      "loan_amount_range",
      ".loan_amount_ticks",
      10000,
      (value) => value / 1000 + "K",
      (value) => value,
      (value) => value,
      setLoanAmount
    );
  }, [setLoanAmount, calculatePayments]);

  const handleLoanAmountChange = (event) => {
    const newLoanAmount = event.target.value;
    setLoanAmount(toNumber(newLoanAmount));
    // Dispatch action to calculate early payments based on new loan amount
    calculatePayments(newLoanAmount, interestRate, loanTerm, partPayment, loanStartDate, partPaymentInstallment);
    // calculatePayments();
  };

  return (
    <div className={`${styles.holder}`}>
      <h6 className="card-title m-2">
        <FontAwesomeIcon icon={faWallet} /> Principal Loan Amount
      </h6>
      <div className="d-flex justify-content-center align-items-center">
        <InputGroup id="loan_amount_group" className={`${styles.input}`}>
          <InputGroup.Text className={`${styles.group}`}>$</InputGroup.Text>
          <Form.Control id="loan_amount" type="text" value={loanAmount} onChange={handleLoanAmountChange} />
        </InputGroup>
      </div>
      <Form.Range className="form-range" min="0" max="100000" step="500" value={loanAmount} id="loan_amount_range" onChange={handleLoanAmountChange} />
      <div className={`${styles.ticks} loan_amount_ticks`}></div>
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
  setLoanAmount,
  calculatePayments,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoanAmountSelector);
