import React from "react";
import PartPaymentSelector from "../inputs/PartPaymentSelector";
import LoanAmountSelector from "../inputs/LoanAmountSelector";
import InterestRateSelector from "../inputs/InterestRateSelector";
import LoanTermSelector from "../inputs/LoanTermSelector";
import LoanStartDatePicker from "../inputs/LoanStartDatePicker";
import PartPaymentInstallment from "../inputs/PartPaymentInstallment";

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
                  <LoanStartDatePicker />
                </div>
                <div className="col-md-6 border pb-3">
                  <PartPaymentSelector />
                </div>
                <div className="col-md-3 border pb-3">
                  <PartPaymentInstallment />
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
