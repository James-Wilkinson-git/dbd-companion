import React from "react";
import Card from "react-bootstrap/Card";

export function Perk() {
  return (
    <Card bg="dark" className="mb-2">
      <Card.Body>
        <img
          width={128}
          height={128}
          className="mr-3 float-left"
          src="/images/perks/iconPerks_aceInTheHole.png"
          alt="Ace In The Hole"
        />
        <h5>Ace in the Hole</h5>
        <p>Lady Luck always seems to be throwing something good your way.</p>

        <p>
          When retrieving an Item from a Chest, there is a chance an Add-on will
          be attached to it.
        </p>

        <ul>
          <li>100 % chance for an Add-on of Very Rare Rarity or lower.</li>
          <li>
            10/25/50 % chance for a second Add-on of Uncommon Rarity or lower.
          </li>
          <li>
            Ace in the Hole allows you to keep any Add-ons your Item has
            equipped upon escaping.
          </li>
        </ul>

        <p>
          <em>
            "Everything that glitters isn't gold. But gold isn't worth a damn in
            this place, so this should come in handy." — Ace Visconti
          </em>
        </p>
      </Card.Body>
    </Card>
  );
}
