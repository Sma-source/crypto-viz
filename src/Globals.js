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
        // console.log(items);
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

  // if (loading) {
  //   return (
  //     <div className="container">
  //       <h2>Au cours des dernières 24 heures</h2>
  //       <Loading />
  //     </div>
  //   );
  // }
  if (globals) {
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="panel">
            <div className="panel-header">
              <h4>Au cours des dernieres 24h</h4>
            </div>
            <div className="totals-content">
              <div className="text-largest">
                <span>
                  {" "}
                  Le Marché est en
                  {globals > 0 ? " hausse" : " baisse"}
                  <UpDown
                    value={Math.round(globals * 100) / 100}
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
                      <div className="col-xs-6 text-right">30.19%</div>
                    </div>
                    <div className="bar supply">
                      <div
                        className="fill supply"
                        style={{ width: "30.19%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="market-bar supply">
                    <div className="row">
                      <div className="col-xs-6">
                        <label htmlFor="">BTC</label>
                      </div>
                      <div className="col-xs-6 text-right">30.19%</div>
                    </div>
                    <div className="bar supply">
                      <div
                        className="fill supply"
                        style={{ width: "30.19%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="market-bar supply">
                    <div className="row">
                      <div className="col-xs-6">
                        <label htmlFor="">BTC</label>
                      </div>
                      <div className="col-xs-6 text-right">30.19%</div>
                    </div>
                    <div className="bar supply">
                      <div
                        className="fill supply"
                        style={{ width: "30.19%" }}
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
                  <label> # of Suppliers</label>
                  <div className="text-large total">279631</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Globals;
