import React, { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { BackButton } from "../../components/BackBtn/BackButton";

export const StatusEffects: FC = () => {
  return (
    <Container>
      <Row>
        <BackButton />
      </Row>
      <Row>A listing of all status effects you will see on screen</Row>
    </Container>
  );
};
