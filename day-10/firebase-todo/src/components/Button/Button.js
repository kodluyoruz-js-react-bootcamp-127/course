import React, { memo } from "react";

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

// prop'lar değiştiğinde yeniden render ediyor
// prop'lar değişmediyse, hafızadaki halini return ediyor (yeniden return etmiyor)
// kritik nokta: prop olarak fonksyion ya da obje varsa!!!!
// func ya da object property yeniden tanımlanıyorsa memo ile sarsak bile yeniden render olur.
export default memo(Button);
