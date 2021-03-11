import React, { Component } from 'react';
import burger from './assets/burger.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={burger} className="App-logo" alt="logo" />
      <br />
      <div className="Container"> 
        Welcome to You Are What You Eat
        <br />
        <a href="#begin"><button> Click Me to Begin</button></a>
      </div>
        </header>
      </div>
    );
  }
}

export default App;
