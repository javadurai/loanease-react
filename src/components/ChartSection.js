import React from "react";

const ChartSection = () => {
  return (
    <section>
      <div className="chart-container ml-5 mr-5 bg-light">
        <div id="bar-chart-container" className="border">
          <canvas id="bar-chart-area" />
        </div>
        <div id="pie-chart-container" className="border">
          <canvas id="pie-chart-area" />
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
