import React from "react";

const CoinData = ({ data }) => {
  const { detail } = data;
  if (detail) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              Market Cap:
              <p>{detail.market_cap}</p>
            </div>
            <div className="col-md-4">
              24h Low / 24h High:
              <p>
                ${detail.low_24h} / ${detail.high_24h}{" "}
              </p>
            </div>
            <div className="col-md-4">
              Circulating Supply:
              <p>{detail.circulating_supply}</p>
            </div>
            <div className="col-md-4">hello</div>
            <div className="col-md-4">hello</div>
            <div className="col-md-4">hello</div>
          </div>
        </div>
      </>
    );
  }
};

export default CoinData;
