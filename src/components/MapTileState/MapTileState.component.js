import React from "react";
import PropTypes from "prop-types";
import MapTile from "components/MapTile";
import { useTileState } from "hooks";

function MapTileState(props) {
  const { state, ...restProps } = props;
  const { typeImage, unitiesCount } = useTileState(state);

  return <MapTile {...restProps} image={typeImage} text={unitiesCount} />;
}

MapTileState.propTypes = {
  // State definition
  //
  // [type, ownerId, unitiesCount]
  //
  // @type Number
  //  0 → base
  //  1 → spawner
  //  2 → fog
  //  3 → army
  //  4 → blank
  //
  // @ownerId Number
  // @unitiesCount Number
  state: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
};

export default MapTileState;
