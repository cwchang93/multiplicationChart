import React, { Component } from 'react';
import './App.scss';
import Multiplication from './components/Multiplication/Multiplication';

class App extends Component {
  render() {
    return (
      <div className="multiplication">
        <Multiplication />
      </div>
    );
  }
}

export default App;
