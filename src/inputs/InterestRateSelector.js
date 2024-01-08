import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import RangeHandler from "./RangeHandler";
import styles from "./RangeSelector.module.css"; // Import the CSS module

const InterestRateSelector = () => {
  const [interestRate, setInterestRate] = useState(5);

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
  }, []); // Empty dependency array to run this effect only once after initial render

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
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

export default InterestRateSelector;
