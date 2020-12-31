import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [coins, setCoin] = useState([]);
  const url = "https://api.coinlore.net/api/tickers/?limit=15";
  const getCoins = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const item = data.data;
    // console.log(item);
    setCoin(item);
  };
  useEffect(() => {
    getCoins();
    const interval = setInterval(() => {
      getCoins();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container">
        <div className="table">
          <div className="row header">
            <div className="cell">#</div>
            <div className="cell">Name</div>
            <div className="cell">Price</div>
            <div className="cell">24h</div>
            <div className="cell">7d</div>
            <div className="cell">Market Cap</div>
            <div className="cell">Volume</div>
            <div className="cell">Circulation Supply</div>
          </div>

          {coins.map((coin) => {
            const {
              id,
              rank,
              name,
              symbol,
              price_usd,
              percent_change_24h,
              percent_change_7d,
              market_cap_usd,
              volume24a,
              csupply,
            } = coin;

            let classes = "cell";
            if (percent_change_7d >= 0) {
              classes += " green";
            } else {
              classes += " red";
            }
            let test = "cell";
            if (percent_change_24h >= 0) {
              test += " green";
            } else {
              test += " red";
            }
            return (
              <div className="row" key={id}>
                <div className="cell" data-title="#">
                  {rank}
                </div>
                <div className="cell" data-title="Name">
                  {name}
                </div>
                <div className="cell" data-title="Price">
                  ${price_usd}
                </div>
                <div className={test} data-title="24h">
                  {percent_change_24h}%
                </div>
                <div className={classes} data-title="7d">
                  {percent_change_7d}%
                </div>
                <div className="cell" data-title="Market Cap">
                  ${market_cap_usd}
                </div>
                <div className="cell" data-title="Volume">
                  ${volume24a}
                </div>
                <div className="cell" data-title="Circulation Supply">
                  {csupply} {symbol}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
