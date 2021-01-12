import React from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
const UpDown = ({ classes, icon, value }) => {
  if (value >= 0) {
    classes = "--green";
    icon = <IoMdArrowDropup />;
  } else {
    classes = "--red";
    icon = <IoMdArrowDropdown />;
  }

  return (
    <span className={`cryptos-card__subtext${classes}`}>
      {icon} {value}%
    </span>
  );
};

export default UpDown;
