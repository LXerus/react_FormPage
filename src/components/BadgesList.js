import React from "react";
import twitterImage from "../images/twitter.jpg";
import Gravatar from "../components/Gravatar";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  let badges = props.badges.reverse();

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div className="Badges-list-container">
        <div className="SearchBox-container">
          <label>Search a Badge</label>
          <input
            type="text"
            className="Barge-list-searchBox"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="Badges-list-container">
      <div className="SearchBox-container">
        <label>Search a Badge</label>
        <input
          type="text"
          className="Barge-list-searchBox"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>
      <ul className="Badges-list">
        {filteredBadges.map((badge) => {
          return (
            <li className="Badges-list-item" key={badge.id}>
              <Link className="list-itemlink" to={`/badges/${badge.id}`}>
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
    </div>
  );
}

export default BadgesList;
