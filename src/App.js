import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

import "./App.css";

import { GlobalProvider } from "./Context";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Route exact path="/coins" component={Home} />
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
