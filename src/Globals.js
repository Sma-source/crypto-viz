import React, { useState, useEffect } from "react";
import UpDown from "./UpDown";
import { useGlobalContext } from "./Context";
const Globals = () => {
  const [globals, setGlobals] = useState({});
  const { ApiUrl } = useGlobalContext();
  useEffect(() => {
    const getGlobals = async () => {
      try {
        const res = await fetch(`${ApiUrl}/global`);
        const donne = await res.json();
        const items = donne.data;
        setGlobals({ ...items });
      } catch (error) {
        console.log(error);
      }
    };
    getGlobals();

    const interval = setInterval(() => {
      getGlobals();
    }, 30000);

    return () => clearInterval(interval);
  }, [ApiUrl]);
  return (
    <div className="container">
      <h4>Au cours des dernières 24 heures</h4>

      <h1>
        Le Marché est en
        {globals.market_cap_change_percentage_24h_usd > 0
          ? " hausse"
          : " baisse"}
        <UpDown
          value={
            Math.round(globals.market_cap_change_percentage_24h_usd * 100) / 100
          }
        />
      </h1>
    </div>
  );
};
export default Globals;
