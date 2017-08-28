import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Weather from "./Weather";

const FourOFour = () => <div><h1>404</h1></div>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route path="/weather" component={Weather} />
        <Route component={FourOFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
