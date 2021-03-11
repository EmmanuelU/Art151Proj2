import React, { Component } from 'react';
import Sun from './assets/sun.svg';

class Begin extends Component {
  constructor(props) {
    super(props);
    this.snoozeHandler = this.snoozeHandler.bind(this);
    this.state = { time: 6 }
  }

  snoozeHandler() {
    this.setState({
      time: this.state.time + 1,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Sun} className="App-logo" alt="logo" />
          <br />
          <div className="Container">
            It is {this.state.time > 12 ? (this.state.time % 12) : (this.state.time)}
            <br />
            <button onClick={() => this.snoozeHandler()}> Click Me to Snooze</button>
            <br />
            <a href="#wakeup"><button> Click Me to Wake Up</button></a>
          </div>
        </header>
      </div>
    );
  }
}

export default Begin;
