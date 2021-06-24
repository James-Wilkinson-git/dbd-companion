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
import statusIcon from "../../assets/status_effects.png";
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
            <Link to="/status">
              <img src={statusIcon} alt="Status Effects List" />
              <p>Status Effects List</p>
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
      <Row>
        <Col>
          <small>
            Not affiliated with{" "}
            <a href="https://www.bhvr.com/" target="_Blank">
              Behaviour Interactive
            </a>{" "}
            or{" "}
            <a href="https://deadbydaylight.com/en" target="_Blank">
              Dead By Daylight Game
            </a>
            , images copyright respective owners and used under fair use for
            educational purposes. You can contribute over on{" "}
            <a href="https://github.com/jerw-git/dbd-companion" target="_Blank">
              GitHub
            </a>{" "}
            and chat with me over on{" "}
            <a href="https://twitter.com/jameserwilk" target="_Blank">
              Twitter
            </a>{" "}
            or{" "}
            <a href="https://www.twitch.tv/JAMESerwilk" target="_Blank">
              Twitch
            </a>
            .
          </small>
        </Col>
      </Row>
    </Container>
  );
};
