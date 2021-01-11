import React, { useContext } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const globalUrl = "https://api.coinlore.net/api/global/";
  const url = "https://api.coinlore.net/api/tickers/?limit=15";
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
