import React from "react";
import PropTypes from "prop-types";
import { Group, Rect, Text } from "react-konva";

function MapTile(props) {
  const { zoom, size, fill, fontSize, ...restProps } = props;
  const zoomedSize = size * zoom;
  const widthAndHeight = { width: zoomedSize, height: zoomedSize };
  const zoomedFontSize = fontSize * zoom;

  return (
    <Group {...restProps} {...widthAndHeight}>
      <Rect fill={fill} {...widthAndHeight} />
      <Text
        text="424"
        align="center"
        verticalAlign="middle"
        fill="#fff"
        shadowColor="#000"
        shadowBlur={3}
        shadowOpacity={0.5}
        fontSize={zoomedFontSize}
        {...widthAndHeight}
      />
    </Group>
  );
}

MapTile.propTypes = {
  zoom: PropTypes.number,
  size: PropTypes.number,
  fill: PropTypes.string,
  fontSize: PropTypes.number,
};

MapTile.defaultProps = {
  zoom: 1,
  size: 50,
  fill: "#d0b0f0",
  fontSize: 20,
};

export default MapTile;
