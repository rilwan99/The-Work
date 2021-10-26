import React from "react";
import "./Pages.css";
import Footer from "../Footer";

function Services() {
  return (
    <div className="container">
      <h1 className="main-header">Squid game players</h1>

      <img
        className="singlePostImg"
        src="https://www.looper.com/img/gallery/the-ending-of-squid-game-season-1-explained/l-intro-1632168234.jpg"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">Seong Gi-Hun</h3>
        <p className="body-text">
          Gi-Hun is the protagonist of the show and is clearly not meant to be
          an ideal hero. As an imperfect father and a gambler, Gi-hun is a
          flawed character who makes mistakes. This is precisely what makes it
          easier to empathize with him and applaud him for making hard decisions
          during the games. He eventaully becomes a character which represents
          that humans are capable of sticking to their morals even when tempted
          with their greatest desires.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="http://pbs.twimg.com/media/FAhIDIiX0Ac92JF.jpg"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">Cho Sang-Woo</h3>
        <p className="body-text">
          Sang-woo, Gi-hun's childhood friend, is a neighborhood legend for
          attending South Korea's top university. The investment banker later
          stole money from his clients and lost it in the stock market, and he
          needs to win the game to avoid arrest and keep his mother's house and
          business. Potrayed as an intellectual and smart character, Sang-Woo is
          an epitome of how greed can causae the best of us to fall.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://pbs.twimg.com/media/FAuKe5rWEAAJ0SW.jpg?name=small"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">Kang Sae-Byeok</h3>
        <p className="body-text">
          As a North Korean defector, Sae-byeok has learned to rely on nobody
          else except herself to survive the toughest situations. However,
          throughout the course of the competition, she learns to trust others
          like Gi-hun, Sang-woo, and Ali. She eventually becomes more
          vulnerable, even opening up about her family and aspirations to
          Ji-yeong in the fourth game.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://www.cheatsheet.com/wp-content/uploads/2021/10/Oh-Yeong-Su-as-Oh-Il-Nam-in-Squid-Game-on-Netflix.jpg"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">Oh Il Nam</h3>
        <p className="body-text">
          Player 001 first seemed to be an ordinary old man who got to
          participate in the Squid Game as a destitute player. Because of his
          brain tumour, it seemed that he did not fully grasp the situation and
          was just enjoying the games as a way to have fun before his death.
          However, it was later revealed that he is the creator and host of the
          Squid Game, a true mastermind who has been hosting the Squid Game for
          decades
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2021-10/211008-squid-game-abdul-ali-ew-1024a-68f560.jpg"
        alt=""
      />

      <div className="sub-container">
        <h3 className="sub-header">Abdul Ali</h3>
        <p className="body-text">
          Ali, a migrant factory worker whose boss withheld his pay for months,
          is forced to leave his wife and baby to take his chance at winning
          millions in the deadly games. He is easily the most likable character
          on the show. From the very first episode, the kindhearted player shows
          he’s willing to risk his own life to save others. As an immigrant, he
          knows what it’s like to be mistreated by cruel individuals, and he
          doesn’t want anyone else to experience hardships like he did.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
