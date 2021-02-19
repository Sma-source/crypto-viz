import React from "react";
import { FaCoins, FaApple, FaGooglePlay, FaDesktop } from "react-icons/fa";
import { Link } from "react-router-dom";
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
          <div className="col center-block">
            <h2 className="pb-1">
              Info, Graphique et Prix des Cryptomonnaies <br /> depuis votre
              ordinateur portable, tablette ou <br /> mobile{" "}
            </h2>
            <div class="flex social-btns">
              <Link to="#" class="app-btn blu flex vert" href="http:apple.com">
                <FaApple />
                <p>
                  Available on the <br /> <span class="big-txt">App Store</span>
                </p>
              </Link>

              <Link to="#" class="app-btn blu flex vert" href="http:google.com">
                <FaGooglePlay />
                <p>
                  Get it on <br /> <span class="big-txt">Google Play</span>
                </p>
              </Link>

              <Link
                to="#"
                class="app-btn blu flex vert"
                href="http:alphorm.com"
              >
                <FaDesktop />
                <p>
                  Application <br /> <span class="big-txt">Desktop</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockupSection;
