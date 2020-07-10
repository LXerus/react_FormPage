import React from "react";
import PlatziConfLogo from "../images/PlatziConfLogo.svg";
import MediaLogo from "../images/twitter.jpg";
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
            <img className="profile-picture" src={this.props.profilePicture} alt="img" />
            <p>
              {this.props.userName}
            </p>
          </div>
          <div className="badge-footer">
            <div className="badge-description">
              <p>{this.props.userDescription}</p>
            </div>
            <div className="badge-social">
              <div className="badge-media-logo">
                <img src={MediaLogo} alt="img" />
              </div>
              <p className="badge-twitter-link">{this.props.userTwitter}</p>
            </div>
            <p className="badge-footer-tag">#PlatziConf</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Badge;
