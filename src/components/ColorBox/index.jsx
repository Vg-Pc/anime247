import React, { useState } from "react";
import { Button } from "reactstrap";
import "./color.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["black", "white", "darkgreen", "lightgreen", "green"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "green";
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box-color", newColor);
  }

  return (
    <div
      className="colorBox"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      {/* <Button>RANDOM COLOR</Button> */}
    </div>
  );
}

export default ColorBox;
