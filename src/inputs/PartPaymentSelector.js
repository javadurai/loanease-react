import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { connect } from "react-redux";
import { setPartPayment, calculatePayments } from "../actions";

const PartPaymentSelector = ({ partPayment, setPartPayment, calculatePayments, interestRate, loanTerm, loanAmount, loanStartDate, partPaymentInstallment }) => {
  const handlePartPaymentChange = (event) => {
    const newPartPayment = event.target.value;
    console.log(newPartPayment);
    setPartPayment(newPartPayment);
    // Dispatch action to calculate early payments based on new loan amount
    calculatePayments(loanAmount, interestRate, loanTerm, newPartPayment, loanStartDate, partPaymentInstallment);
  };

  return (
    <div>
      <h6 className="card-title m-2">
        <i className="fas fa-check-square"></i> Part Payments
      </h6>
      <ToggleButtonGroup type="radio" name="part_payments" value={partPayment} onChange={handlePartPaymentChange}>
        <ToggleButton value={"off"} variant="secondary">
          None
        </ToggleButton>
        <ToggleButton value={"monthly"} variant="secondary">
          Monthly
        </ToggleButton>
        <ToggleButton value={"quarterly"} variant="secondary">
          Quarterly
        </ToggleButton>
        <ToggleButton value={"yearly"} variant="secondary">
          Yearly
        </ToggleButton>
        <ToggleButton value={"custom"} variant="secondary">
          Custom
        </ToggleButton>
      </ToggleButtonGroup>
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
  setPartPayment,
  calculatePayments,
};

export default connect(mapStateToProps, mapDispatchToProps)(PartPaymentSelector);
