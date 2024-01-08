import React from "react";

const AmortizationTable = () => {
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
              <th className="text-center align-middle">
                Principal
                <br /> (A)
              </th>
              <th className="text-center align-middle">
                Interest
                <br /> (B)
              </th>
              <th className="text-center align-middle">
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
          <tbody></tbody>
        </table>
      </div>
    </section>
  );
};

export default AmortizationTable;
