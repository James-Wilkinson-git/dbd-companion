//JS Import
import React, { FC, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Perk } from "../../components/PerkItem/Perk";
import { BackButton } from "../../components/BackBtn/BackButton";
import { Collapse } from "react-bootstrap";
import "./PerksList.scss";
export const PerksList: FC = () => {
  const [openFilters, setFiltersOpen] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);
  const perks = [
    "iconPerks_adrenaline.png",
    "iconPerks_fixated.png",
    "iconPerks_proveThyself.png",
    "iconPerks_aftercare.png",
    "iconPerks_flipFlop.png",
    "iconPerks_quickAndQuiet.png",
    "iconPerks_agitation.png",
    "iconPerks_forcedPenance.png",
    "iconPerks_redHerring.png",
    "iconPerks_alert.png",
    "iconPerks_forThePeople.png",
    "iconPerks_rememberMe.png",
    "iconPerks_aNursesCalling.png",
    "iconPerks_franklinsLoss.png",
    "iconPerks_repressedAlliance.png",
    "iconPerks_anyMeansNecessary.png",
    "iconPerks_furtiveChase.png",
    "iconPerks_resilience.png",
    "iconPerks_appraisal.png",
    "iconPerks_gearHead.png",
    "iconPerks_ruin.png",
    "iconPerks_artefactHunter.png",
    "iconPerks_generatorOvercharge.png",
    "iconPerks_saboteur.png",
    "iconPerks_autodidact.png",
    "iconPerks_hangmansTrick.png",
    "iconPerks_saveTheBestForLast.png",
    "iconPerks_babySitter.png",
    "iconPerks_hatred.png",
    "iconPerks_secondWind.png",
    "iconPerks_balancedLanding.png",
    "iconPerks_hauntedGround.png",
    "iconPerks_selfCare.png",
    "iconPerks_bamboozle.png",
    "iconPerks_headOn.png",
    "iconPerks_Self-Preservation.png",
    "iconPerks_BBQAndChili.png",
    "iconPerks_hexBloodFavor.png",
    "iconPerks_shadowborn.png",
    "iconPerks_BeastOfPrey.png",
    "iconPerks_HexCrowdControl.png",
    "iconPerks_slipperyMeat.png",
    "iconPerks_betterTogether.png",
    "iconPerks_hexRetribution.png",
    "iconPerks_sloppyButcher.png",
    "iconPerks_bitterMurmur.png",
    "iconPerks_hexUndying.png",
    "iconPerks_smallGame.png",
    "iconPerks_bloodEcho.png",
    "iconPerks_Hoarder.png",
    "iconPerks_SmashHit.png",
    "iconPerks_bloodhound.png",
    "iconPerks_hope.png",
    "iconPerks_soleSurvivor.png",
    "iconPerks_bloodPact.png",
    "iconPerks_HuntressLullaby.png",
    "iconPerks_solidarity.png",
    "iconPerks_bloodWarden.png",
    "iconPerks_imAllEars.png",
    "iconPerks_soulGuard.png",
    "iconPerks_boilOver.png",
    "iconPerks_infectiousFright.png",
    "iconPerks_spiesFromTheShadows.png",
    "iconPerks_bond.png",
    "iconPerks_innerStrength.png",
    "iconPerks_spineChill.png",
    "iconPerks_borrowedTime.png",
    "iconPerks_insidious.png",
    "iconPerks_spiritFury.png",
    "iconPerks_botanyKnowledge.png",
    "iconPerks_ironGrasp.png",
    "iconPerks_sprintBurst.png",
    "iconPerks_breakdown.png",
    "iconPerks_ironMaiden.png",
    "iconPerks_stakeOut.png",
    "iconPerks_breakout.png",
    "iconPerks_ironWill.png",
    "iconPerks_Starstruck.png",
    "iconPerks_brutalStrength.png",
    "iconPerks_kindred.png",
    "iconPerks_streetwise.png",
    "iconPerks_buckleUp.png",
    "iconPerks_knockOut.png",
    "iconPerks_stridor.png",
    "iconPerks_builtToLast.png",
    "iconPerks_lastStanding.png",
    "iconPerks_surge.png",
    "iconPerks_calmSpirit.png",
    "iconPerks_leader.png",
    "iconPerks_surveillance.png",
    "iconPerks_camaraderie.png",
    "iconPerks_leftBehind.png",
    "iconPerks_technician.png",
    "iconPerks_corruptIntervention.png",
    "iconPerks_lightborn.png",
    "iconPerks_temp1.png",
    "iconPerks_coulrophobia.png",
    "iconPerks_lightweight.png",
    "iconPerks_temp2.png",
    "iconPerks_coupDeGrace.png",
    "iconPerks_lithe.png",
    "iconPerks_tenacity.png",
    "iconPerks_cruelConfinement.png",
    "iconPerks_luckyBreak.png",
    "iconPerks_TerritorialImperative.png",
    "iconPerks_danceWithMe.png",
    "iconPerks_madGrit.png",
    "iconPerks_thatanophobia.png",
    "iconPerks_darkDevotion.png",
    "iconPerks_makeYourChoice.png",
    "iconPerks_theThirdSeal.png",
    "iconPerks_darkSense.png",
    "iconPerks_mettleOfMan.png",
    "iconPerks_thisIsNotHappening.png",
    "iconPerks_DeadHard.png",
    "iconPerks_mindBreaker.png",
    "iconPerks_thrillingTremors.png",
    "iconPerks_deadManSwitch.png",
    "iconPerks_monitorAndAbuse.png",
    "iconPerks_thrillOfTheHunt.png",
    "iconPerks_deathbound.png",
    "iconPerks_monstrousShrine.png",
    "iconPerks_tinkerer.png",
    "iconPerks_deception.png",
    "iconPerks_nemesis.png",
    "iconPerks_toughRunner.png",
    "iconPerks_decisiveStrike.png",
    "iconPerks_NoMither.png",
    "iconPerks_trailOfTorment.png",
    "iconPerks_deerstalker.png",
    "iconPerks_noOneEscapesDeath.png",
    "iconPerks_unbreakable.png",
    "iconPerks_dejaVu.png",
    "iconPerks_noOneLeftBehind.png",
    "iconPerks_underperform.png",
    "iconPerks_deliverance.png",
    "iconPerks_NoWayOut.png",
    "iconPerks_unnervingPresence.png",
    "iconPerks_desperateMeasures.png",
    "iconPerks_objectOfObsession.png",
    "iconPerks_unrelenting.png",
    "iconPerks_detectivesHunch.png",
    "iconPerks_offTheRecord.png",
    "iconPerks_upTheAnte.png",
    "iconPerks_devourHope.png",
    "iconPerks_openHanded.png",
    "iconPerks_urbanEvasion.png",
    "iconPerks_discordance.png",
    "iconPerks_Oppression.png",
    "iconPerks_vigil.png",
    "iconPerks_distortion.png",
    "iconPerks_overwhelmingPresence.png",
    "iconPerks_visionary.png",
    "iconPerks_distressing.png",
    "iconPerks_pharmacy.png",
    "iconPerks_wakeUp.png",
    "iconPerks_diversion.png",
    "iconPerks_playWithYourFood.png",
    "iconPerks_wellMakeIt.png",
    "iconPerks_dragonsGrip.png",
    "iconPerks_plunderersInstinct.png",
    "iconPerks_WereGonnaLiveForever.png",
    "iconPerks_dyingLight.png",
    "iconPerks_poised.png",
    "iconPerks_whispers.png",
    "iconPerks_empathy.png",
    "iconPerks_popGoesTheWeasel.png",
    "iconPerks_windowsOfOpportunity.png",
    "iconPerks_enduring.png",
    "iconPerks_powerStruggle.png",
    "iconPerks_zanshinTactics.png",
    "iconPerks_FastTrack.png",
    "iconPerks_predator.png",
  ];
  return (
    <Container>
      <Row>
        <BackButton />
        <div className="filtersBtn">
          <button
            className="filtersBtn"
            onClick={() => setFiltersOpen(!openFilters)}
            aria-controls="Filters Closed"
            aria-expanded={openFilters}
          >
            Filters
          </button>
        </div>
        <div className="filtersBtn">
          <button
            className="filtersBtn"
            onClick={() => setSearchOpen(!openSearch)}
            aria-controls="Search Closed"
            aria-expanded={openSearch}
          >
            Search
          </button>
        </div>
      </Row>
      <Collapse in={openFilters} className="mb-3">
        <Row>
          <Col xs={12} md={4}>
            <div>
              <select name="Killers" id="killerSelect">
                <option value="">Killers</option>
                <option value="The Hag">The Hag</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div>
              <select name="Survivors" id="survivorSelect">
                <option value="Dwight Fairfield">Survivors</option>
                <option value="Dwight Fairfield">Dwight</option>
              </select>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div>
              <select name="Category" id="categorySelect">
                <option value="Support">Categories</option>
                <option value="Support">Support</option>
              </select>
            </div>
          </Col>
        </Row>
      </Collapse>
      <Collapse in={openSearch} className="mb-3">
        <div id="Search-Open">
          <input
            type="text"
            name="search"
            placeholder="Perk Name"
            className="perkSearch"
          />
        </div>
      </Collapse>
      <Row>
        <Col>
          <h2>Perks List</h2>
          <div className="perksContainer">
            {perks.map((perk) => {
              return <Perk thumb={perk} />;
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
