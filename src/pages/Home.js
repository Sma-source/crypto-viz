import React from "react";
import Coins from "../Coins";
import Globals from "../Globals";
import Hero from "../Hero";

const Home = () => {
  return (
    <div id="Cryptos">
      <Hero />

      <section>
        <div className="container">
          <div className="content">
            <Coins />

            <Globals />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
