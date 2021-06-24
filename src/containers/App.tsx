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
import { StreamOverlay } from "./StreamOverlay/StreamOverlay";

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
        <Route path="/overlay/killer/:steamid">
          <StreamOverlay statsType="killer" />
        </Route>
        <Route path="/overlay/survivor/:steamid">
          <StreamOverlay statsType="survivor" />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
