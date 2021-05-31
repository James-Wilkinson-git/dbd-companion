//JS Import
import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Perk } from "../components/Perk";
import { BackButton } from "../components/BackButton";

export const PerksList: FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BackButton />
          <h2>Perks List</h2>
          <Perk />
          <Perk />
          <Perk />
          <Perk />
          <Perk />
        </Col>
      </Row>
    </Container>
  );
};
