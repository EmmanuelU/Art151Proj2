import React, { Component } from 'react';
import burger from './assets/burger.svg';
import './App.css';
import ParticlesBg from 'particles-bg';

class App extends Component {
  render() {
    return (
      <div className="App">

      <ParticlesBg type="circle" bg={true} />

          <img src={burger} className="App-logo" alt="logo" />
      <br /><br /><br /><br />
      <div className="Container"> 
        Welcome to You Are What You Eat
        <br /><br />
        <a href="#begin"><button> Click Me to Begin</button></a>
      </div>
      </div>
    );
  }
}

export default App;
