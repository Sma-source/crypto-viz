import React, { useState, useEffect } from "react";
import UpDown from "./UpDown";
import { useGlobalContext } from "./Context";
import Loading from "./Loading";
const Globals = () => {
  const [loading, setLoading] = useState(true);
  const [globals, setGlobals] = useState([]);
  const { ApiUrl } = useGlobalContext();
  useEffect(() => {
    const getGlobals = async () => {
      try {
        const res = await fetch(`${ApiUrl}/global`);
        const donne = await res.json();
        const items = donne.data;
        // console.log(items);
        setLoading(false);
        setGlobals([items]);
      } catch (error) {
        console.log(error);
      }
    };
    getGlobals();

    // const interval = setInterval(() => {
    //   getGlobals();
    // }, 30000);

    // return () => clearInterval(interval);
  }, [ApiUrl]);

  if (loading) {
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="panel">
            <h2>Au cours des dernières 24 heures</h2>
          </div>
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="panel">
          <div className="panel-header">
            <h4>Au cours des dernieres 24h</h4>
          </div>
          {globals.map((global) => {
            const {
              market_cap_change_percentage_24h_usd,
              ongoing_icos,
              market_cap_percentage,
              active_cryptocurrencies,
            } = global;
            const { btc, eth, usdt } = market_cap_percentage;

            return (
              <div className="totals-content" key={ongoing_icos}>
                <div className="text-largest">
                  <span>
                    {" "}
                    Le Marché est en
                    {market_cap_change_percentage_24h_usd > 0
                      ? " hausse"
                      : " baisse"}
                    <UpDown
                      value={
                        Math.round(market_cap_change_percentage_24h_usd * 100) /
                        100
                      }
                      classe={""}
                    ></UpDown>
                  </span>
                  {/* <span className="change up">+0.89%</span> */}
                </div>
                <div className="bars-row">
                  <div>
                    <label> Top 3 Crypto</label>
                    <div className="market-bar supply">
                      <div className="row">
                        <div className="col-xs-6">
                          <label htmlFor="">BTC</label>
                        </div>
                        <div className="col-xs-6 text-right">
                          {btc.toFixed(2)}%
                        </div>
                      </div>
                      <div className="bar supply">
                        <div
                          className="fill supply"
                          style={{
                            width: `${btc.toFixed(2)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="market-bar supply">
                      <div className="row">
                        <div className="col-xs-6">
                          <label htmlFor="">ETH</label>
                        </div>
                        <div className="col-xs-6 text-right">
                          {eth.toFixed(2)}%
                        </div>
                      </div>
                      <div className="bar supply">
                        <div
                          className="fill supply"
                          style={{
                            width: `${eth.toFixed(2)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="market-bar supply">
                      <div className="row">
                        <div className="col-xs-6">
                          <label htmlFor="">USDT</label>
                        </div>
                        <div className="col-xs-6 text-right">
                          {usdt.toFixed(2)}%{" "}
                        </div>
                      </div>
                      <div className="bar supply">
                        <div
                          className="fill supply"
                          style={{ width: `${usdt.toFixed(2)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="demi row">
                  <div className="col-xs-6">
                    <label> 24h Supply volume </label>
                    <div className="text-large total">$69,343,547.55</div>
                  </div>
                  <div className="col-xs-6 text-right">
                    <label>total crypto monnaie</label>
                    <div className="text-large total">
                      {active_cryptocurrencies}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Globals;
