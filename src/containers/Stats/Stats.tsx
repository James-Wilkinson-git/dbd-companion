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
import {
  genericStatLookup,
  killerStatLookup,
  survivorStatLookup,
} from "./statsDictionary";

export const Stats: FC = () => {
  //State
  const initialValues = { steamId: "" };
  const [values, setValues] = useState(initialValues);
  const [dbdStats, setDbdStats] = useState<SteamApi>();
  //Set our state to an array of our StatsEntity interface
  const [survivorStats, setSurvivorStats] = useState<StatsEntity[]>();
  const [killerStats, setKillerStats] = useState<StatsEntity[]>();
  const [genericStats, setGenericStats] = useState<StatsEntity[]>();
  const [unknownStats, setUnknownStats] = useState<StatsEntity[]>();

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
      `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=381210&key=D94425951AA703DCF1904F014AB6DAC4&steamid=${steamId}`
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
                  https://dbdcompanion.com/overlay/killer/{values.steamId}
                </pre>
              </p>
              <p>
                Survivor Stats Overlay:{" "}
                <pre>
                  https://dbdcompanion.com/overlay/survivor/{values.steamId}
                </pre>
              </p>
            </Alert>
          </Row>
          <Row>
            <Col>
              <h4>Killer Stats</h4>
              <StatsList
                statsList={killerStats}
                statsListLookup={killerStatLookup}
              />
            </Col>
            <Col>
              <h4>Survivor Stats</h4>
              <StatsList
                statsList={survivorStats}
                statsListLookup={survivorStatLookup}
              />
            </Col>
            <Col>
              <h4>Generic Stats</h4>
              <StatsList
                statsList={genericStats}
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
