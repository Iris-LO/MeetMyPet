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
  disabled,
  message,
  pattern
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
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
        required
        ref={inputName}
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="signUp-card-form-content-input"
        placeholder={placeholder}
        name={name}
        // Ici je test si le params disabled est présent si oui je bloque le champ
        // L'attribut disabled est seulement présent pour le champ email de profil.
        disabled={disabled ? true : false}
      />
      {/* <p>{message}</p> */}
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