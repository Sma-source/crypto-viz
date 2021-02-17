import React from "react";
import { FaCoins, FaApple, FaGooglePlay, FaDesktop } from "react-icons/fa";
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
            <div class="flex social-btns">
              <a class="app-btn blu flex vert" href="http:apple.com">
                <FaApple />
                <p>
                  Available on the <br /> <span class="big-txt">App Store</span>
                </p>
              </a>

              <a class="app-btn blu flex vert" href="http:google.com">
                <FaGooglePlay />
                <p>
                  Get it on <br /> <span class="big-txt">Google Play</span>
                </p>
              </a>

              <a class="app-btn blu flex vert" href="http:alphorm.com">
                <FaDesktop />
                <p>
                  Application <br /> <span class="big-txt">Desktop</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockupSection;
