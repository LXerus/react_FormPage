import React from "react";
import headerLogo from "../images/logoconf.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoader";
import "./styles/BadgeNew.css";
import "./styles/BadgeNewGrid.css";
import "./styles/BadgeNewGrid-Mobile.css";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
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

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="badgeNew-hero">
          <img className="hero-img" src={headerLogo} alt="Hero Logo" />
        </div>
        <div className="grid-container">
          <div className="badgeNew-container col-1">
            <Badge
              firstName={this.state.form.firstName || "FIRST_NAME"}
              lastName={this.state.form.lastName || "LAST_NAME"}
              twitter={this.state.form.twitter || "TWITTER"}
              jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
              email={this.state.form.email || "EMAIL"}
              avatarUrl={
                "https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              }
            />
          </div>
          <div className="form-container col-2">
            <h1>New Attendant</h1>
            <BadgeForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error={this.state.error}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
