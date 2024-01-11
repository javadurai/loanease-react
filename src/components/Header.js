import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faHandHoldingDollar, faRedo, faSmile, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { calculatePayments, setInterestRate, setLoanAmount, setLoanStartDate, setLoanTerm, setPartPayment, setPartPaymentInstallment } from "../actions";
import { getCurrentMonthFirstDate } from "../reducers";
// import { fas } from "@fortawesome/free-solid-svg-icons";

// Assuming setDefaultValues is a function to set default values

const Header = ({ calculatePayments, setInterestRate, setLoanTerm, setPartPayment, setPartPaymentInstallment, setLoanStartDate, setLoanAmount }) => {
  const setDefaultValues = () => {
    setInterestRate(5.8);
    setLoanTerm(4);
    setPartPayment("off");
    setPartPaymentInstallment("");
    setLoanStartDate(getCurrentMonthFirstDate());
    setLoanAmount(50000);
    calculatePayments(50000, 5.8, 4, "off", getCurrentMonthFirstDate(), "");
  };

  return (
    <header>
      <div className="sticky-top d-flex justify-content-between" style={{ height: "0" }}>
        <div>
          <small>
            <span className="badge bg-secondary">
              <FontAwesomeIcon icon={faCodeBranch} /> 1.8
            </span>
          </small>
        </div>
        <div className="mr-3 mt-3" id="defaultValuesButton">
          {/* onClick event handling */}
          <button onClick={setDefaultValues} className="btn btn-secondary">
            <FontAwesomeIcon icon={faRedo} />
          </button>
        </div>
      </div>

      <div className="text-center">
        <h2 className="display-4 p-3 app-title">
          <FontAwesomeIcon icon={faHandHoldingDollar} /> LoanEase
        </h2>
        <h4 className="text-secondary">Your Personal Loan Repayment Schedule Planner</h4>

        <header>
          <div className="card">
            <div className="card-header">
              <h1 className="card-title text-center">Welcome to LoanEase</h1>
            </div>
            <div className="card-body">
              <h3 className="card-text text-center">
                <FontAwesomeIcon icon={faUser} />
                Hello, <strong className="text-secondary">Savvy Planner!</strong>
              </h3>
              <p className="card-text text-center">
                Looking to master the art of loan repayment? You're at the right place! <FontAwesomeIcon icon={faSmile} />
              </p>
              <p className="card-text text-center">
                At <strong className="text-secondary">LoanEase</strong>, we understand that managing loan repayments can be challenging. Be it mortgages, student loans, car loans, or personal loans, we help you strategize your repayments effectively and efficiently. With <strong className="text-secondary">LoanEase</strong>, make your loan repayment journey exciting and stress-free! <FontAwesomeIcon icon={faThumbsUp} />
              </p>
            </div>
          </div>
        </header>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  // uiData: state.calculateProvider.uiData,
  loanAmount: state.calculateProvider.loanAmount,
  interestRate: state.calculateProvider.interestRate,
  loanTerm: state.calculateProvider.loanTerm,
  partPayment: state.calculateProvider.partPayment,
  loanStartDate: state.calculateProvider.loanStartDate,
  partPaymentInstallment: state.calculateProvider.partPaymentInstallment,
});

const mapDispatchToProps = {
  calculatePayments,
  setInterestRate,
  setLoanTerm,
  setPartPayment,
  setPartPaymentInstallment,
  setLoanStartDate,
  setLoanAmount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
