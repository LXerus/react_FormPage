import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew";
import BadgeForm from "./pages/BadgeForm";
import "./global.css";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeForm />, container);
