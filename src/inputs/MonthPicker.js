import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MonthPicker = ({ selected, onChange }) => {
  const [startDate, setStartDate] = useState(selected);

  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return <DatePicker selected={startDate} onChange={handleChange} dateFormat="MMM-yyyy" showMonthYearPicker className="form-control" />;
};

export default MonthPicker;
