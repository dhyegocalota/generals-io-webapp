import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Group, Rect, Text, Image } from "react-konva";

function MapTile(props) {
  const {
    zoom,
    size,
    fill,
    stroke,
    fontSize,
    image,
    text,
    rowIndex,
    columnIndex,
    onChangeSize: triggerChangeSize,
    ...restProps
  } = props;

  const zoomedSize = useMemo(() => size * zoom, [size, zoom]);
  const widthAndHeight = useMemo(
    () => ({
      width: zoomedSize,
      height: zoomedSize,
    }),
    [zoomedSize]
  );

  const zoomedFontSize = useMemo(() => fontSize * zoom, [fontSize, zoom]);
  const x = useMemo(() => zoomedSize * columnIndex, [zoomedSize, columnIndex]);
  const y = useMemo(() => zoomedSize * rowIndex, [zoomedSize, rowIndex]);

  useEffect(() => {
    if (triggerChangeSize) {
      triggerChangeSize(zoomedSize);
    }
  }, [triggerChangeSize, zoomedSize]);

  return (
    <Group {...restProps} x={x} y={y} {...widthAndHeight}>
      <Rect fill={fill} stroke={stroke} {...widthAndHeight} />
      {image && <Image image={image} {...widthAndHeight} />}
      {text && (
        <Text
          text={text}
          align="center"
          verticalAlign="middle"
          fill="#fff"
          shadowColor="#000"
          shadowBlur={3}
          shadowOpacity={0.5}
          fontSize={zoomedFontSize}
          {...widthAndHeight}
        />
      )}
    </Group>
  );
}

MapTile.propTypes = {
  zoom: PropTypes.number,
  size: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  fontSize: PropTypes.number,
  image: PropTypes.instanceOf(window.Image),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowIndex: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
  onChangeSize: PropTypes.func,
};

MapTile.defaultProps = {
  zoom: 1,
  size: 50,
  fill: "#363636",
  stroke: "#000",
  fontSize: 20,
};

export default MapTile;
