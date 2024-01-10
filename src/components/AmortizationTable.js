import React, { useEffect } from "react";
import { connect } from "react-redux";

const AmortizationTable = ({ paymentSchedule }) => {
  // Use useEffect to update the component state when paymentSchedule changes
  useEffect(() => {}, [paymentSchedule]);

  return (
    <section>
      <div id="amortization_table" className="align-middle">
        <table className="table table-sm table-bordered table-striped" id="schedule">
          <thead className="table-light">
            <tr>
              <th className="text-center align-middle">#</th>
              <th className="text-center align-middle">Month</th>
              <th className="text-center align-middle">
                Opening <br /> Balance
              </th>
              <th className="text-center align-middle bg-success text-light">
                Principal
                <br /> (A)
              </th>
              <th className="text-center align-middle bg-danger text-light">
                Interest
                <br /> (B)
              </th>
              <th className="text-center align-middle bg-secondary text-light">
                Total Payment <br /> (A + B)
              </th>
              <th className="text-center align-middle">
                Closing <br /> Balance
              </th>
              <th className="text-center align-middle detailed-info">
                Cumulative <br />
                Repayment
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentSchedule.map((installment, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{installment.installmentDate}</td>
                <td className="text-center">{installment.openingBalance}</td>
                <td className="text-center">{installment.principal}</td>
                <td className="text-center">{installment.monthlyInterest}</td>
                <td className="text-center">{installment.monthlyPayment}</td>
                <td className="text-center">{installment.remainingLoanAmount}</td>
                <td className="text-center detailed-info">{installment.loanPaid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// Map the Redux state to component props
const mapStateToProps = (state) => ({
  paymentSchedule: state.calculateProvider.paymentSchedule,
  // Map other relevant state values here if needed
});

// Connect your component to the Redux store
export default connect(mapStateToProps)(AmortizationTable);
