import React from "react";
import UpDown from "./UpDown";
const Globals = ({ globals }) => {
  return (
    <div className="container">
      <h1>Today's Cryptocurrency Prices by Market Cap</h1>
      {globals.map((global) => {
        const { total_mcap, mcap_change } = global;
        return (
          <h3 key={total_mcap}>
            The global crypto market cap is{" "}
            {Math.trunc(total_mcap / 1000000000)}B, a{" "}
            <UpDown value={mcap_change} />
            {mcap_change > 0 ? " increase" : " decrease"} over the last day{" "}
          </h3>
        );
      })}
    </div>
  );
};
export default Globals;
