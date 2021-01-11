import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

import "./App.css";

import { GlobalProvider } from "./Context";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Route exact path="/coins" component={Home} />
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
