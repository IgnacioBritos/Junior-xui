import React from "react";
import PropTypes from "prop-types";
import "./Avatar.css";

const getStyles = (...args) => ["img", ...args].filter(Boolean).join(" ");

const Avatar = ({ src, alt, name, size, style, disabled }) => {
  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    const initials = nameParts
      .join("")
      .substring(0, 2);
    return initials;
  };

  return (
    <div className={`avatar ${size} ${style} ${disabled ? 'disabled' : ''}`}>
      {src ? (
        <img src={src} alt={alt} className={getStyles(size, style)} />
      ) : (
        <span className="initials">{getInitials(name)}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  style: PropTypes.string,
  disabled: PropTypes.bool,
};

Avatar.defaultProps = {
  size: "medium",
  style: "",
  disabled: false,
};

export default Avatar;
