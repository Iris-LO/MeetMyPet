import React from 'react';
// Import Components

// Import CSS
// import './createGroup.scss';


const FieldCreateGroup= ({value, onChange, type, placeholder, name, label }) => {

    const handleChange = (evt) => {
        onChange(evt.target.value, name);
      };
  return (
    <div className="create-group-inputLabel">
      <label htmlFor="" className="create-group-label">{label}</label>
      <input
        // React - state
        required
        value={value}
        onChange={handleChange}
        // infos de base
        // id={inputId}
        type={type}
        className="create-group-input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}

export default FieldCreateGroup;