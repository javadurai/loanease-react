export const setLoanAmount = (amount) => ({
  type: "SET_LOAN_AMOUNT",
  payload: amount,
});

export const setInterestRate = (interestRate) => ({
  type: "SET_INTEREST_RATE",
  payload: interestRate,
});

export const setPartPayment = (partPayment) => ({
  type: "SET_INTEREST_RATE",
  payload: partPayment,
});

export const setLoanStartDate = (loanStartDate) => ({
  type: "SET_LOAN_START_DATE",
  payload: loanStartDate,
});

export const setPartPaymentInstallment = (partPaymentInstallment) => ({
  type: "SET_PART_PAYMENT_INSTALLMENT",
  payload: partPaymentInstallment,
});

export const setLoanTerm = (loanTerm) => ({
  type: "SET_LOAN_TERM",
  payload: loanTerm,
});

export const calculatePayments = (loanAmount, interestRate, loanTerm, partPayment, loanStartDate, newPartPaymentInstallment) => ({
  type: "CALCULATE_PAYMENTS",
  payload: { loanAmount, interestRate, loanTerm, partPayment, loanStartDate, newPartPaymentInstallment },
});
