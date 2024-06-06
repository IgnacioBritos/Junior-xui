import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const getStyles = (...args) => ["button", ...args].filter(Boolean).join(" ");
const Button = ({ children, type, radius , style, size}) => {
  console.log(getStyles(type, radius));
  return <button className={getStyles(type, radius,style,size)}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "primary-dark",
    "secondary-dark",
    "tertiary-dark",

    "primary-light",
    "secondary-light",
    "tertiary-light",

   "primary-red",
    "secondary-red",
    "tertiary-red",

    "primary-blue",
    "secondary-blue",
    "tertiary-blue",

    "primary-green",
    "secondary-green",
    "tertiary-green",    
  ]),
  radius: PropTypes.oneOf([
    "rd-none",
    "rd-small",
    "rd-medium",
    "rd-large",
    "rd-full",
  ]),
  size:PropTypes.oneOf([
    "s-small",
    "s-medium",
    "s-large",
  ])
  
};

export default Button;
