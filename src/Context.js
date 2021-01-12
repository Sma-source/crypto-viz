import React, { useContext } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const globalUrl = "https://api.coinlore.net/api/global/";
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,litecoin,bitcoin-cash,maker,stellar,celo-gold,band-protocol,compound-governance-token,the-graph&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const detailsUrl = "https://api.coingecko.com/api/v3";

  return (
    <GlobalContext.Provider value={{ globalUrl, url, detailsUrl }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
export { GlobalContext, GlobalProvider };
