import React, { useMemo } from "react";
import { MapTile } from "components";
import { usePlayerState, useTileState } from "hooks";
import { playersPropTypes, tilePropTypes } from "types";

function MapTileState(props) {
  const { tile, players, ...restProps } = props;
  const { isOwned, playerId, typeImage, unitiesCount } = useTileState(tile);

  const player = useMemo(() => {
    if (isOwned) {
      return players[playerId];
    }
  }, [isOwned, players, playerId]);

  const { color } = usePlayerState(player);

  return (
    <MapTile
      {...restProps}
      image={typeImage}
      text={unitiesCount}
      fill={color}
    />
  );
}

MapTileState.propTypes = {
  tile: tilePropTypes,
  players: playersPropTypes,
};

export default MapTileState;
