import React, { Component } from 'react';
import burger from './../assets/burger.svg';
import queryString from 'query-string';

class Lunch extends Component {
  constructor(props) {
    super();
    this.state = {
      urlParams: queryString.parse(props.location.search),
    }
  }

  render() {
    return (
      <div className="App App-lunch">
        <header className="App-header">
          <img src={burger} className="App-logo" alt="logo" />
      <br />
      <div className="Container"> 
        Welcome to lunch!
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
        <h3>
        Lunch, an abbreviation for luncheon, 
        <br />is a meal eaten around midday. 
        <br />During the 20th century, the meaning gradually 
        <br />narrowed to a meal eaten midday. 
        <br />Lunch is commonly the second meal of the day, 
        <br />after breakfast. The meal varies in size 
        <br />depending on the culture, and significant
        <br /> variations exist in different 
        <br />areas of the world.
        </h3>
      </div>
    );
  }
}

export default Lunch;
