import React, { Component } from 'react';
import yellowsun from './../assets/yellowsun.svg';

class Dinner extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={yellowsun} className="App-logo" alt="logo" />
      <br />
      <div className="Container"> 
        Welcome to dinner! It is {this.state.urlParams.time + this.state.urlParams.meridian}
        <br />
        <a href={"#dessert" + this.props.location.search + "&dinner=lasagna"}><button>Eat Lasagna</button></a>
        <br />
        <a href={"#dessert" + this.props.location.search + "&dinner=macaroni"}><button>Eat Mac and Cheese</button></a>
        <br />
        <a href={"#dessert" + this.props.location.search + "&dinner=ribs"}><button>Eat Ribs</button></a>
        <br />
        <a href={"#dessert" + this.props.location.search + "&dinner=cabbage"}><button>Eat Boiled Cabbage</button></a>
        <br />
        <a href={"#dessert" + this.props.location.search + "&dinner=primerib"}><button>Eat Prime Rib</button></a>
        <br />
        <br />
        <a href={"#dessert" + + this.props.location.search + "&dinner=none"}><button>Skip Dinner</button></a>
      </div>
        </header>
      </div>
    );
  }
}

export default Dinner;
