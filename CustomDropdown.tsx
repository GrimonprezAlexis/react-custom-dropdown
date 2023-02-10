
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
  requiredMessage?: string;
};

const CustomDropdown: React.FC<Props> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOptions, setShowOptions] = useState(undefined);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const requiredMessage = props.requiredMessage || "This field is required";

  const filteredOptions = props.options.filter(
    (option) => option.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  );

  // User events
  const handleFocus = () => {
    setShowOptions(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowOptions(false), 200);
  };

  // Keyboard events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      handleArrowDown(e);
    }
    if (e.key === "ArrowUp") {
      handleArrowUp(e);
    }
    if (e.key === "Enter") {
      handleEnter(e);
    }
  };

  // Arrow Actions
  const handleArrowDown = (e) => {
    e.preventDefault();
    setSelectedOptionIndex(
      Math.min(selectedOptionIndex + 1, filteredOptions.length - 1)
    );
  };

  const handleArrowUp = (e) =>{
    e.preventDefault();
    setSelectedOptionIndex(Math.max(selectedOptionIndex - 1, 0));
  };

  const handleEnter = (e) => {
    e.preventDefault();
    setSelectedOptionIndex(Math.max(selectedOptionIndex - 1, 0));
    setShowOptions(false);
    setSearchTerm("");
    setSelectedOption(filteredOptions[selectedOptionIndex]);
    if (props.onChange) {
      props.onChange(filteredOptions[selectedOptionIndex]);
    }
  };

  return (
    <div className="custom-select">
      <input
        type="text"
        className={`custom-select__input ${(props.required && !selectedOption && showOptions !== undefined) ? "required" : ""}`}
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
        onKeyDown={handleKeyDown}

      />
      <ul className={showOptions ? "custom-select__options show" : "custom-select__options hide"}>
        {filteredOptions.map((option, index) => (
          <li
            className={`custom-select__option ${index === selectedOptionIndex ? "selected" : ""}`}
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
      {(props.required && !selectedOption && showOptions !== undefined) && <span className="required-message">{requiredMessage}</span>}
    </div>
  );
};

export default CustomDropdown;