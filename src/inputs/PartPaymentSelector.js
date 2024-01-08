import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const PartPaymentSelector = () => {
  const [partPayment, setPartPayment] = useState("off");

  const handlePartPaymentChange = (value) => {
    console.log(value);
    setPartPayment(value);
    // You can perform further actions here based on the selected partPayment value
  };

  return (
    <ToggleButtonGroup type="radio" name="part_payments" value={partPayment} onChange={handlePartPaymentChange}>
      <ToggleButton value="off" variant="secondary">
        None
      </ToggleButton>
      <ToggleButton value="monthly" variant="secondary">
        Monthly
      </ToggleButton>
      <ToggleButton value="quarterly" variant="secondary">
        Quarterly
      </ToggleButton>
      <ToggleButton value="yearly" variant="secondary">
        Yearly
      </ToggleButton>
      <ToggleButton value="custom" variant="secondary">
        Custom
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default PartPaymentSelector;
