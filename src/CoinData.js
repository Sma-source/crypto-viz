import React from "react";
import Details from "./pages/Details";

const CoinData = ({ data }) => {
  const { detail } = data;
  if (detail) {
    return (
      <>
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-sm-6 coindata">
                <div className="panel">
                  <div className="panel-header">
                    <h4>Market Details</h4>
                  </div>
                  <div className="content">
                    <div className="form">
                      <div className="calculation">
                        <span className="description">Price</span>
                        <span className="value">${detail.current_price} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">Market Cap</span>
                        <span className="value">{detail.market_cap} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">Total Volume</span>
                        <span className="value">{detail.total_volume} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">Circulate Supply</span>
                        <span className="value">
                          {detail.circulating_supply}{" "}
                        </span>
                      </div>
                      <div className="calculation">
                        <span className="description">High 24h</span>
                        <span className="value">${detail.high_24h} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">Low 24h</span>
                        <span className="value">${detail.low_24h} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">All Time High</span>
                        <span className="value">${detail.ath} </span>
                      </div>
                      <div className="calculation">
                        <span className="description">All Time Low</span>
                        <span className="value">${detail.atl} </span>
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
