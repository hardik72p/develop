import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyTable from './MyTable.js';
import * as serviceWorker from './serviceWorker';
import CreditNumber from './CreditNumber';
import CardNumber from './CardNumber.js';
import MyTableAdzone from './MyTableAdzone';

ReactDOM.render(<MyTableAdzone/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
