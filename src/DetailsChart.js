import React, { useState } from "react";
// import Chartjs from "chart.js";
import { Line } from "@reactchartjs/react-chart.js";
import UpDown from "./UpDown";
import { Link } from "react-router-dom";

const DetailsChart = ({ data }) => {
  // const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat] = useState("24h");

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

  if (detail) {
    return (
      <>
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Cryptomonnaie
          </Link>
          <span className="breadcrumb-separator"></span>
          <p className="breadcrumb__text">{detail.symbol.toUpperCase()}</p>
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
              <div>Prix</div>
              <div className="subtitle">${detail.current_price.toFixed(2)}</div>
            </div>
            <div className="balance">
              <div>1h</div>
              <div className="subtitle">
                <UpDown
                  value={detail.price_change_percentage_1h_in_currency.toFixed(
                    2
                  )}
                  classe={"cryptos-card__subtext"}
                ></UpDown>
              </div>
            </div>
            <div className="balance">
              <div>24h</div>
              <div className="subtitle">
                <UpDown
                  value={detail.price_change_percentage_24h_in_currency.toFixed(
                    2
                  )}
                  classe={"cryptos-card__subtext"}
                ></UpDown>
              </div>
            </div>
            <div className="balance">
              <div>7j</div>
              <div className="subtitle">
                <UpDown
                  value={detail.price_change_percentage_7d_in_currency.toFixed(
                    2
                  )}
                  classe={"cryptos-card__subtext"}
                ></UpDown>
              </div>
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
