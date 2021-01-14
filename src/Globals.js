import React, { useState, useEffect } from "react";
import UpDown from "./UpDown";
import { useGlobalContext } from "./Context";
import Loading from "./Loading";
const Globals = () => {
  const [loading, setLoading] = useState(true);
  const [globals, setGlobals] = useState({});
  const { ApiUrl } = useGlobalContext();
  useEffect(() => {
    const getGlobals = async () => {
      try {
        const res = await fetch(`${ApiUrl}/global`);
        const donne = await res.json();
        const items = donne.data.market_cap_change_percentage_24h_usd;
        console.log(items);
        setLoading(false);
        setGlobals(items);
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

  if (loading) {
    return (
      <div className="container">
        <h4>Au cours des dernières 24 heures</h4>
        <Loading />;
      </div>
    );
  }
  if (globals) {
    return (
      <div className="container">
        <h4>Au cours des dernières 24 heures</h4>

        <h1>
          Le Marché est en
          {globals > 0 ? " hausse" : " baisse"}
          <UpDown
            value={Math.round(globals * 100) / 100}
            classe={"cryptos-card__subtext"}
          ></UpDown>
        </h1>
      </div>
    );
  }
};
export default Globals;
