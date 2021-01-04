import React from "react";
const Globals = ({ globals, index }) => {
  return (
    <>
      {globals.map((global) => {
        const { total_mcap, mcap_change } = global;
        return (
          <>
            <div className="container">
              <h1>Today's Cryptocurrency Prices by Market Cap</h1>
              <h3 key={index}>
                The global crypto market cap is $
                {Math.trunc(total_mcap / 1000000000)}B, a {mcap_change}%
                {mcap_change > 0 ? " increase" : " decrease"} over the last day
              </h3>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Globals;
