import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./StreamOverlay.scss";
import BasementHooks from "../../assets/iconHelp_basement.png";
import Hooks from "../../assets/iconHelp_hookStruggle.png";
import Skulls from "../../assets/help_levelIcon_killer.png";
import Hatch from "../../assets/iconHelp_hatch.png";
import Obsession from "../../assets/iconHelp_obsession.png";
import SkillChecks from "../../assets/iconHelp_skillChecks.png";
import Escapes from "../../assets/iconHelp_exitGates.png";
import Totems from "../../assets/iconHelp_totems.png";
import Generator from "../../assets/iconHelp_generators.png";
import Medkit from "../../assets/iconItems_medkit.png";

interface urlParams {
  steamid: string;
}
interface IStats {
  [key: string]: string;
}
export const StreamOverlay: FC<{ statsType: string }> = ({ statsType }) => {
  //State
  let { steamid } = useParams();
  const [dbdStats, setDbdStats] = useState<IStats>();
  const killer = statsType === "killer";
  const survivor = statsType === "survivor";

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch(
        `/v0002/?appid=381210&key=0CF32996AC0E1B2C097D91AA8FD0158C&steamid=${steamid}`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      let statsObj: any = {};
      data.playerstats.stats.map((stat: any) => {
        return (statsObj[stat.name] = stat.value);
      });
      console.log(statsObj);
      setDbdStats(statsObj);
    };
    fetchStats();
  });

  return (
    <>
      {killer && (
        <div className="statContainer">
          <h1>KILLER STATS</h1>
          <ul>
            <li>
              <img src={Hooks} alt="" />
              Kills: {dbdStats?.DBD_SacrificedCampers}
            </li>
            <li>
              <img src={Skulls} alt="" />
              Perfect Games: {dbdStats?.DBD_SlasherMaxScoreByCategory}
            </li>
            <li>
              <img src={BasementHooks} alt="" /> Basement Hooks:{" "}
              {dbdStats?.DBD_DLC6_Slasher_Stat2}
            </li>
            <li>
              <img src={Hatch} alt="" />
              Closed Hatches: {dbdStats?.DBD_Chapter13_Slasher_Stat1}
            </li>
            <li>
              <img src={Obsession} alt="" />
              Obsession Hooked: {dbdStats?.DBD_DLC7_Slasher_Stat2}
            </li>
          </ul>
        </div>
      )}
      {survivor && (
        <div className="statContainer">
          <h1>SURVIVOR STATS</h1>
          <ul>
            <li>
              <img src={Escapes} alt="" />
              Escapes:
              {parseInt(dbdStats?.DBD_EscapeKO) +
                parseInt(dbdStats?.DBD_Escape) +
                parseInt(dbdStats?.DBD_EscapeThroughHatch)}
            </li>
            <li>
              <img src={Generator} alt="" /> Repairs:
              {Math.round(parseInt(dbdStats?.DBD_GeneratorPct_float))}
            </li>
            <li>
              <img src={SkillChecks} alt="" />
              Passed Checks: {dbdStats?.DBD_SkillCheckSuccess}
            </li>
            <li>
              <img src={Medkit} alt="" />
              Heals: {Math.round(parseInt(dbdStats?.DBD_HealPct_float))}
            </li>
            <li>
              <img src={Totems} alt="" />
              Hexes Cleansed: {dbdStats?.DBD_DLC3_Camper_Stat1}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
