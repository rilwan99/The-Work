import React from "react";
import "./Pages.css";
import Footer from "../Footer";

function Page5() {
  return (
    <div className="container">
      <h1 className="main-header">Final Thoughts</h1>

      <img
        className="singlePostImg"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/squidgame-unit-103-1195-1632510930.jpg?crop=1xw:0.7498295841854125xh;center,top&resize=1200:*"
        alt=""
      />

      <div className="sub-container">
        <p className="body-text">
          Squid game dramatizes the possibility of a fair society without any
          forms of inequality. By subjecting everyone to the same conditions,
          all players have the same starting point and they do not have any
          unfair advantage over each other.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="https://eu-images.contentstack.com/v3/assets/blt8bbf16c2d7a209e5/blt124ecff61b2cad42/615eda1918bb02322b393fcb/Squid-Game-Il-Nam-tug-of-war.jpg"
        alt=""
      />

      <div className="sub-container">
        <p className="body-text">
          However, it can be observed that even in an attempt to create an
          environment where all players are equal, inequality still persists as
          some players had unfair advantages over others by cheating and gaining
          insider information regarding the games being played. This is
          testament to the fact that perhaps, inequality can never truly be
          eradicated from our society. There will always be some form of
          inequality present between individuals. This can take the form of
          physical inequality, as some individuals may be more physically gifted
          with better physique, or intellectual inequality, where they may have
          been gifted with a very sharp mind.
        </p>
      </div>

      <img
        className="singlePostImg"
        src="http://www.europarl.europa.eu/resources/library/images/20180409PHT01212/20180409PHT01212_original.jpg"
        alt=""
      />

      <div className="sub-container">
        <p className="body-text">
          Although some form of inequality will always exist, the current state
          of society is still a far cry from one that is supportive of those who
          fall into under privileged groups. There is stark income disparity
          between the rich and poor, unequal access to education for children
          from different socio-economic classes, and other concerning issues
          prevalent today. Current efforts to eradicate inequality and alleviate
          the suffering of under-privileged groups are not sufficient. There
          needs to be more work done in restructuring and changing our social
          systems so that inequality within our societies is diminished.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Page5;
