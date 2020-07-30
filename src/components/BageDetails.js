import React from "react";
import { Link } from "react-router-dom";
import confLogo from "../images/logoconf.svg";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div>
      <div className="details-hero">
        <div className="details-container">
          <img className="hero-img" src={confLogo} alt="Conf Logo" />
          <div className="details-flex-container">
            <h1>
              {badge.firstName} {badge.lastName}
            </h1>
          </div>
        </div>
      </div>
      <div className="details-container">
        <Badge
          firstName={badge.firstName}
          lastName={badge.lastName}
          email={badge.email}
          twitter={badge.twitter}
          jobTittle={badge.jobTittle}
        />

        <div className="actions-container">
          <div className="details-container">
            <h1>Actions</h1>
          </div>
          <div className="action">
            <Link className="btn-primary" to={`/badges/${badge.badgeId}/edit`}>
              Edit
            </Link>
          </div>
          <div className="action">
            <button onClick={props.onOpenModal} className="btn-danger">
              Delete
            </button>
            <DeleteBadgeModal
              isOpen={props.modalIsOpen}
              onClose={props.onCloseModal}
              onDeleteBadge={props.onDeleteBadge}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
