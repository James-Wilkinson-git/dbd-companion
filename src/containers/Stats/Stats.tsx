import React, { FC, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SteamInstructions from "../../assets/steam-instructions.jpg";
import { BackButton } from "../../components/BackBtn/BackButton";
import "./Stats.scss";
import { StatsList } from "../../components/StatsList/StatsList";
import ProfileImage from "../../assets/publicprofile.jpg";
import { Alert, Button, Collapse } from "react-bootstrap";
export interface SteamApi {
  playerstats: Playerstats;
}
export interface Playerstats {
  steamID: string;
  gameName: string;
  stats?: StatsEntity[] | null;
  achievements?: AchievementsEntity[] | null;
}
export interface StatsEntity {
  name: string;
  value: number;
}
export interface AchievementsEntity {
  name: string;
  achieved: number;
}

export interface StatsLookup {
  [key: string]: String;
}

// const plaerstats = {
//   playerstats: {
//     steamID: "76561198190011071",
//     gameName: "Dead by Daylight",
//     stats: [
//       { name: "DBD_KillerSkulls", value: 14 },
//       { name: "DBD_CamperSkulls", value: 20 },
//       { name: "DBD_SacrificedCampers", value: 40 },
//       { name: "DBD_ChainsawHit", value: 7 },
//       { name: "DBD_GeneratorPct_float", value: 288.0167236328125 },
//       { name: "DBD_HealPct_float", value: 80.1484832763671875 },
//       { name: "DBD_EscapeKO", value: 1 },
//       { name: "DBD_Escape", value: 42 },
//       { name: "DBD_SkillCheckSuccess", value: 1545 },
//       { name: "DBD_SacrificedCampers_iam", value: 0 },
//       { name: "DBD_UnhookOrHeal", value: 111 },
//       { name: "DBD_UnhookOrHeal_PostExit", value: 2 },
//       { name: "DBD_BloodwebMaxLevel", value: 47 },
//       { name: "DBD_BloodwebPoints", value: 4029009 },
//       { name: "DBD_SlasherMaxScoreByCategory", value: 1 },
//       { name: "DBD_EscapeThroughHatch", value: 1 },
//       { name: "DBD_PerksCount_Idx0", value: 3 },
//       { name: "DBD_PerksCount_Idx1", value: 3 },
//       { name: "DBD_PerksCount_Idx2", value: 3 },
//       { name: "DBD_PerksCount_Idx3", value: 3 },
//       { name: "DBD_PerksCount_Idx268435456", value: 3 },
//       { name: "DBD_PerksCount_Idx268435457", value: 3 },
//       { name: "DBD_PerksCount_Idx268435458", value: 3 },
//       { name: "DBD_BloodwebPerkMaxLevel", value: 3 },
//       { name: "DBD_MaxBloodwebPointsOneCategory", value: 272000 },
//       { name: "DBD_CamperFullLoadout", value: 54 },
//       { name: "DBD_CamperNewItem", value: 13 },
//       { name: "DBD_CamperKeepUltraRare", value: 9 },
//       { name: "DBD_AllEscapeThroughHatch", value: 5 },
//       { name: "DBD_CamperEscapeWithItemFrom", value: 1 },
//       { name: "DBD_UnlockRanking", value: 25 },
//       { name: "DBD_EscapeNoBlood_MapAsy_Asylum", value: 1 },
//       { name: "DBD_FixSecondFloorGenerator_MapAsy_Asylum", value: 2 },
//       { name: "DBD_SlasherChainAttack", value: 13 },
//       { name: "DBD_FixSecondFloorGenerator_MapSub_Street", value: 1 },
//       { name: "DBD_DLC3_Slasher_Stat1", value: 160 },
//       { name: "DBD_DLC3_Slasher_Stat2", value: 1 },
//       { name: "DBD_DLC3_Camper_Stat1", value: 1 },
//       { name: "DBD_HitNearHook", value: 25 },
//       { name: "DBD_Camper8_Stat1", value: 41 },
//       { name: "DBD_Camper8_Stat2", value: 127 },
//       { name: "DBD_Camper9_Stat2", value: 4 },
//       { name: "DBD_DLC6_Slasher_Stat2", value: 9 },
//       { name: "DBD_DLC7_Slasher_Stat2", value: 10 },
//       { name: "DBD_DLC7_Camper_Stat1", value: 62 },
//       { name: "DBD_DLC7_Camper_Stat2", value: 31 },
//       { name: "DBD_DLC8_Slasher_Stat2", value: 6 },
//       { name: "DBD_DLC8_Camper_Stat1", value: 16 },
//       { name: "DBD_Event1_Stat2", value: 19 },
//       { name: "DBD_Event1_Stat3", value: 31 },
//       { name: "DBD_DLC9_Slasher_Stat1", value: 23 },
//       { name: "DBD_DLC9_Camper_Stat1", value: 16 },
//       { name: "DBD_FixSecondFloorGenerator_MapAsy_Chapel", value: 1 },
//       { name: "DBD_Chapter9_Slasher_Stat1", value: 23 },
//       { name: "DBD_Chapter9_Camper_Stat1", value: 3 },
//       { name: "DBD_Chapter10_Slasher_Stat1", value: 2 },
//       { name: "DBD_Chapter10_Camper_Stat1", value: 36 },
//       { name: "DBD_Chapter11_Slasher_Stat1", value: 2 },
//       { name: "DBD_Chapter11_Camper_Stat1_float", value: 25.935455322265625 },
//       { name: "DBD_FixSecondFloorGenerator_MapBrl_Temple", value: 1 },
//       { name: "DBD_Chapter12_Slasher_Stat1", value: 1 },
//       { name: "DBD_Chapter12_Camper_Stat1", value: 17 },
//       { name: "DBD_Chapter13_Slasher_Stat1", value: 2 },
//       { name: "DBD_Chapter14_Camper_Stat1", value: 4 },
//       { name: "DBD_Chapter15_Slasher_Stat2", value: 1 },
//       { name: "DBD_FixSecondFloorGenerator_MapUkr_Saloon", value: 1 },
//       { name: "DBD_Chapter15_Camper_Stat1", value: 8 },
//       { name: "DBD_FixSecondFloorGenerator_MapWal_Level_01", value: 1 },
//       { name: "DBD_Chapter16_Camper_Stat1_float", value: 19.6553382873535156 },
//       { name: "DBD_Chapter17_Slasher_Stat2", value: 3 },
//       { name: "DBD_Chapter17_Camper_Stat1", value: 90 },
//       { name: "DBD_Chapter17_Camper_Stat2_float", value: 28.6254596710205078 },
//       { name: "DBD_Chapter18_Slasher_Stat2", value: 10 },
//       { name: "DBD_Chapter19_Slasher_Stat2", value: 1 },
//       { name: "DBD_Chapter19_Camper_Stat1", value: 9 },
//       { name: "DBD_Chapter19_Camper_Stat2", value: 351 },
//     ],
//     achievements: [
//       { name: "ACH_SACRIFICE_4_SURVIVORS_IAM", achieved: 1 },
//       { name: "ACH_ESCAPE_KO", achieved: 1 },
//       { name: "ACH_HATCH_ESCAPE", achieved: 1 },
//       { name: "ACH_4CAMPERS_ESCAPE", achieved: 1 },
//       { name: "ACH_HEALDYING_OR_UNHOOK", achieved: 1 },
//       { name: "ACH_HEALDYING_OR_UNHOOK_POSTEXIT", achieved: 1 },
//       { name: "ACH_REPAIR", achieved: 1 },
//       { name: "ACH_SKILL_CHECK", achieved: 1 },
//       { name: "ACH_SLASHER_MAXSCORE_BYCAT", achieved: 1 },
//       { name: "ACH_10K_POINTS_ONECATEGORY", achieved: 1 },
//       { name: "ACH_BLOODWEB_LVL10", achieved: 1 },
//       { name: "ACH_BLOODWEB_LVL50", achieved: 1 },
//       { name: "ACH_BLOODWEB_1M_PTS", achieved: 1 },
//       { name: "ACH_RANKING", achieved: 1 },
//       { name: "ACH_FULLLOADOUT_CAMPER", achieved: 1 },
//       { name: "ACH_EQUIPANDESCAPE_ULTRARARE", achieved: 1 },
//       { name: "ACH_ESCAPE_WITH_ITEM", achieved: 1 },
//       { name: "ACH_ESCAPE_WITH_ITEM_FROM", achieved: 1 },
//       { name: "ACH_PERK_LVL3", achieved: 1 },
//       { name: "ACH_NOBLOOD_ASYLUM", achieved: 1 },
//       { name: "ACH_2NDFLOORREPAIR_ASYLUM", achieved: 1 },
//       { name: "ACH_DLC2_SURVIVOR_2", achieved: 1 },
//       { name: "ACH_DLC3_KILLER_2", achieved: 1 },
//       { name: "ACH_DLC5_SURVIVOR_2", achieved: 1 },
//       { name: "ACH_DLC9_SURVIVOR_1", achieved: 1 },
//       { name: "ACH_CHAPTER11_SURVIVOR_2", achieved: 1 },
//       { name: "ACH_CHAPTER12_SURVIVOR_1", achieved: 1 },
//       { name: "NEW_ACHIEVEMENT_146_29", achieved: 1 },
//       { name: "ACH_CHAPTER16_SURVIVOR_1", achieved: 1 },
//       { name: "ACH_CHAPTER16_SURVIVOR_2", achieved: 1 },
//       { name: "ACH_CHAPTER17_SURVIVOR_1", achieved: 1 },
//       { name: "ACH_CHAPTER17_SURVIVOR_2", achieved: 1 },
//       { name: "ACH_CHAPTER19_SURVIVOR_2", achieved: 1 },
//     ],
//   },
// };
export const Stats: FC = () => {
  //State
  const initialValues = { steamId: "" };
  const [values, setValues] = useState(initialValues);
  const [dbdStats, setDbdStats] = useState<SteamApi>();
  const [survivorStats, setSurvivorStats] = useState<StatsEntity[]>();
  const [killerStats, setKillerStats] = useState<StatsEntity[]>();
  const [genericStats, setGenericStats] = useState<StatsEntity[]>();
  const [unknownStats, setUnknownStats] = useState<StatsEntity[]>();

  //Dictionaries
  const killerStatLookup: StatsLookup = {
    DBD_KillerSkulls: "Killer rank (pips)",
    DBD_KilledCampers:
      "Survivors killed (mori, devour hope, rancor, pig traps...)",
    DBD_SacrificedCampers: "Survivors sacrificed",
    DBD_TrapPickup: "Bear trap catches (trapper)",
    DBD_ChainsawHit: "Chainsaw hits (hillbilly)",
    DBD_SlasherMaxScoreByCategory:
      "Killer perfect games (5k+ in all categories)",
    DBD_UncloakAttack: "Uncloack attacks (wraith)",
    DBD_SlasherFullLoadout: "Played killer with full loadout",
    DBD_SlasherChainAttack: "Blink attacks (nurse)",
    DBD_DLC3_Slasher_Stat1: "Phantasms triggered (hag)",
    DBD_DLC4_Slasher_Stat1: "Shocks (doctor)",
    DBD_DLC8_Slasher_Stat1: "Reverse bear traps placed (pig)",
    DBD_SlasherTierIncrement: "Evil Within tiers ups (myers)",
    DBD_DLC4_Slasher_Stat2:
      "Trials with all survivors in madness tier 3 (doctor)",
    DBD_DLC6_Slasher_Stat1: "Downed survivors with chainsaw (leatherface)",
    DBD_DLC6_Slasher_Stat2:
      "Survivors hooked in the basement (once per survivor)",
    DBD_DLC8_Slasher_Stat2:
      "Survivors killed or sacrificed after all generators are repaired",
    DBD_DLC5_Slasher_Stat1: "Hatchets thrown (huntress)",
    DBD_DLC7_Slasher_Stat1: "Survivors to dream state (krueger)",
    DBD_DLC7_Slasher_Stat2: "Obsessions sacrificed",
    DBD_Chapter15_Slasher_Stat1:
      "Downed survivors while speared (deathslinger)",
    DBD_Chapter15_Slasher_Stat2: "Survivors grabbed while cleansing a totem",
    DBD_Event1_Stat1:
      "Had at least 3 survivors hooked in the basement at same time",
    DBD_DLC9_Slasher_Stat1: "Generators damaged with a survivor hooked",
    DBD_DLC9_Slasher_Stat2: "Downed survivors while intoxicated (clown)",
    DBD_Chapter9_Slasher_Stat1:
      "Hit a survivor who dropped a pallet within a chase",
    DBD_Chapter9_Slasher_Stat2: "Downed survivors after haunting (spirit)",
    DBD_Chapter10_Slasher_Stat1: "Hit a survivor while carrying another",
    DBD_Chapter10_Slasher_Stat2:
      "Downed survivors while in deep wound (legion)",
    DBD_Chapter11_Slasher_Stat1:
      "Sacrificed all survivors before last generator is repaired",
    DBD_Chapter11_Slasher_Stat2:
      "Downed survivors while in max sickness (plague)",
    DBD_Chapter12_Slasher_Stat1:
      "Survivors grabbed while repairing a generator",
    DBD_Chapter12_Slasher_Stat2: "Downed survivors while marked (ghostface)",
    DBD_Chapter13_Slasher_Stat1: "Hatches closed",
    DBD_Chapter13_Slasher_Stat2: "Downed survivors using shred (demogorgon)",
    DBD_Chapter14_Slasher_Stat1: "Hooked a survivor while everyone is injured",
    DBD_Chapter14_Slasher_Stat2:
      "Downed survivors while using blood fury (oni)",
  };
  const genericStatLookup: StatsLookup = {
    DBD_BloodwebPoints: "Bloodpoints earned",
    DBD_MaxBloodwebPointsOneCategory:
      "Total amount of points earned after maxing one category",
    DBD_UnlockRanking: "Ranked up",
    DBD_Event1_Stat3: "Mystery boxes opened in bloodwebs",
    DBD_BloodwebMaxLevel: "Highest Leveled Character",
    DBD_BloodwebPerkMaxLevel: "Number of Lv 50 Characters",
  };
  const survivorStatLookup: StatsLookup = {
    DBD_CamperMaxScoreByCategory:
      "Survivor perfect games (5k+ in all categories)",
    DBD_CamperSkulls: "Survivor rank (pips)",
    DBD_GeneratorPct_float: "Equivalent generators repaired",
    DBD_HealPct_float: "Equivalent survivors healed",
    DBD_EscapeKO: "Escaped while crawling",
    DBD_Escape: "Escaped while healty/injured",
    DBD_SkillCheckSuccess: "Successful skill checks",
    DBD_HookedAndEscape: "Escaped after unhooking self",
    DBD_UnhookOrHeal: "Survivors unhooked or healed from dying state",
    DBD_UnhookOrHeal_PostExit:
      "Survivors unhooked or healed from dying state in endgame",
    DBD_EscapeThroughHatch: "Escaped through the hatch",
    DBD_CamperFullLoadout: "Played survivor with full loadout",
    DBD_CamperNewItem: "Escaped with new item",
    DBD_CamperKeepUltraRare: "Escaped with ultra rare item",
    DBD_AllEscapeThroughHatch: "Escaped through the hatch with everyone",
    DBD_CamperEscapeWithItemFrom:
      "Escaped with item someone else brought into game",
    DBD_EscapeNoBlood_MapAsy_Asylum:
      "Escaped from Crotus Prenn Asylum with no bloodloss",
    DBD_FixSecondFloorGenerator_MapAsy_Asylum:
      "Repaired 2nd floor generator and escaped from Disturbed Ward",
    DBD_FixSecondFloorGenerator_MapSub_Street:
      "Repaired Myers' house generator and escaped from Lampkin Lane",
    DBD_EscapeNoBlood_Obsession:
      "Escaped for last with no bloodloss as obsession",
    DBD_FixSecondFloorGenerator_MapSwp_PaleRose:
      "Repaired steamboat generator and escaped from The Pale Rose",
    DBD_DLC3_Camper_Stat1: "Hex totems cleansed",
    DBD_HitNearHook: "Protected survivors after the unhook",
    DBD_Camper8_Stat1: "Damaged generators repaired (once per generator)",
    DBD_Camper8_Stat2: "Vaults while in chase",
    DBD_Camper9_Stat2: "Escaped after been injured for half of the trail",
    DBD_FixSecondFloorGenerator_MapBrl_MaHouse:
      "Repaired dwelling generator and escaped from Mother's Dwelling",
    DBD_DLC7_Camper_Stat1: "Chest searched",
    DBD_DLC7_Camper_Stat2: "Exit gates opened",
    DBD_DLC8_Camper_Stat1: "Escaped after getting downed once",
    DBD_Event1_Stat2: "Chest searched in the basement",
    DBD_FixSecondFloorGenerator_MapFin_Hideout:
      "Repaired bathroom generator and escaped from The Game",
    DBD_DLC9_Camper_Stat1: "Vaults making the killer miss",
    DBD_FixSecondFloorGenerator_MapAsy_Chapel:
      "Repaired chapel generator and escaped from Father Campbell's Chapel",
    DBD_Chapter9_Camper_Stat1: "Unhooked yourself",
    DBD_FixSecondFloorGenerator_MapHti_Manor:
      "Repaired residence generator and escaped from Family Residence",
    DBD_Chapter10_Camper_Stat1: "Hooks broken",
    DBD_FixSecondFloorGenerator_MapKny_Cottage:
      "Repaired chalet generator and escaped from Mount Ormond Resort",
    DBD_Chapter11_Camper_Stat1_float: "Healed survivors while injured",
    DBD_FixSecondFloorGenerator_MapBrl_Temple:
      "Repaired temple basement generator and escaped from The Temple of Purgation",
    DBD_Chapter12_Camper_Stat1: "Escaped from the killers grasp",
    DBD_Chapter12_Camper_Stat2: "Escaped through the hatch while crawling",
    DBD_FixSecondFloorGenerator_MapQat_Lab:
      "Repaired isolation room generator and escaped from The Underground Complex",
    DBD_FixSecondFloorGenerator_MapHti_Shrine:
      "Repaired upper shrine generator and escaped from Sanctum of Wrath",
    DBD_Chapter14_Camper_Stat1:
      "Protection hits while the killer was carrying a survivor",
    DBD_FixSecondFloorGenerator_MapUkr_Saloon:
      "Repaired saloon generator and escaped from Dead Dawg Saloon",
    DBD_Chapter15_Camper_Stat1: "Survivors healed from dying to injured state",
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchStats(values.steamId);
  };
  const parseStatsData = (data: SteamApi) => {
    let killerStatsMap: StatsEntity[] = [],
      survivorStatsMap: StatsEntity[] = [],
      genericStatsMap: StatsEntity[] = [],
      unknownStatsMap: StatsEntity[] = [];

    data?.playerstats?.stats?.map((stat: StatsEntity) => {
      switch (true) {
        case killerStatLookup.hasOwnProperty(stat.name):
          killerStatsMap.push(stat);
          break;
        case survivorStatLookup.hasOwnProperty(stat.name):
          survivorStatsMap.push(stat);
          break;
        case genericStatLookup.hasOwnProperty(stat.name):
          genericStatsMap.push(stat);
          break;
        default:
          unknownStatsMap.push(stat);
          break;
      }
      return true;
    });

    setKillerStats(killerStatsMap);
    setSurvivorStats(survivorStatsMap);
    setGenericStats(genericStatsMap);
    setUnknownStats(unknownStatsMap);
    setDbdStats(data);
  };

  const fetchStats = async (steamId: string) => {
    const response = await fetch(
      `/v0002/?appid=381210&key=60CC7208B3EA2ABFA86557BBB788C2B8&steamid=${steamId}`
    );
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    const data: SteamApi = await response.json();
    parseStatsData(data);
  };

  const [profileOpen, setProfileOpen] = useState(false);
  const [steamidOpen, setSteamidOpen] = useState(false);

  return (
    <Container>
      <Row>
        <BackButton />
      </Row>
      <Row>
        <Col>
          <h2>Your DBD Steam Stats!</h2>
          <p>
            If you play DBD on steam we can pull a bunch of cool stats for you,
            but first you are going to need a public profile and your unique
            SteamID.
            <Button
              variant="danger"
              onClick={() => setProfileOpen(!profileOpen)}
              className="mr-2"
            >
              How to Make Profile Public
            </Button>
            <Button
              variant="danger"
              onClick={() => setSteamidOpen(!steamidOpen)}
            >
              How to Get Steam Id
            </Button>
          </p>
          <Collapse in={profileOpen}>
            <p>
              {" "}
              Click View my Profile, then Edit Profile, then Privacy, and set
              your Profile to public and Game Details to Public
              <div className="scrollContainer">
                <img src={ProfileImage} alt="Visual of above instructions" />
              </div>
            </p>
          </Collapse>
          <Collapse in={steamidOpen}>
            <p>
              Then find your Steam ID and insert it below!
              <div className="scrollContainer">
                <img
                  src={SteamInstructions}
                  alt="Visual of above instructions"
                />
              </div>
            </p>
          </Collapse>
        </Col>
      </Row>
      <Row>
        <form onSubmit={onSubmit}>
          <label htmlFor="steamId">Steam Id</label>
          <input
            name="steamId"
            value={values.steamId}
            onChange={onChange}
            type="number"
            placeholder="Enter Steam ID"
            className="mb-3"
            required
            pattern="[0-9]*"
            inputMode="numeric"
          />
          <button type="submit">
            Get My Stats <div id="chevron-arrow-right"></div>
          </button>
        </form>
      </Row>
      {dbdStats && (
        <>
          <Row>
            <Alert key="1" variant="dark">
              <p>
                Do you stream? You can now add the below urls as a browser
                source to show stats on your stream! Click add browser source,
                paste the url, set the size to 300x400px and leave the default
                css to get rid of the background!
              </p>
              <p>
                Killer Stats Overlay:{" "}
                <pre>
                  https://www.dbdcompanion.com/overlay/killer/{values.steamId}
                </pre>
              </p>
              <p>
                Survivor Stats Overlay:{" "}
                <pre>
                  https://www.dbdcompanion.com/overlay/survivor/{values.steamId}
                </pre>
              </p>
            </Alert>
          </Row>
          <Row>
            <Col>
              <h4>Killer Stats</h4>
              <StatsList
                statsList={killerStats as StatsEntity[]}
                statsListLookup={killerStatLookup}
              />
            </Col>
            <Col>
              <h4>Survivor Stats</h4>
              <StatsList
                statsList={survivorStats as StatsEntity[]}
                statsListLookup={survivorStatLookup}
              />
            </Col>
            <Col>
              <h4>Generic Stats</h4>
              <StatsList
                statsList={genericStats as StatsEntity[]}
                statsListLookup={genericStatLookup}
              />
              <h4>Unknown Stats</h4>
              <StatsList statsList={unknownStats as StatsEntity[]} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
