import React, { Component } from 'react';
import coffin from './../assets/coffin.svg';
import queryString from 'query-string';

class Finale extends Component {
  constructor(props) {
    super();
    this.state = {
      urlParams: queryString.parse(props.location.search),
    }
  }

  getBreakfast()
  {
    var input = this.state.urlParams.breakfast;
    return input;
  }

  getLunch()
  {
    var input = this.state.urlParams.lunch;
    return input;
  }

  getDinner()
  {
    var input = this.state.urlParams.dinner;
    return input;
  }

  getDessert()
  {
    var input = this.state.urlParams.dessert;
    return input;
  }

  getDay()
  {
    var input = this.state.urlParams.day;
    return input;
  }

  getTime()
  {
    var time = this.state.urlParams.time;
    return time === 0 ? "12AM" : (time > 11 ? (time > 12 ? (time % 12) : time) + "PM" : (time) + "AM")
  }

  getResult(param)
  {
    var percent = 100;
    if(this.getBreakfast() === "none")
      percent -= 30;
    if(this.getLunch() === "none")
      percent -= 20;
    if(this.getDinner() === "none")
      percent -= 15;
    if(this.getDessert() === "none")
      percent += 12;

    percent -= 6 * parseInt(this.getDay());

    return percent;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={coffin} className="App-logo" alt="logo" />
      <br />
      <div className="Container"> 
        Welcome to Finale!
      <br/>
        Final Grade: {this.getResult()}%
      <br/>
        Preferred Wakeup Time: {this.getTime()}
      <br/>
        Preferred # of Lazy Days: {this.getDay()}
      <br/>
        Preferred Breakfast: {this.getBreakfast()}
      <br/>
        Preferred Lunch: {this.getLunch()}
      <br/>
        Preferred Dinner: {this.getDinner()}
      <br/>
        Preferred Dessert: {this.getDessert()}
      <br/>
      </div>
        </header>
      </div>
    );
  }
}

export default Finale;
