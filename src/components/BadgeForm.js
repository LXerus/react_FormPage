import React from "react";
import "./styles/BadgeForm.css";

class BadgeForm extends React.Component {
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
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form-container">
          <h1>New Attendant</h1>
          <label className="form-item">Nombre</label>
          <input
            onChange={this.handleChange}
            className="form-item"
            type="text"
            name="firstName"
            value={this.props.formValues.firstName}
          />
          <label className="form-item">Apellido</label>
          <input
            onChange={this.handleChange}
            className="form-item"
            type="text"
            name="lastName"
            value={this.props.formValues.lastName}
          />
          <label className="form-item">Email</label>
          <input
            onChange={this.handleChange}
            className="form-item"
            type="email"
            name="email"
            value={this.props.formValues.email}
          />
          <label className="form-item">Job Title</label>
          <input
            onChange={this.handleChange}
            className="form-item"
            type="text"
            name="jobTitle"
            value={this.props.formValues.jobTitle}
          />
          <label className="form-item">Twitter</label>
          <input
            onChange={this.handleChange}
            className="form-item"
            type="text"
            name="twitter"
            value={this.props.formValues.twitter}
          />
          <button
            onClick={this.handleClick}
            className="form-button"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
