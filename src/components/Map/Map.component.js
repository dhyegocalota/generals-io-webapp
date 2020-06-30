import React from "react";
import { Stage, Layer } from "react-konva";
import MapTileState from "components/MapTileState";

//  0 → base
//  1 → spawner
//  2 → fog
//  3 → army
//  4 → blank
const [BASE, SPAWNER, FOG, ARMY, BLANK] = [0, 1, 2, 3, 4];

function Map(props) {
  const mapState = [
    [
      [BASE, 1, 3],
      [SPAWNER, null, null],
      [ARMY, null, null],
      [ARMY, null, null],
      [FOG, null, null],
    ],
    [
      [BLANK, null, null],
      [ARMY, null, null],
      [ARMY, null, null],
      [BLANK, null, null],
      [ARMY, null, null],
    ],
    [
      [ARMY, null, null],
      [ARMY, null, null],
      [BLANK, null, null],
      [ARMY, null, null],
      [ARMY, null, null],
    ],
    [
      [SPAWNER, null, null],
      [ARMY, null, null],
      [BLANK, null, null],
      [BASE, 1, 3],
      [ARMY, null, null],
    ],
    [
      [BLANK, null, null],
      [FOG, null, null],
      [ARMY, null, null],
      [ARMY, null, null],
      [ARMY, null, null],
    ],
  ];

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} {...props}>
      <Layer>
        {mapState.map((columns, rowIndex) => {
          return columns.map((state, columnIndex) => {
            return (
              <MapTileState
                rowIndex={rowIndex}
                columnIndex={columnIndex}
                state={state}
              />
            );
          });
        })}
      </Layer>
    </Stage>
  );
}

Map.propTypes = {};

export default Map;
