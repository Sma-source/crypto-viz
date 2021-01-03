import React, { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
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
  let classes = "cell";
  let icon;
  if (percent_change_7d >= 0) {
    classes += " green";
    icon = <IoMdArrowDropup />;
  } else {
    classes += " red";
    icon = <IoMdArrowDropdown />;
  }
  let test = "cell";
  let ic;
  if (percent_change_24h >= 0) {
    test += " green";
    ic = <IoMdArrowDropup />;
  } else {
    test += " red";
    ic = <IoMdArrowDropdown />;
  }
  return (
    <>
      <div className="row" key={id}>
        <div className="cell" data-title="#">
          {rank}
        </div>
        <div className="cell" data-title="Name">
          {name}
        </div>
        <div className="cell" data-title="Price">
          ${price_usd}
        </div>
        <div className={test} data-title="24h">
          {ic} {percent_change_24h}%
        </div>
        <div className={classes} data-title="7d">
          {icon} {percent_change_7d}%
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
      </div>
    </>
  );
};
export default Coin;
