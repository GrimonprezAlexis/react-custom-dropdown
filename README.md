A simple and customizable dropdown component built with React and TypeScript.

### Features
- Searchable dropdown list with the input field
- Select an option with a click
- On change event
- Keyboard navigation using the arrow keys to move up and down the options
- Required field validation optionnel
- Required message optionnel
- Customizable styles

## Installation
You can install the CustomDropdown component using npm:
`npm install agr-custom-dropdown` 
or 
`yarn add agr-custom-dropdown`

## Usage
Here is a basic example of how to use the CustomDropdown component:


```react
import React from "react";
import CustomDropdown from "./CustomDropdown";

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 }
];

const handleChange = (selectedOption) => {
  console.log(selectedOption);
};

function App() {
  return (
    <div>
      <CustomDropdown
        options={options}
        onChange={handleChange}
        required={true}
        requiredMessage="A option must be selected."
        forceRequired={false}
        placeholder="Select an option"
      />
    </div>
  );
}

export default App;
```

## Keyboard Actions
- Use the up and down arrow keys to navigate the options.
- Press Enter to select the currently highlighted option.
- Press Esc to close the options dropdown.

## Props
The CustomDropdown component takes the following props:

| Prop  | Type  | Required | Description
| :------------ |:---------------:| -----:| ------------:|
| `options`      | `Option[]` | Yes | An array of objects representing the options in the dropdown list. Each object should have a `label` and a `value` property.
| `onChange`      | `(selectedOption: Option) => void`        |   Yes | A callback function that is called when an option is selected. The selected option is passed as a parameter to the callback function.
| `required`      | `boolean` | No | Indicates if the dropdown is required or not. If the property is present and is set to true, the dropdown will have a required class.
| `requiredMessage`      | `string` | No | Message, if the property required is set to true (default 'this field is required')
| `forceRequired`      | `boolean` | No | A flag indicating if the dropdown should always display the requiredMessage, even if an option has been selected.
| `placeholder`      | `string` | No | The placeholder text to display in the input field (default 'Search or select options...')

----

## Contributing
If you find any bugs or have any suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository.

## License
This component is open-source software licensed under the MIT License.