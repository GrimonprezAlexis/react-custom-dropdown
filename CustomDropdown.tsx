import React, { useState } from "react";
import "./CustomDropdown.css";
type Option = {
  label: string;
  value: string | number;
};

type Props = {
  options: Option[];
  onChange: (selectedOption: Option) => void;
  required?: boolean;
};

const CustomDropdown: React.FC<Props> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const filteredOptions = props.options.filter(
    (option) =>
      option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  );

  const handleFocus = () => {
    setShowOptions(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowOptions(false), 200);
  };


  return (
    <div className="custom-select">
      <input
        type="text"
        className={`custom-select__input ${props.required && !selectedOption ? "required" : ""}`}
        placeholder="Search option"
        value={selectedOption ? selectedOption.label : searchTerm}
        onChange={(e) => {
          if (selectedOption) {
            setSelectedOption(null);
          }
          setSearchTerm(e.target.value);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <ul className={showOptions ? "custom-select__options show" : "custom-select__options hide"}>
        {filteredOptions.map((option, index) => (
          <li
            className="custom-select__option"
            key={index}
            onClick={() => {
              setSelectedOption(option);
              setShowOptions(false);
              if (props.onChange) {
                props.onChange(option);
              }
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropdown;