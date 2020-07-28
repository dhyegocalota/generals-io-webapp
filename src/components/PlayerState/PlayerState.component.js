import React from "react";
import { Player } from "components";
import { playerPropTypes } from "types";
import { usePlayerState } from "hooks";

function PlayerState(props) {
  const { player, ...restProps } = props;
  const playerState = usePlayerState(player);

  return <Player {...restProps} {...playerState} />;
}

PlayerState.propTypes = {
  player: playerPropTypes.isRequired,
};

export default PlayerState;
