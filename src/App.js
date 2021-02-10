import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

import "./App.css";

import { GlobalProvider } from "./Context";
import Header from "./Header";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Details} />
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
