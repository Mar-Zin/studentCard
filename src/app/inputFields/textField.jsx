import React from "react";

const TextField = ({ label, name, value, onChange, type, errors, min }) => {
  const getInputClasses = () => {
    return "form-control" + (errors ? " is-invalid" : "");
  };

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        name={name}
        className={getInputClasses()}
        id={name}
        value={value}
        onChange={onChange}
        type={type}
        min={min}
      />
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};

export default TextField;
