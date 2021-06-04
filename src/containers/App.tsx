//JS Import
import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Perks } from "./Perks/Perks";
import { Stats } from "./Stats/Stats";
//Styles
import "./App.scss";
import Roulette from "./Roulette/Roulette";
import Tutorials from "./Tutorials/Tutorials";
import { StatusEffects } from "./Status/StatusEffects";

export const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/perks">
          <Perks />
        </Route>
        <Route path="/status">
          <StatusEffects />
        </Route>
        <Route path="/roulette">
          <Roulette />
        </Route>
        <Route path="/tutorials">
          <Tutorials />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
