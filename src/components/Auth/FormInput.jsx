import React from 'react';

const FormInput = ({ label, type, value, onChange, error, ...rest }) => {
  return (
    <div className="form-input">
      <label>
        {label}
        <input
          type={type}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </label>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormInput;