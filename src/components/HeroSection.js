import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {" "}
      <video src="/videos/video-1.mov" autoPlay loop muted />
      <h1>SQUID GAME</h1>
      <p>And INEQUALITY</p>
    </div>
  );
}

export default HeroSection;
