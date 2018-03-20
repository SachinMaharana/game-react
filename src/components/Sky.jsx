import React from "react";

const Sky = () => {
  const skyStyle = {
    fill: "#30abef"
  };
  const skyWidth = 5000;
  const gameHeight = 1200;

  return (
    <rect
      width={skyWidth}
      height={gameHeight}
      x={skyWidth / -2}
      y={100 - gameHeight}
      style={skyStyle}
    />
  );
};

export default Sky;
