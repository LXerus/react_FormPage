import React from "react";
import twitterImage from "../images/twitter.jpg";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="Badges-list">
        {this.props.badges.map((badge) => {
          return (
            <li className="Badges-list-item" key={badge.id}>
              <div className="list-item-container">
                <div>
                  <img src={badge.avatarUrl} className="list-item-image" alt="avatar"/>
                </div>
                <div className="list-item-info">
                  <h2>
                    {badge.firstName} {badge.lastName}
                  </h2>
                  <h3>{badge.jobTitle}</h3>
                  <p className="list-item-email">{badge.email}</p>
                  <div>
                    <img src={twitterImage} alt="twitter logo"/>
                    <p>{badge.twitter}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
