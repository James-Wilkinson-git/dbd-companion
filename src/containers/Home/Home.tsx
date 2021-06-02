import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
//Images
import perksIcon from "../../assets/perks-icon.png";
import rouletteIcon from "../../assets/roulette-icon.png";
import tutorialIcon from "../../assets/tutorial-icon.png";
import dbdLogo from "../../assets/dbd-logo.png";
import statsIcon from "../../assets/stats-icon.png";
export const Home: FC = () => {
  return (
    <Container>
      <Row>
        <div className="header">
          <Link to="/">
            <img src={dbdLogo} alt="Home" />
            <h1>Dead By Daylight Companion</h1>
          </Link>
        </div>
      </Row>
      <Row>
        <Col>
          <div className="perkBtn">
            <Link to="/perks">
              <img src={perksIcon} alt="Perks List" />
              <p>Perks List</p>
            </Link>
          </div>
        </Col>
        <Col>
          <div className="perkBtn">
            <Link to="/roulette">
              <img src={rouletteIcon} alt="Perks Roulette" />
              <p>Perks Roulette</p>
            </Link>
          </div>
        </Col>
        <Col>
          <div className="perkBtn">
            <Link to="/tutorials">
              <img src={tutorialIcon} alt="Tutorials" />
              <p>How to Play</p>
            </Link>
          </div>
        </Col>
        <Col>
          <div className="perkBtn">
            <Link to="/stats">
              <img src={statsIcon} alt="Stats" />
              <p>Your Stats</p>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
