import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ type, size, placeholder, colors, radius, style, theme,styleDiv }) => {
  return (
    <div className= {`input-container  ${styleDiv}`}>
      <input
        type={type}
        placeholder=" "
        className={`input input-${size} input-${colors} input-${radius} ${style} input-${theme}`}
      />
      <label className={`placeholder placeholder-${theme}`}>{placeholder}</label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email"]).isRequired,
  colors: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.string,
  styleDiv: PropTypes.string,
  theme: PropTypes.oneOf(["black", "white"]).isRequired,
};

export default Input;
