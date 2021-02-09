import React from 'react'
import { TextArea } from 'semantic-ui-react'

const TextAreaExample = ({ placeholder, value, onChange, name }) => {

  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
    return(
  <div className="create-group-inputLabel">
    <label
          // htmlFor={inputId}
          className="create-group-label"
        >
          {placeholder}
    </label>
    <TextArea required placeholder={placeholder} className="create-group-input" value={value} onChange={handleChange} name={name}/>
  </div>
)
}

export default TextAreaExample