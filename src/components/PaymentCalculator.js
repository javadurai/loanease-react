import { formatToAmount, formatToPercentage } from "./ValidationHanders";

const LOCALE_LANG = navigator.language;

/**
 * Function to calculate the detailed loan schedule with support for part payments.
 *
 * @param {number} loanAmount - The initial amount of the loan. This is the principal amount that the loan was issued for.
 * @param {number} interestRate - The yearly interest rate as a percentage (e.g., for 5%, pass 5).
 * @param {number} months - The total number of months for which the loan was issued.
 * @param {string} [partPaymentFrequency="off"] - The frequency of part payments. This can be 'off', 'monthly', 'quarterly', 'yearly', or 'custom'.
 *                                              If 'off', part payments will not be considered in the calculations.
 *                                              If 'monthly', 'quarterly', or 'yearly', part payments will be made every month, every 3 months, or every 12 months respectively, using the value of the partPayment parameter.
 *                                              If 'custom', the function will expect a customPartPaymentSchedule array, with each object in the array specifying the installment number and part payment amount.
 * @param {number} [partPayment=0] - The amount of part payment. This will be used if the partPaymentFrequency is set to 'monthly', 'quarterly', or 'yearly'.
 * @param {Date} [startDate=new Date()] - The date of the first installment. The function will calculate the dates of subsequent installments by adding a month to this date for each installment.
 * @param {Object[]} [customPartPaymentSchedule=[]] - Array of custom part payment objects, each containing the installment number and part payment amount.
 *                                                   This will be used if partPaymentFrequency is set to 'custom'.
 *                                                   Each object in the array should be in the following format: { "installmentNumber": x, "partPayment": y }, where x is the installment number and y is the part payment amount for that installment.
 *
 * @returns {Object} An object containing the loan schedule as an array of objects and the total amounts of part payments made, interest paid, money saved by making part payments, monthly installment to be paid, and total amount paid.
 *                   Each object in the schedule array contains detailed information about each installment, including the installment number and date, opening balance, principal, interest, total payment, part payment, total payment including part payment, closing balance, and loan paid till today as a percentage.
 *
 * Note: All monetary amounts in the output are formatted as strings in the 'total_amount_paid' locale and 'USD' currency.
 *       To change the locale or currency, modify the 'toAmount' helper function inside this function.
 */
