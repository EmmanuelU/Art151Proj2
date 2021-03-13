import React, { Component } from 'react';
import yellowsun from './../assets/yellowsun.svg';

class Finale extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={yellowsun} className="App-logo" alt="logo" />
      <br />
      <div className="Container"> 
        Welcome to Finale! It is {this.state.urlParams.time + this.state.urlParams.meridian}
      
      </div>
        </header>
      </div>
    );
  }
}

export default Finale;
