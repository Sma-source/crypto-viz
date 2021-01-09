import React, { useState, useEffect } from "react";

import "./App.css";
import Loading from "./Loading";
import Coins from "./Coins";
import Globals from "./Globals";
import { GlobalProvider } from "./Context";
import DomCoin from "./DomCoin";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://api.coinlore.net/api/tickers/?limit=15";
  const getCoins = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const item = data.data;
      // console.log(item);
      setIsLoading(false);
      setCoins(item);
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
    <GlobalProvider>
      <DomCoin />
      <Globals />
      <Coins coins={coins} />
    </GlobalProvider>
  );
};

export default App;
