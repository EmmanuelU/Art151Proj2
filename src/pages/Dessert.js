import React, { Component } from 'react';
import dessert from './../assets/dessert.svg';
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
        <header className="App-dessert">

          <img src={dessert} className="App-logo" alt="logo" />
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
        <h3>
        Dessert is a course that concludes a meal. 
        <br />The course usually consists of 
        <br />sweet foods, such as confections,
        <br /> and possibly a beverage such as 
        <br />dessert wine or liqueur. In some parts 
        <br />of the world, such as much of 
        <br />central and western Africa, 
        <br />and most parts of China and India, 
        <br />there is no tradition of a dessert course 
        <br />to conclude a meal. The term dessert can 
        <br />apply to many confections, such as biscuits,
        <br /> cakes, cookies, custards, gelatins, ice creams,
        <br /> pastries, pies, puddings, sweet soups, and tarts.
        <br /> Fruit is also commonly found in dessert courses
        <br /> because of its naturally occurring sweetness.
        <br /> Some cultures sweeten foods that are 
        <br />more commonly savory to create desserts.
        </h3>
      </div>
    );
  }
}

export default Dessert;
