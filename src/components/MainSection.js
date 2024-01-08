import React from "react";
import PartPaymentSelector from "../inputs/PartPaymentSelector";
import LoanAmountSelector from "../inputs/LoanAmountSelector";
import InterestRateSelector from "../inputs/InterestRateSelector";
import LoanTermSelector from "../inputs/LoanTermSelector";

const MainSection = () => {
  return (
    <main>
      <div className="">
        <div className="mr-2">
          <div className="m-1">
            <div className="container-fluid text-center">
              {/* First Row */}
              <div className="row">
                <div className="col-md-12 border pb-3">
                  <LoanAmountSelector />
                </div>
              </div>

              {/* Row Two */}
              <div className="row">
                <div className="col-md-6 border pb-3">
                  <InterestRateSelector />
                </div>
                <div className="col-md-6 border pb-3">
                  <LoanTermSelector />
                </div>
              </div>

              {/* Row Three */}
              <div className="row">
                <div className="col-md-3 border pb-3">
                  <h6 className="card-title m-2">
                    <i className="fas fa-calendar-alt"></i> Loan Start Date
                  </h6>
                  <div className="input-group date btn-group app-input" id="load_start_date_group">
                    <div className="input-group-text">
                      &nbsp;<i className="fas fa-calendar-alt"></i>
                    </div>
                    <input id="loan_start_date" type="text" className="form-control form-control-sm monthpicker date" readOnly data-bs-toggle="popover" data-bs-title="Loan Start Date" data-bs-content="The date the loan starts. By default, the current month and year are selected." />
                  </div>
                </div>
                <div className="col-md-6 border pb-3">
                  <h6 className="card-title m-2">
                    <i className="fas fa-check-square"></i> Part Payments
                  </h6>
                  <PartPaymentSelector />
                </div>
                <div className="col-md-3 border pb-3">
                  <h6 className="card-title m-2">
                    <i className="fas fa-coins"></i> Part Payment Per Installment
                  </h6>
                  <div className="input-group btn-group app-input">
                    <div className="input-group-text">$</div>
                    <input id="part_payment_installment" type="text" className="form-control form-control-sm numeric" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
