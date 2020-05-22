import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ShipList } from "./components/ShipList";
import { FixtureContainer } from "./components/FixtureContainer";
import { useShips } from "./hooks/useShips";

export const ShipRouter = () => {
  const ships = useShips();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ShipList data={ships} />
        </Route>
        <Route path="/voyage/:shipCode/:voyageNumber">
          <FixtureContainer />
        </Route>
      </Switch>
    </Router>
  );
};
