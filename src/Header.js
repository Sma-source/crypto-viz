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
              <FaCoins className="brand coinslogo" />
              CoinData
            </Link>
          </div>
          <div className="col-xs-6 text-center links"></div>
          <div class="mobile-hide col-xs-3 text-right">
            <Link to="#" class="white btn hollow" rel="external" href="#">
              Se connecter
            </Link>
            <Link to="#" class="yellow btn hollow" rel="external" href="#">
              Créer un compte
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
