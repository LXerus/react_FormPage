import React from "react";
import Logo from "../images/logo.svg";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-container">
          <a href="/">
            <img src={Logo} alt="logo" />
            <span className="logo-title-light">Platzi</span>
            <span className="logo-title-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
