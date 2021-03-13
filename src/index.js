import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Begin from './pages/Begin.js';
import Wakeup from './pages/Wakeup.js';
import Breakfast from './pages/Breakfast.js';
import Lunch from './pages/Lunch.js';
import Dinner from './pages/Dinner.js';
import Dessert from './pages/Dessert.js';
import Finale from './pages/Finale.js';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Route,
} from "react-router-dom";

ReactDOM.render(<HashRouter basename='/'>
        <Route path="/finale" component={Finale}/>
        <Route path="/dessert" component={Dessert}/>
        <Route path="/dinner" component={Dinner}/>
        <Route path="/lunch" component={Lunch}/>
        <Route path="/breakfast" component={Breakfast}/>
        <Route path="/wakeup" component={Wakeup}/>
        <Route path="/begin" component={Begin}/>
        <Route exact path="" path="/" component={App}/>
</HashRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
