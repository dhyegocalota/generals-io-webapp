import PropTypes from "prop-types";

const turnsCountPropTypes = PropTypes.number;
const playerPropTypes = PropTypes.arrayOf(PropTypes.any);
const playersPropTypes = PropTypes.object;
const tilePropTypes = PropTypes.arrayOf(PropTypes.number);
const tilesPropTypes = PropTypes.arrayOf(tilePropTypes);
const mapPropTypes = PropTypes.arrayOf(tilesPropTypes);

export {
  turnsCountPropTypes,
  playerPropTypes,
  playersPropTypes,
  tilePropTypes,
  tilesPropTypes,
  mapPropTypes,
};
