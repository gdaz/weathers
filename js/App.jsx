// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";
import Weather from "./Weather";
import dataload from "../data.json";

const FourOFour = () => <div><h1>404</h1></div>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/search"
          component={props => <Search show={dataload} {...props} />}
        />
        <Route path="/weather" component={Weather} />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => (
            <Details
              show={dataload.shows.find(
                show => props.match.params.id === show.imdbID
              )}
              {...props}
            />
          )}
        />
        <Route component={FourOFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
