import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const sayHello = (message, name) => { 
  return message + name;
}

class App extends Component {
  render() {
    const message = "Bienvenido al micro curso React.js JSX ";
    let name = "Fabian Leon";

    return (
      <div className="App">
        <h2>{sayHello(message, name)}</h2>
      </div>
    );
  }
}

export default App;
