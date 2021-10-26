import React from "react";
import "./Pages.css";
import Footer from "../Footer";

function SignUp() {
  return (
    <div className="container">
      <h1 className="main-header">Stakes of the game</h1>

      <img
        className="singlePostImg"
        src="https://media.distractify.com/brand-img/0noufbFQk/0x0/squid-game-piggy-bank-1633364151010.jpg"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">Cash Prize</h3>
        <p className="body-text">
          The players, who are in extreme financial difficulty, risk it all for
          an opportunity to win a huge cash prize in the Squid Game series of
          competitions and with each game, the prize gets larger.
        </p>
        <p className="body-text">
          The consequence of losing is death, and every time a player dies in a
          competition, or even outside of one, the prize money increases.
        </p>
      </div>

      <div className="sub-container">
        <h3 className="sub-header">
          The 'Squid Game' prize amount increases with each player's death.
        </h3>
        <p className="body-text">
          At the start of the series, the prize amount isn't listed on the
          scoreboard in the huge dormitory where the players sleep. However, one
          of the masked guards informs the players that the amount increases
          after each game. Eventually, they find out that the amount is
          essentially based on each player's death. Every time a player dies in
          or outside of an official game in Squid Game, 100,000 won is added to
          the prize fund. It might not sound like much, but with 456 players in
          total, it certainly adds up. By the end of the series and all size
          games, only one player is supposed to be left standing. They alone win
          the total cash prize.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
