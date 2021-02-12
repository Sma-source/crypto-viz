import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container-large">
        <div className="row align-middle">
          <div className="col-sm-3 col-xs-10 logo">
            <Link to="/" className="brand">
              <FaCoins className="brand" />
              CoinData
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
