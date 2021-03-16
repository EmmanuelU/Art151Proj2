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
      <div className="App App-breakfast">
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
            <h3>
            <br/>Breakfast is the first meal of the 
            <br/>day eaten after waking up, usually in the morning.
            <br/>The word in English refers to breaking the fasting
            <br/>period of the previous night. 
            <br/>There is a strong likelihood for one or more
            <br/>"typical", or "traditional", breakfast menus to
            <br/>exist in most places, but their composition varies
            <br/>widely from place to place, and has varied over time,
            <br/>so that globally a very wide range of preparations
            <br/>and ingredients are now associated with breakfast.
            </h3>
            <br />
      </div>
    );
  }
}

export default Breakfast;
