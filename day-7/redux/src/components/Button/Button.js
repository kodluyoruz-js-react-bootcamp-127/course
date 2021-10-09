import React from "react";

import PropTypes from "prop-types";

import "./Button.css";

function Button({
  as,
  // Special prop
  children,
  text,
  ...digerPropertyler
}) {
  if (as === "input")
    return <input type="submit" className="button" value={text} />;

  return (
    <button className="button" {...digerPropertyler}>
      {children ? children : text}
    </button>
  );
}

Button.propTypes = {
  as: PropTypes.string,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  as: "button",
  text: "Login",
};

export default Button;
