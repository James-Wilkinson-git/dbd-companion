import React, { FC, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SteamInstructions from "../assets/steam-instructions.jpg";
import { Button, Form } from "react-bootstrap";

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

export const Stats: FC = () => {
  const initialValues = { steamId: "" };
  const [values, setValues] = useState(initialValues);
  const [dbdStats, setDbdStats] = useState<SteamApi>();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchStats(values.steamId);
  };

  const fetchStats = async (steamId: string) => {
    const response = await fetch(
      `/steam/?appid=381210&key=60CC7208B3EA2ABFA86557BBB788C2B8&steamid=${steamId}`
    );
    const data = await response.json();
    setDbdStats(await data);
    console.log(dbdStats?.playerstats.stats);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Your DBD Steam Stats!</h2>
          <p>
            If you play DBD on steam we can pull a bunch of cool stats for you,
            but first you are going to need your unique SteamID this is NOT any
            of your display names or login names, in order to get your id open
            steam and click on your user name in the top right and click account
            details steam id should now be the second line under your username.
          </p>
          <p>
            <img src={SteamInstructions} alt="Visual of above instructions" />
          </p>
        </Col>
      </Row>
      <Row>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Steam Id</Form.Label>
            <Form.Control
              name="steamId"
              value={values.steamId}
              onChange={onChange}
              type="number"
              placeholder="Enter Steam ID"
            />
            <Form.Text className="text-muted">
              We don't store any data
            </Form.Text>
          </Form.Group>
          <Button variant="link" type="submit">
            Get My Stats
          </Button>
        </Form>
      </Row>
      {dbdStats && (
        <Row>
          <Col>
            <ul>
              {" "}
              Achievements:
              {dbdStats.playerstats.achievements?.map((achievements, i) => {
                return (
                  <li key={i}>
                    {achievements.name}: {achievements.achieved}
                  </li>
                );
              })}
            </ul>
            <ul>
              {" "}
              Stats:
              {dbdStats.playerstats.stats?.map((stat, i) => {
                return (
                  <li key={i}>
                    {stat.name}: {stat.value}
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      )}
    </Container>
  );
};
