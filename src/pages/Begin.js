import React, { Component } from 'react';
import Sun from './../assets/sun.svg';

class Begin extends Component {
  constructor(props) {
    super(props);
    this.snoozeHandler = this.snoozeHandler.bind(this);
    this.state = { time: 6, meridian: "AM"}
  }

  snoozeHandler() {
    if(this.state.time === 11)
    {
      this.setState({
        time: 12,
        meridian: "PM",
      });
    }
    else if(this.state.time === 23)
    {
      this.setState({
        time: 1,
        meridian: "AM",
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
      <div className="App">
        <header className="App-header">

          <img src={Sun} className="App-logo" alt="logo" />
          <br />
          <div className="Container">
            It is {this.state.time > 12 ? (this.state.time % 12) : (this.state.time)}{this.state.meridian}
            <br />
            <button onClick={() => this.snoozeHandler()}> Click Me to Snooze</button>
            <br />
            <a href={"#wakeup?time=" + this.state.time + "&meridian=" + this.state.meridian}><button> Click Me to Wake Up</button></a>
          </div>
        </header>
      </div>
    );
  }
}

export default Begin;
