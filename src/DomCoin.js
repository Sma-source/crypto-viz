import React, { useState, useEffect } from "react";
import { Doughnut } from "@reactchartjs/react-chart.js";
import { useGlobalContext } from "./Context";
const DomCoin = () => {
  const { globalUrl } = useGlobalContext();
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    const getDom = async () => {
      try {
        const resp = await fetch(globalUrl);
        const donner = await resp.json();
        const items = donner;
        setInfos(items);
      } catch (error) {
        console.log(error);
      }
    };
    getDom();

    const interval = setInterval(() => {
      getDom();
    }, 30000);

    return () => clearInterval(interval);
  }, [globalUrl]);

  return (
    <div className="container">
      <h1>Crypto Dominance</h1>
      {infos.map((dom) => {
        const { btc_d, eth_d, active_markets } = dom;
        const other = Math.round(parseFloat(btc_d + eth_d));
        const data = {
          labels: ["BTC", "ETH", "OTHERS"],
          datasets: [
            {
              labels: "Crypto Dominance",
              data: [btc_d, eth_d, 100 - other],
              backgroundColor: [
                "rgb(247, 147, 26)",
                "rgb(28, 28, 225)",
                "rgba(255, 206, 86, 0.2)",
              ],
            },
          ],
        };
        return (
          <div key={active_markets}>
            <Doughnut
              data={data}
              width={200}
              height={100}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DomCoin;
