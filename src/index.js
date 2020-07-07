import React from "react";
import ReactDOM from "react-dom";
import { Game } from "components";
import * as serviceWorker from "serviceWorker";
import "./index.css";

import { map, players } from "hard-coded-game-state";

ReactDOM.render(
  <React.StrictMode>
    <Game turnsCount={192} map={map} players={players} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
