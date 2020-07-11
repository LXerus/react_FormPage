import React from "react";
import { Link } from "react-router-dom";
import Astronauts from "../images/astronautas.svg";
import confLogo from "../images/logoconf.svg";
import "./styles/Home.css";
import "../global.css";

function Home() {
  return (
    <div className="Home-container">
      <div className="Home-content">
        <img src={confLogo} alt="Conf Logo" />
        <h1>PRINT YOUR BADGES</h1>
        <p>The easiest way to manage your conference</p>
        <Link className="btn btn-primary" id="start-link">
          Stat Now
        </Link>
      </div>
      <div className="Home-image-container">
        <img id="Logo" src={Astronauts} alt="Astronauts" />
      </div>
    </div>
  );
}

export default Home;
