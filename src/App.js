import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [coins, setCoin] = useState();
  const url =
    "https://cors-anywhere.herokuapp.com/https://api.coinlore.net/api/tickers/";
  const getCoins = async () => {
    const response = await fetch(`${url}/?limit=5`);
    const data = await response.json();
    const item = data.data;
    // console.log(item);
    setCoin(item);
  };
  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div>
      {coins && (
        <ul className="users">
          {coins.map((coin) => {
            const { id, name, price_usd, symbol } = coin;
            return (
              <li key={id}>
                <p className="sym">{symbol}</p>
                <div>
                  <h4>{name}</h4>
                  <p>$ {price_usd} </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default App;
