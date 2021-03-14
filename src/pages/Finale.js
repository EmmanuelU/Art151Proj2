import React, { Component } from 'react';
import yellowsun from './../assets/yellowsun.svg';
import queryString from 'query-string';

class Finale extends Component {
  constructor(props) {
    super();
    this.state = {
      urlParams: queryString.parse(props.location.search),
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={yellowsun} className="App-logo" alt="logo" />
      <br />
      <div className="Container"> 
        Welcome to Finale!
      
      </div>
        </header>
      </div>
    );
  }
}

export default Finale;
