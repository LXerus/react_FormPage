import React from "react";
import twitterImage from "../images/twitter.jpg";
import Gravatar from "../components/Gravatar";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No se encontro ningún badge</h3>
        </div>
      );
    }

    const badgesList = [...this.props.badges].reverse();

    return (
      <ul className="Badges-list">
        {badgesList.map((badge) => {
          return (
            <li className="Badges-list-item" key={badge.id}>
              <Link className="list-itemlink" to={`/badges/${badge.id}/edit`} >
                <div className="list-item-container">
                  <div>
                    <Gravatar
                      email={badge.email}
                      className="list-item-image"
                      alt="avatar"
                    />
                  </div>
                  <div className="list-item-info">
                    <h2>
                      {badge.firstName} {badge.lastName}
                    </h2>
                    <h3>{badge.jobTitle}</h3>
                    <p className="list-item-email">{badge.email}</p>
                    <div>
                      <img src={twitterImage} alt="twitter logo" />
                      <p>{badge.twitter}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
