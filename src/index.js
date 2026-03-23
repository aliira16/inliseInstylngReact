import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

const costomStyle = {
  color: "red",
  fontSize: "100px",
};

costomStyle.border = "5px solid blue";
costomStyle.borderRadius = "50px";

ReactDOM.render(
  <div style={costomStyle}>
    <h1>hello world</h1>
  </div>,
  root
);
