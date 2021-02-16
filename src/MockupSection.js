import React from "react";
import { FaCoins } from "react-icons/fa";
const MockupSection = () => {
  return (
    <>
      <div className="mock">
        <div className="mockup pt-2">
          <figure class="iphone">
            <FaCoins className="brand" />
            CoinData
          </figure>
          <figure class="ipad">
            <FaCoins className="brand" />
            CoinData
          </figure>
        </div>
        <div className="row">
          <div className="col  center-block">
            <h2>
              Buy, sell, and trade cryptocurrencies <br /> from your laptop,
              tablet, or mobile <br /> device.
            </h2>
            <button>Apple</button>
            <button>Google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockupSection;
