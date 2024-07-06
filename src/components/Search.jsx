import React, { useState } from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: '#d1d5db',
    '&:hover': {
      borderColor: '#6b7280'
    },
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};

const   Search = ({ options, setSelected }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    //aws code
    option ? setSelected(option.value) : setSelected("")
    console.log("Selected option:", option);
  };

  return (
    <div className="search-select-dropdown w-64">
      <Select
        styles={customStyles}
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Select an option..."
        isClearable
      />
    </div>
  );
};

export default Search;
