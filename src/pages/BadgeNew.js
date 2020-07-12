<<<<<<< HEAD
import React from "react";
import headerLogo from "../images/PlatziConfLogo.svg";
import Badge from "../components/Badge";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: "",
  };

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    console.log("Clicked");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div className="badgeNew-hero">
          <img className="hero-img" src={headerLogo} alt="" />
        </div>
        <div className="badgeNew-container">
          <div>
            <Badge
              userName="Cristhian Franco"
              profilePicture="https://es.gravatar.com/userimage/188955659/a83b681981e4d239405ddd0f5e32471b.png?size=200"
              userDescription="Fullstack Web Developer"
              userTwitter="@crodfranco"
            />
          </div>
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form-container">
              <h1>New Attendant</h1>
              <label className="form-item">Nombre</label>
              <input
                onChange={this.handleChange}
                className="form-item"
                type="text"
                name="firstName"
                value={this.state.firstName}
              />
              <label className="form-item">Apellido</label>
              <input
                onChange={this.handleChange}
                className="form-item"
                type="text"
                name="lastName"
                value={this.state.lastName}
              />
              <label className="form-item">Email</label>
              <input
                onChange={this.handleChange}
                className="form-item"
                type="email"
                name="email"
                value={this.state.email}
              />
              <label className="form-item">Job Title</label>
              <input
                onChange={this.handleChange}
                className="form-item"
                type="text"
                name="jobTitle"
                value={this.state.jobTitle}
              />
              <label className="form-item">Twitter</label>
              <input
                onChange={this.handleChange}
                className="form-item"
                type="text"
                name="twitter"
                value={this.state.twitter}
              />
              <button
                onClick={this.handleClick}
                className="form-button btn btn-primary"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
=======
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
>>>>>>> responsive
