import React, { useContext } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const globalUrl = "https://api.coinlore.net/api/global/";
  const url = "https://api.coinlore.net/api/tickers/?limit=15";

  return (
    <GlobalContext.Provider value={{ globalUrl, url }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
export { GlobalContext, GlobalProvider };
