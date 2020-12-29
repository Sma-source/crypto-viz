import React, { useState, useEffect } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";
import "./App.css";

const App = () => {
  const [coins, setCoin] = useState();
  const url =
    "https://cors-anywhere.herokuapp.com/https://api.coinlore.net/api/tickers/";
  const getCoins = async () => {
    const response = await fetch(`${url}/?limit=2`);
    const data = await response.json();
    const item = data.data;
    // console.log(item);
    setCoin(item);
  };
  useEffect(() => {
    getCoins();
  }, []);

  return <></>;
};

export default App;
