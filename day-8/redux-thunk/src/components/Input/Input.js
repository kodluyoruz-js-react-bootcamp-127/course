import React from "react";

import "./Input.css";

const Input = ({ error, ...props }) => {
  return (
    <div className="input-container">
      <input className="input" {...props} />
      {error ? <span className="error">Hata!</span> : null}
    </div>
  );
};

export default Input;
