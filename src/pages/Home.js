import React from "react";
import Coins from "../Coins";
import Globals from "../Globals";

const Home = () => {
  return (
    <main>
      <div id="Cryptos">
        <section className="hero">
          <Globals />
        </section>

        <Coins />
      </div>
    </main>
  );
};
export default Home;
