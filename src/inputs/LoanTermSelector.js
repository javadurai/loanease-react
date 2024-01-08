import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import RangeHandler from "./RangeHandler";
import styles from "./RangeSelector.module.css"; // Import the CSS module

const LoanTermSelector = () => {
  const [loanTerm, setLoanTerm] = useState(5);

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
  }, []); // Empty dependency array to run this effect only once after initial render

  const handleLoanTermChange = (event) => {
    setLoanTerm(event.target.value);
  };

  return (
    <div className={`${styles.holder}`}>
      <h6 className="card-title m-2">
        <i className="fas fa-wallet"></i> Loan Term (Years)
      </h6>
      <div className="d-flex justify-content-center align-items-center">
        <Form.Control id="loan_term" type="text" className={`${styles.input}`} value={loanTerm} onChange={handleLoanTermChange} />
      </div>
      <Form.Range className="form-range" min="0" max="15" step="1" value={loanTerm} id="loan_term_range" onChange={handleLoanTermChange} />
      <div className={`${styles.ticks} loan_term_ticks`}></div>
    </div>
  );
};

export default LoanTermSelector;
