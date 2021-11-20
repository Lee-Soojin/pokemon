import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import Pokemon from "./service/pokemon";

const pokemon = new Pokemon();

ReactDOM.render(
  <React.StrictMode>
    <App pokemon={pokemon} />
  </React.StrictMode>,
  document.getElementById("root")
);
