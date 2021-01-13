import React from "react";
import UpDown from "./UpDown";
import { Link } from "react-router-dom";
const Coin = ({
  id,
  image,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
}) => {
  return (
    <div className="col-md-3">
      <Link to={`/${id}`}>
        <div className="cryptos-card" key={id}>
          <div className="cryptos-card__text-section">
            <h3 className="cryptos-card__text">{symbol.toUpperCase()}</h3>
            <div className="cryptos-card__subtext-section">
              <h3 className="cryptos-card__text">${current_price}</h3>
              <UpDown
                value={Math.round(price_change_percentage_24h * 100) / 100}
              ></UpDown>
            </div>
          </div>
          <img className="cryptos-card__icon" src={image} alt={name} />
        </div>
      </Link>
    </div>
  );
};
export default Coin;
