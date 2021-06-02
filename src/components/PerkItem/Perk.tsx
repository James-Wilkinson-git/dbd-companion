import React, { FC } from "react";
import "./PerkItem.scss";
export const Perk: FC<{ thumb: string }> = ({ thumb }) => {
  return (
    <>
      <div className="perkThumb">
        <span className="perkIcon">
          <img
            src={"/images/perks/" + thumb}
            alt="Ace In The Hole"
          />
        </span>
      </div>
      {/* <p>Lady Luck always seems to be throwing something good your way.</p>

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
          Ace in the Hole allows you to keep any Add-ons your Item has equipped
          upon escaping.
        </li>
      </ul>

      <p>
        <em>
          "Everything that glitters isn't gold. But gold isn't worth a damn in
          this place, so this should come in handy." — Ace Visconti
        </em>
      </p> */}
    </>
  );
};
