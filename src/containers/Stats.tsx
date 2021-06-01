import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SteamInstructions from "../assets/steam-instructions.jpg";

export const Stats: FC = () => {
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
      <Row>Form</Row>
    </Container>
  );
};
