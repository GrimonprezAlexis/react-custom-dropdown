## agr-custom-dropdown

A simple and customizable dropdown component built with React and TypeScript.

### Features
- Searchable dropdown list
- Customizable styles
- On change event
- Ability to display selected option in the input field
- Hide dropdown options by default

## Installation
You can install the CustomDropdown component using npm:
`npm install agr-custom-dropdown` 
or 
`yarn add agr-custom-dropdown`

## Usage
Here is a basic example of how to use the CustomDropdown component:

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

## Props
The CustomDropdown component takes the following props:

| Prop  | Type  | Required | Description
| :------------ |:---------------:| -----:| ------------:|
| `options`      | `Option[]` | Yes | An array of objects representing the options in the dropdown list. Each object should have a label and a value property.
| `onChange`      | `(selectedOption: Option) => void`        |   Yes | A callback function that is called when an option is selected. The selected option is passed as a parameter to the callback function.
----

## Customizing the styles
You can customize the styles of the CustomDropdown component by passing in your own CSS styles. You can find the class names used by the component in the `CustomDropdown.css` file.

## Contributing
If you find any bugs or have any suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository.

## License
This component is open-source software licensed under the MIT License.