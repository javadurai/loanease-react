// reducers.js

import { calculateLoanSchedule } from "./handlers/PaymentCalculator";

export const getCurrentMonthFirstDate = () => {
  const currentDate = new Date();

  // Set the date to the first day of the month
  currentDate.setDate(1);

  return currentDate;
};

const initialState = {
  loanAmount: 50000,
  interestRate: 5.8,
  partPayment: "off",
  loanTerm: 4,
  loanStartDate: getCurrentMonthFirstDate(),
  partPaymentInstallment: "",
  paymentSchedule: [],
  uiData: {
    prepayments: 0,
    interestPayable: 0,
    numberOfInstallments: 0,
    accumulatedSavings: 0,
    monthlyInstallment: 0,
    totalRepayments: 0,
    interestPayableInPlain: 0,
  },
  chartData: {
    interestPayable: 0,
    loanAmount: 0,
    interval: [],
    interest: [],
    principal: [],
    remainingLoan: [],
    compiledData: [],
  },
};

calculateLoanSchedule(initialState);

export const loanAmountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOAN_AMOUNT":
      return {
        ...state,
        loanAmount: action.payload,
      };
    default:
      return state;
  }
};

export const interestRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INTEREST_RATE":
      return {
        ...state,
        interestRate: action.payload,
      };
    default:
      return state;
  }
};

export const partPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PART_PAYMENT":
      return {
        ...state,
        partPayment: action.payload,
      };
    default:
      return state;
  }
};

export const loanTermReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOAN_TERM":
      return {
        ...state,
        loanTerm: action.payload,
      };
    default:
      return state;
  }
};

export const loanStartDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOAN_START_DATE":
      return {
        ...state,
        loanStartDate: action.payload,
      };
    default:
      return state;
  }
};

export const partPaymentInstallmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PART_PAYMENT_INSTALLMENT":
      return {
        ...state,
        partPaymentInstallment: action.payload,
      };
    default:
      return state;
  }
};

export const calculatePaymentsReducer = (state = initialState, action) => {
  // Handle CALCULATE_PAYMENTS action to update prepayments, interestPayable, etc.
  switch (action.type) {
    case "CALCULATE_PAYMENTS":
      const newState = {
        ...state,
        loanAmount: action.payload.loanAmount,
        interestRate: action.payload.interestRate,
        loanTerm: action.payload.loanTerm,
        partPayment: action.payload.partPayment,
        loanStartDate: action.payload.loanStartDate,
        partPaymentInstallment: action.payload.partPaymentInstallment,
      };

      calculateLoanSchedule(newState);

      return newState;
    default:
      return state;
  }
};
