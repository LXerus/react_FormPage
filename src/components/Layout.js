<<<<<<< HEAD
import React from "react"
=======
import React from "react";
>>>>>>> responsive
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
