import React, { forwardRef } from "react";

import PropTypes from "prop-types";

import "./Input.css";

const renderErrorMessage = (errorType) => {
  switch (errorType) {
    case "required":
      return "This field cannot be empty.";
    case "maxLength":
      return "This field is too long.";
    case "minLength":
      return "This field is too short.";
    default:
      return "Error";
  }
};

const Input = forwardRef(
  ({ canBeDeleted, onClickDelete, error, text, value, ...props }, ref) => {
    return (
      <div className="input-container">
        <div className="input-wrapper">
          <input
            ref={ref}
            className={`input ${error ? "error" : ""}`}
            {...props}
          />
          {canBeDeleted ? (
            <button onClick={onClickDelete}>Delete</button>
          ) : null}
        </div>
        {error ? (
          <span className="error">{renderErrorMessage(error.type)}</span>
        ) : null}
      </div>
    );
  }
);

Input.propsTypes = {
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
    ref: PropTypes.node,
  }),
};

export default Input;
