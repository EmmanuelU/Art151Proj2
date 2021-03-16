import React, { Component } from 'react';
import Sun from './../assets/sun.svg';

class Begin extends Component {
  constructor(props) {
    super(props);
    this.snoozeHandler = this.snoozeHandler.bind(this);
    this.state = { time: 6, day: 0}
  }

  getTime(time)
  {
    return time === 0 ? "12AM" : (time > 11 ? (time > 12 ? (time % 12) : time) + "PM" : (time) + "AM")
  }

  snoozeHandler() {
    if(this.state.time === 12)
    {
      this.setState({
        time: this.state.time + 1,
      });
    }
    else if(this.state.time === 23)
    {
      this.setState({
        time: 0,
        day: this.state.day + 1,
      });
    }
    else
    {
      this.setState({
        time: this.state.time + 1,
      });
    }
  }

  render() {
    return (
      <div className="App App-begin">
        <header className="App-header">

          <img src={Sun} className="App-logo" alt="logo" />
          <br />
          <div className="Container">
            It is {this.getTime(this.state.time, this.state.meridian)}
            <br />
            <button onClick={() => this.snoozeHandler()}> Click Me to Snooze</button>
            <br />
            <a href={"#wakeup?time=" + this.state.time + "&day=" + this.state.day}><button> Click Me to Wake Up</button></a>
          </div>
        </header>
      </div>
    );
  }
}

export default Begin;
