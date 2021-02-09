import React from 'react'
import { Select } from 'semantic-ui-react'

const SelectExample = ({ placeholder, options, name, onChange, value }) => {
  // Ici je viens récupérer dynamiquement la valeur sélectionée et le name du champ
  const handleChangeSelect = (event, data) => {
    onChange(data.value, name);
  }

  return(
  <div className="signUp-card-form-content">
    <label
          className="signUp-card-form-content-label"
        >
          {placeholder}
    </label>
    <Select
      required
      className="select-animal"
      placeholder={placeholder}
      options={options}
      onChange={handleChangeSelect}
      value={value}
    />
  </div>
)
  }

export default SelectExample;