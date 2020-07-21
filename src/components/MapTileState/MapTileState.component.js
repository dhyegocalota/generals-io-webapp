import React from "react";
import PropTypes from "prop-types";
import { MapTile } from "components";
import { useMapTileState } from "hooks";
import { playersPropTypes, tilePropTypes } from "types";

function MapTileState(props) {
  const {
    tile,
    players,
    rowIndex,
    columnIndex,
    selectedMapPosition,
    onChangeSelectedMapPosition: handleChangeSelectedMapPosition,
    ...restProps
  } = props;

  const mapTileState = useMapTileState({
    players,
    tile,
    rowIndex,
    columnIndex,
    selectedMapPosition,
    onChangeSelectedMapPosition: handleChangeSelectedMapPosition,
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
  selectedMapPosition: PropTypes.shape({
    rowIndex: PropTypes.number,
    columnIndex: PropTypes.number,
  }).isRequired,
  onChangeSelectedMapPosition: PropTypes.func.isRequired,
};

export default MapTileState;
