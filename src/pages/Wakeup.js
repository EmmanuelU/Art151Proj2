import React, { Component } from 'react';
import yellowsun from './../assets/yellowsun.svg';
import queryString from 'query-string';

class Wakeup extends Component {
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
        What's poppin! It is {this.state.urlParams.time + this.state.urlParams.meridian}
        <br />
        <a href={"#breakfast" + this.props.location.search}><button>Start with Breakfast</button></a>
        <br />
        <a href={"#lunch" + this.props.location.search + "&breakfast=none"}><button>Skip to Lunch</button></a>
        <br />
        <a href={"#dinner" + this.props.location.search + "&breakfast=none&lunch=none"}><button>Skip to Dinner</button></a>
        <br />
        <a href={"#dessert" + this.props.location.search + "&breakfast=none&lunch=none&dinner=none"}><button>Skip to Dessert</button></a>
        <br />
        <a href={"#finale" + this.props.location.search + "&breakfast=none&lunch=none&dinner=none&dessert=none"}><button>Skip all meals</button></a>
      </div>
        </header>
      </div>
    );
  }
}

export default Wakeup;
