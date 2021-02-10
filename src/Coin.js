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
  total_volume,
}) => {
  return (
    <Link to={`/${id}`} className="asset" key={id}>
      <div className="col-xs-4 col-sm-5 identity">
        <span className="icon">
          <img className="icon" src={image} alt={name} />
        </span>
        <div>
          <div className="name">{name}</div>
          <div className="symbol">{symbol.toUpperCase()}</div>
        </div>
      </div>
      <div className="col-xs-3 text-right">
        <div>${current_price}</div>
      </div>
      <div className="col-xs-3 text-right">
        <UpDown
          value={Math.round(price_change_percentage_24h * 100) / 100}
          classe={"cryptos-card__subtext"}
        ></UpDown>
      </div>
      <div className="col-xs-3 text-right">
        <div>{total_volume}</div>
      </div>

      {/* <div className="cryptos-card" key={id}>
        <div className="cryptos-card__text-section">
          <h3 className="cryptos-card__text">{symbol.toUpperCase()}</h3>
          <div className="cryptos-card__subtext-section">
            <h3 className="cryptos-card__text">${current_price}</h3>
            <UpDown
              value={Math.round(price_change_percentage_24h * 100) / 100}
              classe={"cryptos-card__subtext"}
            ></UpDown>
          </div>
        </div>
        <img className="cryptos-card__icon" src={image} alt={name} />
      </div> */}
    </Link>
  );
};
export default Coin;
