import React from "react";
import { Container, Row } from "react-bootstrap";
import { BackButton } from "../../components/BackBtn/BackButton";

export default function Roulette() {
  return (
    <Container>
      <Row>
        <BackButton />
      </Row>
      <Row>
        A feature to randomly pick 4 perks for you to run as Killer or Survivor
      </Row>
    </Container>
  );
}
