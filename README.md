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

- Import the `CustomDropdown` component into your React project.
- Pass in an array of `options` as a prop to the component, where each option is an object with `label` and `value` properties.
- Optionally pass a callback function as the `onChange` prop to handle the selected option.
- Use the `required` prop to specify if the dropdown is a required field (default is `false`).
- Use `requiredMessage` prop to specify a required message (if required is set to true).

```react
import React, { useState } from "react";
import CustomDropdown from "custom-dropdown";

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 }
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <CustomDropdown
      options={options}
      onChange={(selectedOption) => setSelectedOption(selectedOption)}
    />
  );
};

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
----

## Customizing the styles
You can customize the styles of the CustomDropdown component by passing in your own CSS styles. You can find the class names used by the component in the `CustomDropdown.css` file.

## Contributing
If you find any bugs or have any suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository.

## License
This component is open-source software licensed under the MIT License.