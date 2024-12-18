import React from "react";
import "./Banner.css";

const Banner = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  leftLogo,
  rightLogo,
}) => {
  return (
    <div className="banner">
      <div className="banner-overlay"></div>

      {leftLogo && <img src={leftLogo} alt="Left Logo" className="banner-logo left-logo" />}

      {rightLogo && <img src={rightLogo} alt="Right Logo" className="banner-logo right-logo" />}

      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-subtitle">{subtitle}</p>
        {buttonText && (
          <a href={buttonLink} className="banner-button">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Banner;
