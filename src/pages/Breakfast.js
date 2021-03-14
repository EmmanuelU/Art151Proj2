import React, { Component } from 'react';
import yellowsun from './../assets/yellowsun.svg';
import queryString from 'query-string';
class Breakfast extends Component {
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
            Welcome to breakfast!
            <br />
            <a href={"#lunch" + this.props.location.search + "&breakfast=bagel"}><button>Eat a Bagel</button></a>
            <br />
            <a href={"#lunch" + this.props.location.search + "&breakfast=pancakes"}><button>Eat Pancakes</button></a>
            <br />
            <a href={"#lunch" + this.props.location.search + "&breakfast=frenchtoast"}><button>Eat French Toast</button></a>
            <br />
            <a href={"#lunch" + this.props.location.search + "&breakfast=cereal"}><button>Eat Cereal</button></a>
            <br />
            <a href={"#lunch" + this.props.location.search + "&breakfast=granola"}><button>Eat a Granola Bar</button></a>
            <br />
            <br />
            <a href={"#lunch" + this.props.location.search + "&breakfast=none"}><button>Skip Breakfast</button></a>
          </div>
        </header>
      </div>
    );
  }
}

export default Breakfast;
