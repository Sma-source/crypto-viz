import React from "react";
import Coin from "./Coin";
const Coins = ({ coins }) => {
  return (
    <>
      <div className="container">
        <h1>All Coins</h1>
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
