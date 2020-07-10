import React from "react";
import Logo from "../images/logo.svg";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <img src={Logo} alt="logo" />
            <span className="logo-title-light">Platzi</span>
            <span className="logo-title-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
