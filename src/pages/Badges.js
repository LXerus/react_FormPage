import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import BadgesList from "../components/BadgesList";
import confLogo from "../images/PlatziConfLogo.svg";
import TestData from "./TestData/TestData";
import "./styles/Badges.css";
let testData = new TestData();

class Badges extends React.Component {
  state = {
    data: testData.getData(),
  };

  render() {
    return (
      <React.Fragment>
        <div className="Badges-hero">
          <img className="Badges-conf-logo" src={confLogo} alt="Conf Logo" />
        </div>
        <div className="Badges-container">
          <div className="Badges-buttons">
            <Link to="badges/new" className="btn-primary">
              New Badge
            </Link>
          </div>
        </div>
        <div className="Badges-container">
          <div className="Badges-list">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
