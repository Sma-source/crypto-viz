import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const ApiUrl = "https://api.coingecko.com/api/v3";
  const [list, setList] = useState([
    "bitcoin",
    "ethereum",
    "ripple",
    "bitcoin-cash",
    "litecoin",
    "polkadot",
    "tether",
  ]);

  return (
    <GlobalContext.Provider value={{ ApiUrl, list, setList }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
export { GlobalContext, GlobalProvider };
