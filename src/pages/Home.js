import React from "react";
import Coins from "../Coins";
import Globals from "../Globals";
import DomCoin from "../DomCoin";
const Home = () => {
  return (
    <div id="Cryptos">
      <section className="hero">
        <DomCoin />
        <Globals />
      </section>

      <Coins />
    </div>
  );
};
export default Home;
