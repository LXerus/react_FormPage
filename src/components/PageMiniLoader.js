import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import confLogo from "../images/logoconf.svg";

function PageMiniLoader() {
  return (
    <React.Fragment>
      <div className="Badges-hero">
        <img className="hero-img" src={confLogo} alt="Conf Logo" />
      </div>
      <div className="Badges-container">
        <SkeletonTheme color="#7DCD40" highlightColor="#5db36c">
          <div className="Loading-skeleton">           
            <h3>Loading</h3> 
            <Skeleton height={10} width={100} count={1} />
          </div>
        </SkeletonTheme>
      </div>
    </React.Fragment>
  );
}

export default PageMiniLoader;
