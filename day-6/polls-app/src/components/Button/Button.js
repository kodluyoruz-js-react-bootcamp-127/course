import React from "react";

import PropTypes from "prop-types";

import "./Button.css";

function Button({ variant, as, children, text, ...digerPropertyler }) {
  if (as === "input")
    return <input type="submit" className={`button ${variant}`} value={text} />;

  return (
    <button className={`button ${variant}`} {...digerPropertyler}>
      {children ? children : text}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  as: PropTypes.string,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: "primary",
  as: "button",
  text: "Login",
};

export default Button;
