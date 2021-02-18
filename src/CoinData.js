import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";

const CoinData = ({ data }) => {
  const { detail } = data;

  function getNumber(num) {
    const units = ["M", "B", "T", "Q"];
    const unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
    const r = unit % 3;
    const x = Math.abs(Number(num)) / Number("1.0e+" + (unit - r)).toFixed(2);
    return x.toFixed(2) + units[Math.floor(unit / 3) - 2];
  }
  const renderHighPrice24h = () => {
    if (detail) {
      return `${detail.high_24h}`;
    }
  };
  const renderLowPrice24h = () => {
    if (detail) {
      return `${detail.low_24h}`;
    }
  };
  const renderHighAll = () => {
    if (detail) {
      return `${detail.ath}`;
    }
  };
  const renderLowAll = () => {
    if (detail) {
      return `${detail.atl}`;
    }
  };
  const numero = {
    labels: ["24h", "Toutes"],
    datasets: [
      {
        label: "Prix le plus haut",
        data: [renderHighPrice24h(), renderHighAll()],
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        minBarLength: 10,
        label: "Prix le plus bas",
        data: [renderLowPrice24h(), renderLowAll()],
        backgroundColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  if (detail) {
    return (
      <>
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-sm-6 coindata">
                <div className="panel">
                  <div className="panel-header">
                    <h4>Variation Prix</h4>
                  </div>
                  <div className="content pt-1 pb-1">
                    <div className="form">
                      <Bar data={numero} options={options} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 coindata">
                <div className="panel">
                  <div className="panel-header">
                    <h4>Détails</h4>
                  </div>
                  <div className="content">
                    <div className="form">
                      <div className="calculation">
                        <span className="description">Prix</span>
                        <span className="value">${detail.current_price} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">Popularité</span>
                        <span className="value">{detail.market_cap_rank} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">
                          Capitalisation boursière
                        </span>
                        <span className="value">
                          ${getNumber(detail.market_cap)}{" "}
                        </span>
                      </div>

                      <div className="calculation">
                        <span className="description">Volume (24 heures)</span>
                        <span className="value">
                          ${getNumber(detail.total_volume)}{" "}
                        </span>
                      </div>
                      <div className="calculation">
                        <span className="description">
                          Approvisionnement en circulation
                        </span>
                        <span className="value">
                          {getNumber(detail.circulating_supply)} &nbsp;
                          {detail.symbol.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CoinData;
