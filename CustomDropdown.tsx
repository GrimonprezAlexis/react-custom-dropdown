import React, { useState, useEffect } from "react";
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
  forceRequired?: boolean;
  placeHolder?: string;
};

const CustomDropdown: React.FC<Props> = ({
  options,
  onChange,
  required,
  requiredMessage = "This field is required",
  forceRequired,
  placeHolder = "Search or select options...",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  const handleFocus = () => setShowOptions(true);
  const handleBlur = () => setTimeout(() => setShowOptions(false), 200);
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") handleArrowDown(e);
    if (e.key === "ArrowUp") handleArrowUp(e);
    if (e.key === "Enter") handleEnter(e);
  };

  const handleArrowDown = (e) => {
    e.preventDefault();
    setSelectedOptionIndex(
      Math.min(selectedOptionIndex + 1, filteredOptions.length - 1)
    );
  };

  const handleArrowUp = (e) => {
    e.preventDefault();
    setSelectedOptionIndex(Math.max(selectedOptionIndex - 1, 0));
  };

  const handleEnter = (e) => {
    e.preventDefault();
    setSelectedOption(filteredOptions[selectedOptionIndex]);
    setShowOptions(false);
    setSearchTerm("");
    if (onChange) {
      onChange(filteredOptions[selectedOptionIndex]);
    }
  };

  return (
    <div className="custom-select">
      <input
        type="text"
        className={`custom-select__input ${
          (required && !selectedOption && showOptions !== undefined) ||
          forceRequired
            ? "required"
            : ""
        }`}
        placeholder={placeHolder || "Search or select options..."}
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
      <ul
        className={
          showOptions
            ? "custom-select__options show"
            : "custom-select__options hide"
        }
      >
        {filteredOptions.map((option, index) => (
          <li
            className={`custom-select__option ${
              index === selectedOptionIndex ? "selected" : ""
            }`}
            key={index}
            onClick={() => {
              setSelectedOption(option);
              setShowOptions(false);
              if (onChange) {
                onChange(option);
              }
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
      {(required && !selectedOption && showOptions !== undefined) ||
        (forceRequired && (
          <span className="required-message">{requiredMessage}</span>
        ))}
    </div>
  );
};

export default CustomDropdown;
