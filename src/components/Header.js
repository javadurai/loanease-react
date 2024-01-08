import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fas } from "@fortawesome/free-solid-svg-icons";

// Assuming setDefaultValues is a function to set default values
const setDefaultValues = () => {
  // Logic to set default values
};

const Header = () => {
  return (
    <header>
      <div className="sticky-top d-flex justify-content-between" style={{ height: "0" }}>
        <div>
          <small>
            <span className="badge bg-secondary">
              <FontAwesomeIcon icon={["fa-solid", "code-branch"]} /> 1.8
            </span>
          </small>
        </div>
        <div className="mr-3 mt-3" id="defaultValuesButton">
          {/* onClick event handling */}
          <button onClick={setDefaultValues} className="btn btn-secondary">
            <FontAwesomeIcon icon="fas fa-redo" />
          </button>
        </div>
      </div>

      <div className="text-center">
        <h2 className="display-4 p-3 app-title">
          <i className="fas fa-hand-holding-usd"></i> LoanEase
        </h2>
        <h4 className="text-secondary">Your Personal Loan Repayment Schedule Planner</h4>

        <header>
          <div className="card">
            <div className="card-header">
              <h1 className="card-title text-center">Welcome to LoanEase</h1>
            </div>
            <div className="card-body">
              <h3 className="card-text text-center">
                <i className="fas fa-user"></i>
                Hello, <strong className="text-secondary">Savvy Planner!</strong>
              </h3>
              <p className="card-text text-center">
                Looking to master the art of loan repayment? You're at the right place! <i className="fas fa-smile"></i>
              </p>
              <p className="card-text text-center">
                At <strong className="text-secondary">LoanEase</strong>, we understand that managing loan repayments can be challenging. Be it mortgages, student loans, car loans, or personal loans, we help you strategize your repayments effectively and efficiently. With <strong className="text-secondary">LoanEase</strong>, make your loan repayment journey exciting and stress-free! <i className="fas fa-thumbs-up"></i>
              </p>
            </div>
          </div>
        </header>
      </div>
    </header>
  );
};

export default Header;
