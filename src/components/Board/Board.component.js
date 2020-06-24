import React from "react";
import { Stage, Layer } from "react-konva";
import { MapTile } from "../";

function Board(props) {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} {...props}>
      <Layer>
        <MapTile />
      </Layer>
    </Stage>
  );
}

export default Board;
