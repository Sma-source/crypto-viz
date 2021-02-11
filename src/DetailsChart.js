import React, { useRef, useEffect, useState } from "react";
// import Chartjs from "chart.js";
import { Line } from "@reactchartjs/react-chart.js";
import UpDown from "./UpDown";

const DetailsChart = ({ data }) => {
  // const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  // useEffect(() => {
  //   if (chartRef && chartRef.current && detail) {
  //     const chartInstance = new Chartjs(chartRef.current, {
  //       type: "line",
  //       data: {
  //         datasets: [
  //           {
  //             label: `${detail.name} price`,
  //             data: determineTimeFormat(),
  //             backgroundColor: "white",
  //             borderColor: "red",
  //             pointRadius: 1,
  //             fill: false,
  //           },
  //         ],
  //       },
  //       options: {
  //         lineHeightAnnotation: {
  //           always: true,
  //           hover: true,
  //           lineWeight: 1.5,
  //         },

  //         animation: {
  //           duration: 2000,
  //         },
  //         maintainAspectRatio: true,
  //         responsive: true,
  //         scales: {
  //           x: {
  //             max: 5000,
  //             min: 0,
  //             type: "category",
  //             labels: ["January", "February", "March", "April", "May", "June"],
  //           },
  //         },
  //       },
  //     });
  //   }
  // });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          {/* <img className="details-icon" src={detail.image} alt={detail.name} /> */}

          <p>${detail.current_price.toFixed(2)}</p>
          <UpDown
            value={detail.price_change_percentage_24h.toFixed(2)}
            classe={"cryptos-chart__subtext"}
          ></UpDown>

          {/* <h1>{detail.name}</h1>
          <h2>{detail.symbol.toUpperCase()} </h2>

          <p className="details-price">${detail.current_price.toFixed(2)}</p>
          <UpDown
            value={detail.price_change_percentage_24h.toFixed(2)}
            classe={"cryptos-chart__subtext"}
          ></UpDown> */}
        </>
      );
    }
  };
  const renderImg = () => {
    if (detail) {
      return (
        <>
          <img className="icon" src={detail.image} alt={detail.name} />
        </>
      );
    }
  };
  const getDetailsName = () => {
    if (detail) {
      return `${detail.name} price`;
    }
  };
  const chart = {
    datasets: [
      {
        label: getDetailsName(),
        data: determineTimeFormat(),

        fill: false,
        showLine: true, // disable for a single dataset
        borderWidth: 2.5,
        backgroundColor: "#00d395",
        borderColor: "#00d395",
        pointRadius: 1,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "white",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 5,
        pointRotation: 90,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    responsive: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    legend: {
      display: false,
      labels: {
        // This more specific font property overrides the global property
        display: false,
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          distribution: "linear",
        },
      ],
    },
    tooltips: {
      mode: "nearest",
    },
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    animation: {
      duration: 0, // general animation time
    },
    hover: {
      animationDuration: 0, // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    // showLines: false, // disable for all datasets
  };

  {
    /* <div className="col-md-6">
          <div className="chart-button mt-1">
            <button
              onClick={() => setTimeFormat("24h")}
              className="btn btn-outline-secondary btn-sm"
            >
              24h
            </button>
            <button
              onClick={() => setTimeFormat("7d")}
              className="btn btn-outline-secondary btn-sm mx-1"
            >
              7d
            </button>
            <button
              onClick={() => setTimeFormat("1y")}
              className="btn btn-outline-secondary btn-sm"
            >
              1y
            </button>
          </div>
        </div> */
  }
  if (detail) {
    return (
      <>
        <div className="breadcrumb">
          <a href="#" className="breadcrumb-link">
            Markets
          </a>
          <span className="breadcrumb-separator"></span>
          <p className="breadcrumb__text">ETH</p>
        </div>
        <div className="row align-between">
          <div className="identity">
            <span className="icon">{renderImg()}</span>
            <div>
              <div className="name">{detail.name} </div>
            </div>
          </div>
          <div className="row">
            <div className="balance">
              <div>Total</div>
              <div className="subtitle">0.19%</div>
            </div>
            <div className="balance">
              <div>Total</div>
              <div className="subtitle">0.19%</div>
            </div>
            <div className="balance">
              <div>Total</div>
              <div className="subtitle">0.19%</div>
            </div>
            <div className="balance">
              <div>Total</div>
              <div className="subtitle">0.19%</div>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <Line data={chart} options={options} />
        </div>
      </>
    );
  }
};
export default DetailsChart;
