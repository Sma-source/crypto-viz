import React, { useEffect } from "react";
import { RadialChart } from "react-vis";
import { useGlobalContext } from "./Context";
const DomCoin = () => {
  const { globals, setGlobals, globalUrl } = useGlobalContext();

  useEffect(() => {
    const getDom = async () => {
      try {
        const res = await fetch(globalUrl);
        const donne = await res.json();
        const item = donne;
        setGlobals(item);
      } catch (error) {
        console.log(error);
      }
    };
    getDom();

    const interval = setInterval(() => {
      getDom();
    }, 30000);

    return () => clearInterval(interval);
  }, [globalUrl, setGlobals]);

  return (
    <div className="container">
      {globals.map((dom) => {
        const { btc_d, eth_d } = dom;
        const myData = [
          { angle: parseFloat(btc_d), label: "BTC" },
          { angle: parseFloat(eth_d), label: "ETH" },
        ];
        return (
          <>
            <RadialChart
              className="container"
              showLabels={true}
              data={myData}
              width={200}
              height={200}
            />
          </>
        );
      })}
    </div>
  );
};

export default DomCoin;
