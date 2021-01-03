import React, { useState, useEffect } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import "./App.css";
import Loading from "./Loading";

const App = () => {
  const [coins, setCoin] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://api.coinlore.net/api/tickers/?limit=15";
  const getCoins = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const item = data.data;
      // console.log(item);
      setIsLoading(false);
      setCoin(item);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoins();
    const interval = setInterval(() => {
      getCoins();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
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
            let icon;
            if (percent_change_7d >= 0) {
              classes += " green";
              icon = <IoMdArrowDropup />;
            } else {
              classes += " red";
              icon = <IoMdArrowDropdown />;
            }
            let test = "cell";
            let ic;
            if (percent_change_24h >= 0) {
              test += " green";
              ic = <IoMdArrowDropup />;
            } else {
              test += " red";
              ic = <IoMdArrowDropdown />;
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
                  {ic} {percent_change_24h}%
                </div>
                <div className={classes} data-title="7d">
                  {icon} {percent_change_7d}%
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
