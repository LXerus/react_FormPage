import React from "react";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList";
import confLogo from "../images/logoconf.svg";
import TestData from "./TestData/TestData";
import "./styles/Badges.css";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    let testData = new TestData();
    this.state = {
      data: testData.getData(),
    };
  }

  componentDidMount() {}

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
          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
