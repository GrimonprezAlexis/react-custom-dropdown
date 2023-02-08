import React from 'react';
import CustomDropdown from './CustomDropdown';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function App() {
  return (
    <div className="App">
      <CustomDropdown options={options} />
    </div>
  );
}

export default App;