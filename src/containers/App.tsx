//JS Import
import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { PerksList } from "./PerksList";

//Styles
import "./App.scss";

export const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/perks">
          <PerksList />
        </Route>
        <Route path="/roulette">
          <p>Roulette Coming Soon</p>
        </Route>
        <Route path="/tutorials">
          <p>Tuts Coming Soon</p>
        </Route>
        <Route path="/research">
          <p>Research Coming Soon</p>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
