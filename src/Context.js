import React, { useContext } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const globalUrl = "https://api.coinlore.net/api/global/";
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const detailsUrl = " https://api.coinlore.net/api/ticker/";

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
