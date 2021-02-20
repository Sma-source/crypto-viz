import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import Loading from "./Loading";
import { useGlobalContext } from "./Context";
const Coins = () => {
  const { ApiUrl } = useGlobalContext();
  const { list } = useGlobalContext();
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    const getCoins = async () => {
      try {
        const response = await fetch(
          `${ApiUrl}/coins/markets?vs_currency=${currency}&ids=${list}&order=market_cap_desc`
        );
        // console.log(response);
        const data = await response.json();
        const item = data;

        setCoins(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCoins();

    const interval = setInterval(() => {
      getCoins();
    }, 30000);

    return () => clearInterval(interval);
  }, [ApiUrl, list, currency]);

  if (isLoading) {
    return (
      <div className="panel">
        <div className="panel-header">{/* <h4>Cryptomonnaies</h4> */}</div>
        <div className="panel-labels">
          <div className="col-xs-4 col-sm-5">
            <label>Cryptomonnaies</label>
          </div>
          <div className="col-xs-3 text-right">
            <label>Prix</label>
          </div>
          <div className="col-xs-3 text-right">
            <label>Changement</label>
          </div>
          <div className="col-xs-3 text-right">
            <label>Volume Total</label>
          </div>
        </div>
        <Loading />
      </div>
    );
  }
  if (coins) {
    return (
      <>
        <div className="panel">
          <div className="panel-header">{/* <h4>Cryptomonnaies</h4> */}</div>
          <div className="panel-labels">
            <div className="col-xs-4 col-sm-5">
              <label>Cryptomonnaies</label>
            </div>
            <div className="col-xs-3 text-right">
              <label>Prix</label>
            </div>
            <div className="col-xs-3 text-right">
              <label>Changement</label>
            </div>
          </div>

          <div className="assets">
            {coins.map((coin) => {
              return <Coin key={coin.id} {...coin}></Coin>;
            })}
          </div>
        </div>
      </>
    );
  }
};
export default Coins;
