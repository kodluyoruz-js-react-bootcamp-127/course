import React from "react";

import PropTypes from "prop-types";

import "./Button.css";

function Button({ text, loading, variant = "primary", ...digerPropertyler }) {
  return (
    <button className={`button ${variant}`} {...digerPropertyler}>
      {loading ? "Loading..." : text}
    </button>
  );
}

Button.propTypes = {
  as: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  as: "button",
  text: "Login",
};

export default Button;
