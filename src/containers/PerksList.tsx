//JS Import
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Perk } from "../components/Perk";

export function PerksList() {
  return (
    <Container>
      <Row>
        <Col>
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
}
