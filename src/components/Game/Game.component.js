import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  SurrenderDialog,
  TurnsCount,
  Map,
  Players,
  WinDialog,
} from "components";
import { turnsCountPropTypes, mapPropTypes, playersPropTypes } from "types";
import "./Game.css";

function Game(props) {
  const { className, turnsCount, map, players, ...restProps } = props;
  const [didWin] = useState(false);
  const handleWinDialogClose = useCallback(() => {
    // TODO
  }, []);

  return (
    <div {...restProps} className={classNames("Game", className)}>
      <TurnsCount className="Game__TurnsCount" count={turnsCount} />
      <Map className="Game__Map" map={map} players={players} />
      <Players className="Game__Players" players={players} />
      <SurrenderDialog />
      <WinDialog open={didWin} onClose={handleWinDialogClose} />
    </div>
  );
}

Game.propTypes = {
  className: PropTypes.string,
  turnsCount: turnsCountPropTypes,
  map: mapPropTypes,
  players: playersPropTypes,
};

export default Game;
