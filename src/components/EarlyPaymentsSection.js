import { faCheckCircle, faCoins, faCreditCard, faHandHoldingDollar, faPercent, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { connect } from "react-redux";

const EarlyPaymentsSection = ({
  uiData,
  // Add other relevant state values here if needed
}) => {
  // const [prepayments, setPrepayments] = useState("$0");
  // const [interestPayable, setInterestPayable] = useState("$0");
  // const [numberOfInstallments, setNumberOfInstallments] = useState("0");
  // const [accumulatedSavings, setAccumulatedSavings] = useState("$0");
  // const [monthlyInstallment, setMonthlyInstallment] = useState("$0");
  // const [totalRepayments, setTotalRepayments] = useState("$0");

  // Destructure values from uiData
  const { prepayments, interestPayable, numberOfInstallments, accumulatedSavings, monthlyInstallment, totalRepayments } = uiData;

  // Use useEffect to update the component state when uiData changes
  useEffect(() => {
    // Update component state with new values from Redux state
    // Here, you'll set the state using the Redux store values
    // setPrepayments(prepayments);
    // setInterestPayable(interestPayable);
    // setNumberOfInstallments(numberOfInstallments);
    // setAccumulatedSavings(accumulatedSavings);
    // setMonthlyInstallment(monthlyInstallment);
    // setTotalRepayments(totalRepayments);
  }, [uiData]);

  return (
    <section id="early_payments_section">
      <div className="container text-center py-3">
        <div className="row align-items-end">
          <div className="col pb-3">
            <div className="card border-secondary">
              <div className="card-header bg-secondary text-white">
                <h6 className="m-2">
                  <FontAwesomeIcon icon={faHandHoldingDollar} className="text-white" />
                  &nbsp;Total
                  <br />
                  Prepayments
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-secondary">
                  <span id="total_prepayments_made">{prepayments}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col pb-3">
            <div className="card border-dark-subtle">
              <div className="card-header bg-dark-subtle text-dark">
                <h6 className="m-2">
                  <FontAwesomeIcon icon={faPercent} className="text-dark" />
                  &nbsp;Interest
                  <br />
                  Payable
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-dark">
                  <span id="total_interest_payable">{interestPayable}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col pb-3">
            <div className="card border-success">
              <div className="card-header bg-success text-white">
                <h6 className="m-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-white" />
                  &nbsp;Number of
                  <br />
                  Installments
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-success">
                  <span id="actual_installments_made">{numberOfInstallments}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col pb-3">
            <div className="card border-info">
              <div className="card-header bg-info text-dark">
                <h6 className="m-2">
                  <FontAwesomeIcon icon={faCoins} className="text-dark" />
                  &nbsp;Savings
                  <br />
                  Accumulated
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-dark">
                  <span id="total_savings">{accumulatedSavings}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col pb-3">
            <div className="card border-danger">
              <div className="card-header bg-danger text-white">
                <h6 className="m-2">
                  <FontAwesomeIcon icon={faWallet} className="text-white" />
                  &nbsp;Monthly
                  <br />
                  Installment
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-danger">
                  <span id="monthly_installment">{monthlyInstallment}</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col pb-3">
            <div className="card border-primary">
              <div className="card-header bg-primary text-white">
                <h6 className="m-2">
                  <FontAwesomeIcon icon={faCreditCard} className="text-white" />
                  &nbsp;Total
                  <br />
                  Repayments
                </h6>
              </div>
              <div className="card-body">
                <h4 className="card-subtitle mb-2 text-primary">
                  <span id="total_amount_paid">{totalRepayments}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Map the Redux state to component props
const mapStateToProps = (state) => ({
  uiData: state.calculateProvider.uiData,
  // Map other relevant state values here if needed
});

// Connect your component to the Redux store
export default connect(mapStateToProps)(EarlyPaymentsSection);
