import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";

function Hero() {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero-content">
        <div className="" style={{marginLeft: "1rem"}}>
          <h1 style={{ color: "#fff", wordWrap:"break-word" }}>
            Vichayan focuses on Readers and Writers in
          </h1>
          <h1></h1>
          <p>Vichayan is India's largest digital platform connecting</p>
        </div>
        <div>
          <img src="./images/hero-concept.png" height="400" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
