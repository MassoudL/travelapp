// Import the React and ReactDOM libraries
// if the name of the library (dependency, path) is 'react' we call 
// the variable name React
import React from 'react';
// library (dependancy, path) = 'react-dom' --> variable = ReactDOM
import ReactDOM from 'react-dom';
import App from "./Components/App"
import * as serviceWorker from './serviceWorker';

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);