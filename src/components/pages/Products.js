import React from "react";
import "./Pages.css";
import Footer from "../Footer";

function Products() {
  return (
    <div className="container">
      <h1 className="main-header">Rules of squid game</h1>

      <img
        className="singlePostImg"
        src="https://cdn.vox-cdn.com/thumbor/AO1oSMJYKwSMtheejBWRnT45OlI=/0x0:1200x675/1120x0/filters:focal(0x0:1200x675):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22902573/squid_game_rlgl_social_crop.jpg"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">1. RED LIGHT, GREEN LIGHT</h3>
        <p className="body-text">
          Players stand at the far end of a field behind a starting line while
          another person stands at the far opposite side of same field. The goal
          for the players is to cross to the opposite side of the field, moving
          only when the person at the opposite side says “Green Light” and
          stopping when they say “Red Light.” If someone is spotted moving after
          "Red Light" is called, they are eliminated from the game.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://i.insider.com/615b3bb9542a580019a8ad55?width=800&format=jpeg&auto=webp"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">2. PPOPGI/ DALGONA CANDY</h3>
        <p className="body-text">
          Each of the players is given a tin containing a honeycomb stamped with
          one of four shapes they chose at random before the start of the game.
          The 4 shapes consists of a circle, a triangle, a star, and an
          umbrella. In order to survive, each player must remove the shape
          intact from the honeycomb tin within 10 minutes. If a player is unable
          to fulfill either of these requirements, they are shot on sight.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://i.insider.com/615efa5ba452880019b57216?width=800&format=jpeg&auto=webp"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">3. TUG OF WAR</h3>
        <p className="body-text">
          One team of players holds one end of a large braided rope while the
          other team holds the opposite side of same rope. The goal of the game
          is to overpower the opposing team by pulling on the rope together as a
          team, dragging them across the dividing line drawn in the center
          between the two teams.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://i.insider.com/615ef8d6c2a4ca001875fd9b?width=800&format=jpeg&auto=webp"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">4. MARBLES</h3>
        <p className="body-text">
          This is a straightforward game where players can play any game they
          decide to, with their partner, using 20 marbles. Whoever has all the
          marbles at the end is the winner.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://dingyue.ws.126.net/2021/0929/0385a766j00r06g36009fc000n000cyg.jpg"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">5. GLASS STEPPING STONE BRIDGE</h3>
        <p className="body-text">
          At the start of the game, each player stands at the opposite end of a
          gigantic room suspended several hundred feet above the ground. Between
          the entrance and the exit of the room are two “bridges” of
          side-by-side glass panels, each with 18 panels across. In order to
          win, players must cross the bridge to the other side of the room
          within 16 minutes. Each of the panels between the two bridges is made
          of one of two types of glass: tempered glass, which can withstand the
          weight of at least two players, and regular glass, which will shatter
          on impact and send the player plummeting to their death.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://cdn.mos.cms.futurecdn.net/K92Sm36Q5mvMVaWcge6cBH.png"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">6. SQUID GAME</h3>
        <p className="body-text">
          Squid Game is played on a field drawn in the sand, separating players
          into opposing teams of attackers and defenders. The goal of the
          attackers is to cross the center of the field on one foot before
          attempting to reach the “home” square drawn at the opposite side of
          the field, while the defender’s objective is to stop them at all
          costs.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Products;
