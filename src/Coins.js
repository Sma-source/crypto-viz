import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import Loading from "./Loading";
import { useGlobalContext } from "./Context";
const Coins = () => {
  const { url } = useGlobalContext();
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
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
    getCoins();
    const interval = setInterval(() => {
      getCoins();
    }, 30000);

    return () => clearInterval(interval);
  }, [url]);

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
            return <Coin key={coin.id} {...coin}></Coin>;
          })}
        </div>
      </div>
    </>
  );
};
export default Coins;
