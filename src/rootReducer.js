import { combineReducers } from "redux";
import { loanAmountReducer, interestRateReducer, loanStartDateReducer, loanTermReducer, partPaymentInstallmentReducer, partPaymentReducer, calculatePaymentsReducer } from "./reducers";

const rootReducer = combineReducers({
  loanAmountProvider: loanAmountReducer,
  interestRateProvider: interestRateReducer,
  partPaymentProvider: partPaymentReducer,
  loanTermProvider: loanTermReducer,
  loanStartDateProvider: loanStartDateReducer,
  partPaymentInstallmentProvider: partPaymentInstallmentReducer,
  calculateProvider: calculatePaymentsReducer,
  // other reducers...
});

export default rootReducer;
