import React from "react";
import { Card, CardColumns, Container, Row } from "react-bootstrap";
import { BackButton } from "../../components/BackBtn/BackButton";

export default function Tutorials() {
  return (
    <Container>
      <Row>
        <BackButton />
      </Row>
      <Row>A collection of the best tutorials on how to play the game!</Row>
      <Row>
        <CardColumns>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>
                Beginner's Guide to Dead by Daylight 2021 - DBD Tips &amp;
                Tricks How to Play
              </Card.Title>
              <Card.Text>
                <iframe
                  src="https://www.youtube-nocookie.com/embed/UUgYnarn8TU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">DrybearGamers</small>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>
                Every Status Effect in DBD - Explained FAST! [Dead by Daylight
                Guide]
              </Card.Title>
              <Card.Text>
                <iframe
                  src="https://www.youtube-nocookie.com/embed/unxe_7FCE5Y"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>Status effects show up on the right side of your screen</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">sh6rpshot</small>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Tutorial on Add Ons</Card.Title>
              <Card.Text>
                Hit me up on twitter with a good tutorial on what are Add Ons,
                how to equip them and what each of them does generally.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">LFM</small>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Tutorial on Perks</Card.Title>
              <Card.Text>
                Hit me up on twitter with a good tutorial on what are Perks, how
                to equip them and what each of them does generally.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">LFM</small>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Tutorial on Offerings</Card.Title>
              <Card.Text>
                Hit me up on twitter (@JAMESerwilk) with a good tutorial on what
                are offerings, how to equip them and what types they are.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">LFM</small>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Tutorial on Sound Effects</Card.Title>
              <Card.Text>
                Hit me up on twitter (@JAMESerwilk) with a good tutorial on the
                various sound effects in the game such as when the twins switch
                these sound effects happen
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">LFM</small>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Tutorial on Tomes &amp; Challenges</Card.Title>
              <Card.Text>
                Hit me up on twitter (@JAMESerwilk) with a good tutorial on how
                to use the Tome and Challenges
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">LFM</small>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Tutorial on Bloodwebs</Card.Title>
              <Card.Text>
                Hit me up on twitter (@JAMESerwilk) with a good tutorial on the
                blood web, what the entity is doing to it over time, and how to
                best spend bloodpoints
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">LFM</small>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Tutorial on Currencies</Card.Title>
              <Card.Text>
                Hit me up on twitter (@JAMESerwilk) with a good tutorial on the
                currencies of the game, bloodpoints, iridesent shards, aura
                cells
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">LFM</small>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Tutorial on Customizations</Card.Title>
              <Card.Text>
                Hit me up on twitter (@JAMESerwilk) with a good tutorial on
                customizing your character
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">LFM</small>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Tutorial on Common Terms</Card.Title>
              <Card.Text>
                Hit me up on twitter (@JAMESerwilk) with a good tutorial on the
                common terms ppl use while playing the game, like saftey
                pipping, pipping, tunnelling, etc.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">LFM</small>
            </Card.Footer>
          </Card>
          <Card bg="dark">
            <Card.Body>
              <Card.Title>Tutorial on Post Game Interface</Card.Title>
              <Card.Text>
                Hit me up on twitter (@JAMESerwilk) with a good tutorial on the
                post game interface, what are all the categories of points, how
                do you get points in each category, how do you report a player
                etc.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">LFM</small>
            </Card.Footer>
          </Card>
        </CardColumns>
      </Row>
    </Container>
  );
}
