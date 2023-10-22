import React, { useState } from "react";
import "./ColorPicker.css"; // Import your CSS file

function ColorPicker({ colors }) {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="outer-container">
      <p className="heading">Color Picker</p>
      <div className="color-picker-container">
        <button className="btnc" onClick={handleButtonClick}>
          Pick a color
        </button>
        {showColorList && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-item"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <div className="selected-color">
            You selected:{" "}
            <span style={{ color: selectedColor }}>{selectedColor}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorPicker;
