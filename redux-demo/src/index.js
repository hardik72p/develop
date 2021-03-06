import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import store from "./store";
import App from './App';
import * as serviceWorker from './serviceWorker';


const globalStore=store({});

ReactDOM.render(
  <Provider store={globalStore}>
    <Router>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
