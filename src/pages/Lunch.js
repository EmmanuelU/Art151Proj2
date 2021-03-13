import React, { Component } from 'react';
import yellowsun from './../assets/yellowsun.svg';
import queryString from 'query-string';

class Lunch extends Component {
  constructor(props)
  {
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
        Welcome to lunch! It is {this.state.urlParams.time + this.state.urlParams.meridian}
        <br />
        <br />
        <a href={"#dinner" + this.props.location.search + "&lunch=alfredo"}><button>Eat Jerk Chicken and Shrimp Alfredo</button></a>
        <br />
        <a href={"#dinner" + this.props.location.search + "&lunch=spaghetti"}><button>Eat Spaghetti</button></a>
        <br />
        <a href={"#dinner" + this.props.location.search + "&lunch=clamsoup"}><button>Eat Clam Chowder Soup</button></a>
        <br />
        <a href={"#dinner" + this.props.location.search + "&lunch=cobbsalad"}><button>Eat Cobb Salad</button></a>
        <br />
        <a href={"#dinner" + this.props.location.search + "&lunch=portillos"}><button>Eat Portillos</button></a>
        <br />
        <br />
        <a href={"#dinner" + this.props.location.search + "&lunch=none"}><button>Skip Lunch</button></a>
      </div>
        </header>
      </div>
    );
  }
}

export default Lunch;
