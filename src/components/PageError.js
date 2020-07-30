import React from "react";
import LostAstronaut from "../images/lost_astronaut.png";
import Galaxy  from "../images/galaxy.png";
import "./styles/PageError.css";

function PageError(props) {
  let errorMessage = props.error.message;
  let errorCode = parseInt(errorMessage.substring(0, 3));
  
  if (errorCode >= 400 && errorCode < 500) {
    return (
      <div className="Error-container">
        <h1>{errorMessage}</h1>
        <img src={LostAstronaut} alt="Lost Astronaut" />
      </div>
    );
  } else if (errorCode >= 500) {
    return (
      <div className="Error-container">
        <h1>{errorMessage}</h1>
        <img src={Galaxy} alt="Lost Galaxy" />
      </div>
    );
  }
}

export default PageError;
