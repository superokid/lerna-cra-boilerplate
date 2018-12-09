import React, { Component } from 'react';
import Another from 'components/lib/Another';
import Hello from 'components/lib/Hello';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello />
          <Another />
        </header>
      </div>
    );
  }
}

export default App;
