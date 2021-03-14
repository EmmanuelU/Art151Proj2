import React, { Component } from 'react';
import yellowsun from './../assets/yellowsun.svg';
import queryString from 'query-string';

class Dessert extends Component {
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
        Welcome to dessert!
        <br />
        <a href={"#finale" + this.props.location.search + "&dessert=cheesecake"}><button>Eat Cheesecake</button></a>
        <br />
        <a href={"#finale" + this.props.location.search + "&dessert=peachcobb"}><button>Eat Peach Cobbler</button></a>
        <br />
        <a href={"#finale" + this.props.location.search + "&dessert=pumpkin"}><button>Eat Pumpkin Pie</button></a>
        <br />
        <a href={"#finale" + this.props.location.search + "&dessert=icecream"}><button>Eat Ice Cream</button></a>
        <br />
        <a href={"#finale" + this.props.location.search + "&dessert=applepie"}><button>Eat Apple Pie</button></a>
        <br />
        <br />
        <a href={"#finale" + + this.props.location.search + "&dessert=none"}><button>Skip Dessert</button></a>
      </div>
        </header>
      </div>
    );
  }
}

export default Dessert;
