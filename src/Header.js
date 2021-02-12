import React from "react";
import { FaCoins } from "react-icons/fa";

const Header = () => {
  return (
    <header id="header">
      <div className="container-large">
        <div className="row align-middle">
          <div className="col-sm-3 col-xs-10 logo">
            <a href="#" className="brand">
              <FaCoins className="brand" />
              CoinData
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
