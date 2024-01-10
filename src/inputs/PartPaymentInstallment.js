import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import styles from "./RangeSelector.module.css"; // Import the CSS module
import { connect } from "react-redux";
import { setPartPaymentInstallment, calculatePayments } from "../actions";

const PartPaymentInstallment = ({ partPaymentInstallment, setPartPaymentInstallment, calculatePayments, interestRate, loanTerm, partPayment, loanAmount, loanStartDate }) => {
  const handlePartPaymentInstallmentChange = (event) => {
    const newPartPaymentInstallment = event.target.value;
    setPartPaymentInstallment(newPartPaymentInstallment);
    // Dispatch action to calculate early payments based on new loan amount
    calculatePayments(loanAmount, interestRate, loanTerm, partPayment, loanStartDate, newPartPaymentInstallment);
  };

  return (
    <div className={`${styles.holder}`}>
      <h6 className="card-title m-2">
        <i className="fas fa-coins"></i> Part Payment Per Installment
      </h6>
      <div className="d-flex justify-content-center align-items-center">
        <InputGroup id="part_payment_installment_group" className={`${styles.input}`}>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control id="part_payment_installment" type="text" value={partPaymentInstallment} onChange={handlePartPaymentInstallmentChange} />
        </InputGroup>
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
  setPartPaymentInstallment,
  calculatePayments,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartPaymentInstallment);