export const calculateLoanSchedule = (currentState) => {
  let loanAmount = parseInt(currentState.loanAmount);
  let interestRate = parseFloat(currentState.interestRate);
  let months = currentState.loanTerm * 12;
  let partPaymentFrequency = currentState.partPayment;
  let partPayment = parseInt(currentState.partPaymentInstallment);
  let startDate = currentState.loanStartDate;

  console.log(currentState);

  const customPartPaymentSchedule = [];
  // calculate the monthly interest rate
  const monthlyInterestRate = interestRate / (12 * 100);
  // calculate the monthly payment using the loan payment formula
  //   const monthlyPayment = Math.round((loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months)));
  const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -months));

  // remaining loan amount, starting with the initial full loan amount
  let remainingLoanAmount = loanAmount;
  // total interest paid, starting at 0
  let totalInterestPaid = 0;
  // total part payment, starting at 0
  let totalPartPayment = 0;
  // the date of the first installment
  let installmentDate = new Date(startDate);

  //let totalPaymentToBePaid = 0;

  // array to hold the schedule
  let schedule = [];

  // loop through each month
  for (let installmentNumber = 1; installmentNumber <= months; installmentNumber++) {
    // calculate the interest for the current month
    let monthlyInterest = remainingLoanAmount * monthlyInterestRate;
    // calculate the principal for the current month
    let principal = monthlyPayment - monthlyInterest;
    // opening balance for the current month
    let openingBalance = remainingLoanAmount;
    // initialize part payment made in the current month
    let partPaymentMade = 0;

    //totalPaymentToBePaid += monthlyPayment;

    // check the part payment frequency
    if (partPaymentFrequency !== "off") {
      if (partPaymentFrequency === "monthly" || (partPaymentFrequency === "quarterly" && installmentNumber % 3 === 0) || (partPaymentFrequency === "yearly" && installmentNumber % 12 === 0)) {
        partPaymentMade = partPayment;
      } else if (partPaymentFrequency === "custom") {
        // find if there is a custom part payment for the current installment
        let customPartPayment = customPartPaymentSchedule.find((x) => x.installmentNumber === installmentNumber);
        if (customPartPayment) {
          // convert the part payment amount to number
          partPaymentMade = Number(customPartPayment.partPayment.replace(/[^0-9.-]+/g, ""));
        }
      }
    }

    // check if a part payment was made in the current month
    if (partPaymentMade) {
      // increase the principal by the part payment
      principal += partPaymentMade;
      // reduce the remaining loan amount by the part payment
      remainingLoanAmount -= partPaymentMade;
      // increase the total part payment by the part payment
      totalPartPayment += partPaymentMade;
    }

    // reduce the remaining loan amount by the principal
    remainingLoanAmount -= principal;

    // if the remaining loan amount is less than or equal to 0, make adjustments
    if (remainingLoanAmount <= 0) {
      // adjust the principal by adding the negative remaining loan amount
      principal += remainingLoanAmount;
      // increase the total interest paid by the monthly interest
      //   totalInterestPaid += monthlyInterest;
      // set the remaining loan amount to 0
      remainingLoanAmount = 0;
    }

    // increase the total interest paid by the monthly interest
    totalInterestPaid += monthlyInterest;

    // create an object for the current installment
    let installment = {
      installmentNumber: installmentNumber,
      installmentDate: installmentDate.toLocaleDateString(LOCALE_LANG, { month: "short", year: "numeric" }),
      openingBalance: formatToAmount(openingBalance),
      principal: formatToAmount(principal),
      monthlyInterest: formatToAmount(monthlyInterest),
      monthlyPayment: formatToAmount(monthlyPayment),
      partPaymentMade: formatToAmount(partPaymentMade),
      monthlyPaymentWithPartPayment: formatToAmount(monthlyPayment + partPaymentMade),
      remainingLoanAmount: formatToAmount(remainingLoanAmount),
      loanPaid: formatToPercentage((loanAmount - remainingLoanAmount) / loanAmount),
      monthlyInterestPlain: monthlyInterest,
      monthlyPaymentWithPartPaymentPlain: monthlyPayment + partPaymentMade,
      principalPlain: principal,
      remainingLoanAmountPlain: remainingLoanAmount,
      loanPaidPlain: (loanAmount - remainingLoanAmount) / loanAmount,
    };

    // add the current installment to the schedule
    schedule.push(installment);
    // move the installment date to the next month
    installmentDate.setMonth(installmentDate.getMonth() + 1);

    // if the remaining loan amount is 0 or less, break the loop
    if (remainingLoanAmount <= 0) {
      break;
    }
  }

  currentState.paymentSchedule = schedule;

  currentState.uiData = {
    prepayments: formatToAmount(totalPartPayment),
    interestPayable: formatToAmount(totalInterestPaid),
    numberOfInstallments: schedule.length,
    accumulatedSavings: formatToAmount(monthlyPayment * months - (loanAmount + totalInterestPaid)),
    monthlyInstallment: formatToAmount(monthlyPayment),
    totalRepayments: formatToAmount(loanAmount + totalInterestPaid + totalPartPayment),
  };

  // Prep Chart Data
  // Group data by year and calculate the sum of principal, monthlyInterest, and remainingLoanAmount for each year
  let groupedDataByYear = schedule.reduce((accumulator, currentValue) => {
    let year = currentValue.installmentDate.split(" ")[1];
    if (!accumulator[year]) {
      accumulator[year] = {
        principal: 0,
        interest: 0,
        remainingLoanAmount: Infinity, // set initial remainingLoanAmount to Infinity
        loanPaid: 0,
      };
    }
    accumulator[year].principal += parseInt(currentValue.principalPlain);
    accumulator[year].interest += parseInt(currentValue.monthlyInterestPlain);
    let currentBalance = parseInt(currentValue.remainingLoanAmountPlain);
    accumulator[year].remainingLoanAmount = Math.min(accumulator[year].remainingLoanAmount, currentBalance); // update only if current balance is lower
    accumulator[year].loanPaid = parseFloat(currentValue.loanPaidPlain);
    return accumulator;
  }, {});

  // Extract labels/dates, principal, monthlyInterest and remainingLoanAmount datasets
  let interval = Object.keys(groupedDataByYear);
  let principal = Object.values(groupedDataByYear).map((item) => item.principal);
  let interest = Object.values(groupedDataByYear).map((item) => item.interest);
  let remainingLoan = Object.values(groupedDataByYear).map((item) => item.remainingLoanAmount);

  currentState.chartData = {
    interestPayable: totalInterestPaid,
    loanAmount: loanAmount,
    interval: interval,
    interest: interest,
    principal: principal,
    remainingLoan: remainingLoan,
  };

  console.log(currentState);
};
