import React, { useState } from 'react';

interface Props {
  options: Array<string>,
  onChange: (selectedValue: string) => void
}

const CustomSelect = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  
  const filteredOptions = props.options.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Rechercher"
      />
      <select
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}
      >
        {filteredOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;