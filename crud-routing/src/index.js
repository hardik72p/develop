import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Listing from './Listing';
import * as serviceWorker from './serviceWorker';
import Details from './Details';

const routing1 = (
    <BrowserRouter>
        <div>
            {/* <Link to="/home" >Home</Link><br/> */}
            <Link to="/listing">List</Link><br/>
            <Link to="/details" >Details</Link><br/>

            <Switch>
                {/* <Route exact path="/home" component={App}></Route>   */}
                <Route path="/listing"  component={Listing}></Route>
                <Route path="/details" component={Details}></Route>
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routing1, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
