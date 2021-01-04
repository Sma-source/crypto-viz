import React, { useState, useEffect } from "react";

import "./App.css";
import Loading from "./Loading";
import Coins from "./Coins";
import Globals from "./Globals";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [globals, setGlobals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const globalUrl = "https://api.coinlore.net/api/global/";
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

  const getGlobals = async () => {
    try {
      const res = await fetch(globalUrl);
      const donne = await res.json();
      const item = donne;
      setGlobals(item);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoins();
    getGlobals();

    const interval = setInterval(() => {
      getCoins();
      getGlobals();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Globals globals={globals} />
      <Coins coins={coins} />
    </>
  );
};

export default App;
