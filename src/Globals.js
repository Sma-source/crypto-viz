import React, { useState, useEffect } from "react";
import UpDown from "./UpDown";
import { useGlobalContext } from "./Context";
const Globals = () => {
  const [globals, setGlobals] = useState([]);
  const { globalUrl } = useGlobalContext();
  useEffect(() => {
    const getGlobals = async () => {
      try {
        const res = await fetch(globalUrl);
        const donne = await res.json();
        const item = donne;
        setGlobals(item);
      } catch (error) {
        console.log(error);
      }
    };
    getGlobals();

    const interval = setInterval(() => {
      getGlobals();
    }, 30000);

    return () => clearInterval(interval);
  }, [globalUrl]);
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
