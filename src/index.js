import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './styles/main.css'

import { allReducers } from "./reducers/index";

import Homepage from './components/homepage'
import FirstPage from './components/first-page';
import SecondPage from './components/second-page';
import Cart from './components/cart'
import Registration from "./components/registration";
import Login from './components/login';
import SnackNotifications from './components/notifications';

export const store = createStore(allReducers, applyMiddleware(thunk));

class App extends Component {
    handleLogout = () => {
        fetch('/api/logout', {credentials: 'include'})
            .then(response => {
                if (response.status < 400) {
                    return response.json();
                } else {
                    throw new Error("You are not logged in");
                }
            })
            .then(result => {
                console.log(result);
                (this.props.history.location.pathname !== '/') && this.props.history.push('/')
            })
            .catch(err => console.warn(err));
    };

    render() {
        return (
                <div>
                    <SnackNotifications />
                    <h1> Shopping cart test app </h1>
                    <ul>
                        <li>
                            <div className="nav">
                                <Link to='/'> HOMEPAGE </Link>
                                <Link to='/firstPage'> OUR PRODUCTS </Link>
                                <Link to='/registration'>REGISTRATION </Link>
                                <Link to='/login'>LOGIN</Link>
                                <button onClick={this.handleLogout}>LOGOUT</button>
                            </div>
                        </li>
                        <li>
                            <Cart />
                        </li>
                    </ul>
                    <hr />
                    <div className="routes">
                        <Route exact path="/" component={Homepage} />
                        <Route path="/firstPage" component={FirstPage} />
                        <Route path="/secondPage" component={SecondPage} />
                        <Route path="/registration" component={Registration} />
                        <Route path="/login" component={Login} />
                    </div>
                </div>
        );
    }
}

App = withRouter(App);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);