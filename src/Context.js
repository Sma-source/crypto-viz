import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const ApiUrl = "https://api.coingecko.com/api/v3";
  const [list, setList] = useState([
    "bitcoin",
    "ethereum",
    "celo-gold",
    "maker",
    " ripple",
    "bitcoin-cash",
    "stellar",
    "band-protocol",
    "the-graph",
    "compound-governance-token",
    "litecoin",
  ]);

  return (
    <GlobalContext.Provider value={{ ApiUrl, list }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
export { GlobalContext, GlobalProvider };
