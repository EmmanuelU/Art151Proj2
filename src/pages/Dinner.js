import React, { Component } from 'react';
import dinner from './../assets/dinner.svg';
import queryString from 'query-string';

class Dinner extends Component {
  constructor(props) {
    super();
    this.state = {
      urlParams: queryString.parse(props.location.search),
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-dinner">

          <img src={dinner} className="App-logo" alt="logo" />
      <br />
      <div className="Container"> 
        Welcome to dinner!
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
        <a href={"#dessert" + this.props.location.search + "&dinner=none"}><button>Skip Dinner</button></a>
      </div>
        </header>
        <h3>
        Dinner usually refers to what is in many
        <br /> Western cultures the largest and 
        <br />most formal meal of the day, which some 
        <br />Westerners eat in the evening. 
        <br />Historically the largest meal used 
        <br />to be eaten around midday, and called dinner.
        <br />In Western cultures, especially among the elite,
        <br />it gradually migrated later in the day over 
        <br />the 16th to 19th centuries.
        <br />However, the word "dinner" can have different
        <br /> meanings depending on culture, and may mean 
        <br />a meal of any size eaten at any time of day.
        <br />In particular, it is still sometimes used for 
        <br />a meal at noon or in the early afternoon on 
        <br />special occasions, such as a Christmas dinner.
        <br />In hot climates, people have always tended to 
        <br />eat the main meal in the evening, 
        <br />after the temperature has fallen.
        </h3>
      </div>
    );
  }
}

export default Dinner;
