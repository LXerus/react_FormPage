import React from "react";
import PlatziConfLogo from "../images/PlatziConfLogo.svg";
import MediaLogo from "../images/twitter.jpg";
import Gravatar from  "./Gravatar";
import "./styles/Badge.css";
import "./styles/BadgeMobile.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge-container">
          <div className="badge-header">
            <img src={PlatziConfLogo} alt="img" />
          </div>
          <div className="badge-body">
            <Gravatar
              className="profile-picture"
              email={this.props.email}
              alt="Avatar"
            />
            <div className="badge-name">
              <p>{this.props.firstName}</p>
              <p>{this.props.lastName}</p>
            </div>
          </div>
          <div className="badge-footer">
            <div className="badge-description">
              <p>{this.props.jobTitle}</p>
            </div>
            <div>
            <p>{this.props.email}</p>
            </div>
            <div className="badge-social">
              <div className="badge-media-logo">
                <img src={MediaLogo} alt="img" />
              </div>
              <p className="badge-twitter-link">{this.props.twitter}</p>
            </div>
            <p className="badge-footer-tag">#PlatziConf</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
