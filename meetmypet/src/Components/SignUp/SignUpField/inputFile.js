// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  inputName,
}) => {
  const handleChange = (event) => {
    onChange(event.target.files[0] , name);
    console.log('je passe ici')
  };

  const inputId = `field-${name}`;
  
  return (
    <div className="signUp-card-form-content">
      <label
        htmlFor={inputId}
        className="signUp-card-form-content-label"
      >
        {placeholder}
      </label>
      <input
        // React - state
        // value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="profil-card-photo-item-input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// == Export
export default Field;