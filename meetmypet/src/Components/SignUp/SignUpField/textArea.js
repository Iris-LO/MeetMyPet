import React from 'react'
import { TextArea } from 'semantic-ui-react'

const TextAreaExample = ({ placeholder, value, onChange, name }) => {

  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
    return(
  <div className="signUp-card-form-content">
    <label
          // htmlFor={inputId}
          className="signUp-card-form-content-label"
        >
          {placeholder}
    </label>
    <TextArea placeholder={placeholder} className="textarea-animal" value={value} onChange={handleChange} name={name} required/>
  </div>
)
}

export default TextAreaExample