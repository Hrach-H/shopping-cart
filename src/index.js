import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './styles/index.css'

import { allReducers } from "./reducers/index";

import Homepage from './components/homepage'
import FirstPage from './components/first-page';
import SecondPage from './components/second-page';
import Cart from './components/cart'

export const store = createStore(allReducers);

class App extends Component {
    render() {
        return (
                <div>
                    <h1> Shopping cart test app </h1>
                    <ul>
                        <li>
                            <div className="nav">
                                <Link to='/'> Homepage </Link>
                                <Link to='/firstPage'> Check out our products </Link>
                            </div>
                        </li>
                        <li>
                            <Cart />
                        </li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={Homepage} />
                    <Route path="/firstPage" component={FirstPage} />
                    <Route path="/secondPage" component={SecondPage} />
                </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);