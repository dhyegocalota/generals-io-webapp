import React from "react";
import PropTypes from "prop-types";
import { MapTile } from "components";
import { useMapTileState } from "hooks";
import { playersPropTypes, tilePropTypes } from "types";

function MapTileState(props) {
  const { tile, players, rowIndex, columnIndex, ...restProps } = props;
  const mapTileState = useMapTileState({
    players,
    tile,
    rowIndex,
    columnIndex,
  });

  return (
    <MapTile
      {...restProps}
      {...mapTileState}
      rowIndex={rowIndex}
      columnIndex={columnIndex}
    />
  );
}

MapTileState.propTypes = {
  tile: tilePropTypes,
  players: playersPropTypes,
  rowIndex: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
};

export default MapTileState;
