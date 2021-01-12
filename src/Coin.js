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
  market_cap,
  circulating_supply,
}) => {
  return (
    <Link to={`/${id}`} className="row" key={id}>
      <div className="cell" data-title="#">
        <img src={image} alt={name} width="30" />
      </div>
      <div className="cell" data-title="Name">
        {name}
      </div>
      <div className="cell" data-title="Price">
        ${current_price}
      </div>
      <div className="cell" data-title="24h">
        <UpDown
          value={Math.round(price_change_percentage_24h * 100) / 100}
        ></UpDown>
      </div>

      <div className="cell" data-title="Market Cap">
        ${market_cap}
      </div>

      <div className="cell" data-title="Circulation Supply">
        {circulating_supply} {symbol}
      </div>
    </Link>
  );
};
export default Coin;
