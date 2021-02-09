// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import './field.scss';

// == Import : local

// == Composant
const LoginModalField = ({
  // 
  value,
  type,
  name,
  placeholder,
  onChange,
  
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
    // A chaque modificication dans l'input, je recupere la valeur de celui ci, ainsi que son type via le name
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>

        <label
            htmlFor={inputId}
            className="field-label"
        >
            {placeholder}
        </label>
        <input
            // React - state
            value={value}
            onChange={handleChange}
            // infos de base
            id={inputId}
            type={type}
            className="field-input"
            placeholder={placeholder}
            name={name}
        />

        
    </div>
    );
};

LoginModalField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
LoginModalField.defaultProps = {
  value: '',
  type: 'text',
};


// == Export
export default LoginModalField;