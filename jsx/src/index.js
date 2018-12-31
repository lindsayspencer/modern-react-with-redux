// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(text) {
  return text;
}

// Create a react component
const App = () => {
  
  return (
    <div>
      <label className="name" for="name">Enter Name</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white'}}>{ getButtonText("Subscribe to Poodiepie") }</button>
    </div>
  );
};


// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
