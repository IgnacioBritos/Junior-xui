import React from "react";
import PropTypes from "prop-types";
import "./Badge.css";

const Badge = ({ src, name, alt, size, content, style, color, placement }) => {
  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    const initials = nameParts.join("").substring(0, 2);
    return initials;
  };
  const noMoreContent = (content) => {
    if (content > 99) return "99";
    return content;
  };
  return (
    <div className={`badge ${size} ${style}`}>
      {src ? (
        <img src={src} alt={alt} className={` ${color} `} />
      ) : (
        <span className={` initials ${color} `}>{getInitials(name)}</span>
      )}

      {content > 1 ? (
        <span className={`content ${color} ${placement}`}>
          {noMoreContent(content)}{" "}
        </span>
      ) : (
        " "
      )}
    </div>
  );
};
Badge.propTypes = {
  src: PropTypes.string,
  color: PropTypes.oneOf(["dark", "light", "danger", "blue", "green"]),
  placement: PropTypes.oneOf([
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
  ]),
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  style: PropTypes.string,
};

Badge.defaultProps = {
  size: "medium",
  style: "",
  disabled: false,
  color: "dark",
};

export default Badge;
