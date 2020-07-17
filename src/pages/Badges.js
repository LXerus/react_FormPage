import React from "react";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList";
import confLogo from "../images/logoconf.svg";
import api from "../api";
import PageLoader from "../components/PageLoader";
import PageMiniLoader from "../components/PageMiniLoader";
import PageError from "../components/PageError";
//import TestData from "./TestData/TestData";
import "./styles/Badges.css";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    //let testData = new TestData();
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();

  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    console.log("fe");
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoader />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges-hero">
          <img className="hero-img" src={confLogo} alt="Conf Logo" />
        </div>
        <div className="Badges-container">
          <div className="Badges-buttons">
            <Link to="/badges/new" className="btn-primary">
              New Badge
            </Link>
          </div>
        </div>
        <div className="Badges-container">
          <BadgesList badges={this.state.data} />
          <div>{this.state.loading === true && <PageMiniLoader />}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
