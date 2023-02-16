//JS Import
import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/perks" element={<Perks />} />
        <Route path="/status" element={<StatusEffects />} />
        <Route path="/roulette" element={<Roulette />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/stats" element={<Stats />} />
        <Route
          path="/overlay/killer/:steamid"
          element={<StreamOverlay statsType="killer" />}
        />
        <Route
          path="/overlay/survivor/:steamid"
          element={<StreamOverlay statsType="survivor" />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
