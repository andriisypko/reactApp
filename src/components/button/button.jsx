import React, { useState } from 'react';
import "./button.css"

const Button = ({ buttonText, initialColor, hoverColor, textInitialColor, textHoverColor, onClick }) => {
  const [backgroundColor, setBackgroundColor] = useState(initialColor);
  const [textColor, setTextColor] = useState(textInitialColor);

  const handleMouseEnter = () => {
    setBackgroundColor(hoverColor);
    setTextColor(textHoverColor);
  };

  const handleMouseLeave = () => {
    setBackgroundColor(initialColor);
    setTextColor(textInitialColor);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="button"
      style={{ backgroundColor, color: textColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;