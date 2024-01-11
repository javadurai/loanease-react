import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController } from "chart.js";
import { connect } from "react-redux";
import "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styles from "./ChartSection.module.css"; // Import the CSS module
import { formatToAmount } from "../handlers/ValidationHanders";

ChartJS.register(ArcElement, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController);

let barChartLabels = [];
const INTEREST_BG_COLOR = "rgb(220, 53, 69)";
const PRINCIPAL_BG_COLOR = "rgb(25, 135, 84)";
const AMOUNT_LABELS = {
  principal: "Principal",
  Interest: "Interest",
  Balance: "Balance",
};

const TOOLTIP_STYLE = {
  borderColor: "rgb(0, 0, 255)",
  backgroundColor: "rgb(255, 0, 0)",
  borderWidth: 2,
  borderDash: [2, 2],
  borderRadius: 2,
};

let barChartData = {
  labels: barChartLabels,
  datasets: [
    {
      type: "line",
      label: "Balance",
      borderColor: "rgb(220, 53, 69)",
      // borderWidth: 2,
      // fill: false,
      data: [],
      yAxisID: "line-y-axis",
      stack: "combined",
      order: 1,
    },
    {
      type: "bar",
      label: "Principal",
      backgroundColor: PRINCIPAL_BG_COLOR,
      data: [],
      pointStyle: "rect",
      yAxisID: "bar-y-axis",
      stack: "combined",
      order: 2,
    },
    {
      type: "bar",
      label: "Interest",
      backgroundColor: INTEREST_BG_COLOR,
      data: [],
      pointStyle: "triangle",
      yAxisID: "bar-y-axis",
      stack: "combined",
      order: 3,
    },
  ],
};

// Helper function to generate chart options
const createLabelStrings = (label, key, axisData) => {
  if (label === AMOUNT_LABELS.Balance) {
    return [`Year: ${key}`, `Balance: ${formatToAmount(axisData.remainingLoanAmount)}`, `Cumulative Repayment: ${(axisData.loanPaid * 100).toFixed(2)}%`];
  }

  return [`Year: ${key}`, `${label}: ${formatToAmount(axisData[label.toLowerCase()])}`, `Total Amount Paid: ${formatToAmount(axisData.principal + axisData.interest)}`];
};

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Payment Per Year",
    },
    datalabels: {
      color: "#fff",
      font: { weight: "bold" },
      display: false,
    },
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    "bar-y-axis": {
      position: "right",
      beginAtZero: false,
      title: {
        display: true,
        text: "Principal and Interest",
      },
      grid: { display: false },
    },
    "line-y-axis": {
      position: "left",
      beginAtZero: false,
      title: {
        display: true,
        text: "Balance",
      },
      grid: { display: false },
    },
    // x: {
    //   stacked: true,
    // },
    y: {
      display: false,
    },
  },
};

export const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const dataArr = ctx.chart.data.datasets[0].data;
        const sum = dataArr.reduce((a, b) => a + b, 0);
        const percentage = ((value * 100) / sum).toFixed(2) + "%";
        return percentage;
      },
      color: "#fff",
      font: {
        weight: "bold",
      },
    },
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    title: {
      display: true,
      text: "Break-up of Total Payment",
    },
  },
};

export const pieChartData = {
  labels: ["Principal Amount", "Total Interest"],
  datasets: [
    {
      data: [0, 0],
      backgroundColor: [PRINCIPAL_BG_COLOR, INTEREST_BG_COLOR],
      borderWidth: 1,
    },
  ],
};

const ChartSection = ({ paymentSchedule, chartData }) => {
  const [barChartDataState, setBarChartDataState] = useState(barChartData);
  const [pieChartDataState, setPieChartDataState] = useState(pieChartData);
  const [barChartOptionsState, setBarChartOptionsState] = useState(barChartOptions);
  // const [compiledChartData, setCompiledChartData] = useState(chartData.compiledData);

  useEffect(() => {
    setBarChartDataState((prevState) => ({
      ...prevState,
      labels: chartData.interval,
      datasets: [
        {
          ...prevState.datasets[2],
          data: chartData.interest,
        },
        {
          ...prevState.datasets[1],
          data: chartData.principal,
        },
        {
          ...prevState.datasets[0],
          data: chartData.remainingLoan,
        },
      ],
    }));

    setBarChartOptionsState((prevState) => ({
      ...prevState,
      plugins: {
        ...prevState.plugins,
        // tooltip: {
        //   usePointStyle: false,
        //   displayColors: false,
        //   callbacks: {
        //     labelColor: (context) => TOOLTIP_STYLE,
        //     labelTextColor: (context) => "#fff",
        //     title: (context) => "",
        //     label: (context) => {
        //       const label = context.dataset.label || "";
        //       const key = context.label;
        //       const axisData = chartData.compiledData[key];
        //       console.log(axisData);
        //       return createLabelStrings(label, key, axisData);
        //     },
        //   },
        // },
      },
    }));
    setPieChartDataState((prevState) => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0],
          data: [chartData.loanAmount, chartData.interestPayable],
        },
      ],
    }));
  }, [paymentSchedule, chartData]);

  return (
    <section>
      <div className={`${styles.chart} container`}>
        <div className="chart-container ml-5 mr-5 bg-light row">
          <div id="bar-chart-container" className="border col-8">
            <Bar options={barChartOptionsState} data={barChartDataState} style={{ height: "400px" }} />
          </div>
          <div id="pie-chart-container" className="border col-4">
            <Pie options={pieChartOptions} data={pieChartDataState} plugins={[ChartDataLabels]} style={{ height: "400px" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Map the Redux state to component props
const mapStateToProps = (state) => ({
  paymentSchedule: state.calculateProvider.paymentSchedule,
  chartData: state.calculateProvider.chartData,
});

// Connect your component to the Redux store
export default connect(mapStateToProps)(ChartSection);
