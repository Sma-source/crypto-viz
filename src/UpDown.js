import React from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
const UpDown = ({ classes, icon, value, classe }) => {
  if (value >= 0) {
    classes = "--green";
    icon = <IoMdArrowDropup />;
  } else {
    classes = "--red";
    icon = <IoMdArrowDropdown />;
  }

  return (
    <span className={` ${classe}${classes}`}>
      {icon} {value}%
    </span>
  );
};

export default UpDown;
