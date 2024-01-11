import React from "react";
import { Form } from "react-bootstrap";
import styles from "./RangeSelector.module.css"; // Import the CSS module
import { connect } from "react-redux";
import { setLoanStartDate, calculatePayments } from "../actions";
import MonthPicker from "./MonthPicker";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoanStartDatePicker = ({ loanStartDate, setLoanStartDate, calculatePayments, interestRate, loanTerm, partPayment, loanAmount, partPaymentInstallment }) => {
  const handleLoanStartDateChange = (value) => {
    const newLoanStartDate = value;
    setLoanStartDate(newLoanStartDate);
    // Dispatch action to calculate early payments based on new loan amount
    calculatePayments(loanAmount, interestRate, loanTerm, partPayment, newLoanStartDate, partPaymentInstallment);
  };

  const printLoanStartDate = () => {
    if (loanStartDate == null || loanStartDate === undefined) {
      loanStartDate = new Date();
    }
    return loanStartDate;
  };

  return (
    <div className={`${styles.holder}`}>
      <h6 className="card-title m-2">
        <FontAwesomeIcon icon={faCalendarAlt} /> Loan Start Date
      </h6>

      <div className="d-flex justify-content-center align-items-center">
        <Form>
          <Form.Group controlId="formMonthPicker">
            <MonthPicker selected={printLoanStartDate()} onChange={handleLoanStartDateChange} />
          </Form.Group>
        </Form>
      </div>
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
  setLoanStartDate,
  calculatePayments,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoanStartDatePicker);
