import React, { useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import RangeHandler from "./RangeHandler";
import styles from "./RangeSelector.module.css"; // Import the CSS module

const LoanAmountSelector = () => {
  const [loanAmount, setLoanAmount] = useState(50000);

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
  }, []); // Empty dependency array to run this effect only once after initial render

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  return (
    <div className={`${styles.holder}`}>
      <h6 className="card-title m-2">
        <i className="fas fa-wallet"></i> Principal Loan Amount
      </h6>
      <div className="d-flex justify-content-center align-items-center">
        <InputGroup id="loan_amount_group" className={`${styles.input}`}>
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control id="loan_amount" type="text" value={loanAmount} onChange={handleLoanAmountChange} />
        </InputGroup>
      </div>
      <Form.Range className="form-range" min="0" max="100000" step="500" value={loanAmount} id="loan_amount_range" onChange={handleLoanAmountChange} />
      <div className={`${styles.ticks} loan_amount_ticks`}></div>
    </div>
  );
};

export default LoanAmountSelector;
