import React from "react";
import UpDown from "./UpDown";
import { Link } from "react-router-dom";
const Coin = ({
  id,
  rank,
  name,
  symbol,
  price_usd,
  percent_change_24h,
  percent_change_7d,
  market_cap_usd,
  volume24a,
  csupply,
}) => {
  return (
    <Link to={`/coins/${id}`} className="row" key={id}>
      <div className="cell" data-title="#">
        {rank}
      </div>
      <div className="cell" data-title="Name">
        {name}
      </div>
      <div className="cell" data-title="Price">
        ${price_usd}
      </div>
      <div className="cell" data-title="24h">
        <UpDown value={percent_change_24h}></UpDown>
      </div>
      <div className="cell" data-title="7h">
        <UpDown value={percent_change_7d}></UpDown>
      </div>

      <div className="cell" data-title="Market Cap">
        ${market_cap_usd}
      </div>
      <div className="cell" data-title="Volume">
        ${volume24a}
      </div>
      <div className="cell" data-title="Circulation Supply">
        {csupply} {symbol}
      </div>
    </Link>
  );
};
export default Coin;
