import React, { Component } from 'react';
import yellowsun from './assets/yellowsun.svg';

class Wakeup extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={yellowsun} className="App-logo" alt="logo" />
      <br />
      <div className="Container"> 
        What's poppin! 
        <br />
        <a href="#breakfast"><button>Breakfast</button></a>
        <br />
        <a href="#lunch"><button>Skip Breakfast</button></a>
      </div>
        </header>
      </div>
    );
  }
}

export default Wakeup;
