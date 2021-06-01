import React, { FC, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SteamInstructions from "../assets/steam-instructions.jpg";
import { Button, Form } from "react-bootstrap";

export const Stats: FC = () => {
  const initialValues = { steamId: "" };
  const [values, setValues] = useState(initialValues);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getStats(values.steamId);
  };
  const getStats = async (steamId: string) => {
    const getReq = await fetch(
      `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=381210&key=3CB4E53F9792C36F39D9131612BD780F&steamid=${steamId}`
    );
    const dbdStats = await getReq.json();
    console.log(dbdStats);
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
    </Container>
  );
};
