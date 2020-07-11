import React from "react";
import headerLogo from "../images/logoconf.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeNew.css";
import "./styles/BadgeNewGrid.css";
import "./styles/BadgeNewGrid-Mobile.css";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>        
        <div className="badgeNew-hero">
          <img className="hero-img" src={headerLogo} alt="" />
        </div>
        <div className="grid-container">
          <div className="badgeNew-container col-1">
            <Badge
              userName="Cristhian Franco"
              profilePicture="https://es.gravatar.com/userimage/188955659/a83b681981e4d239405ddd0f5e32471b.png?size=200"
              userDescription="Fullstack Web Developer"
              userTwitter="@crodfranco"
            />
          </div>
          <div className="form-container col-2">
            <BadgeForm
              onChange={this.handleChange}
              formValues={this.state.form}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
