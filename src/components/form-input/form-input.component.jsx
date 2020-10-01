import React from "react";

import "./form-input.styles.scss";

export const FormInput = ({ ...otherProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={otherProps.handleChange}
        {...otherProps}
      />
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {otherProps.label}
      </label>
    </div>
  );
};
