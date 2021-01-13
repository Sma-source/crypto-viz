import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import Loading from "./Loading";
import { useGlobalContext } from "./Context";
const Coins = () => {
  const { ApiUrl } = useGlobalContext();
  const { list } = useGlobalContext();
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCoins = async () => {
      try {
        const response = await fetch(
          `${ApiUrl}/coins/markets?vs_currency=usd&ids=${list}&order=market_cap_desc`
        );
        // console.log(response);
        const data = await response.json();
        const item = data;

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
  }, [ApiUrl, list]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="cryptos">
        <div className="container">
          <p className="section-header">Cryptocurrency</p>
          <div className="row">
            {coins.map((coin) => {
              return <Coin key={coin.id} {...coin}></Coin>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Coins;
