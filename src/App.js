import React, { Component } from 'react';
import github from './assets/github.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Welcome to Emir's portfolio.</h1>
        <div>
          <a href="https://github.com/Crashpole">
            <img src={github} className="App-logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
