import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/Counters";
import "./style.css";

// const message = (
//   <h3 className="alert alert-warning text-center">
//     Welcome to the world of ReactJs!!
//   </h3>
// );

// ReactDom.render(message, document.getElementById("root"));

ReactDom.render(<Counters />, document.getElementById("root"));
