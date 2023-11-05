import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              <Weather city="Pretoria" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/Johannesburg"
          render={() => (
            <div className="App">
              <Weather city="Johannesburg" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/Cape Town"
          render={() => (
            <div className="App">
              <Weather city="Cape Town" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/East London"
          render={() => (
            <div className="App">
              <Weather city="East London" />
            </div>
          )}
        />
      </div>
    );
  }
}
