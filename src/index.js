import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { storeUser } from "./actions";
import { connect } from 'react-redux';

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
                store.dispatch(storeUser({isLoggedIn: false}));
                (this.props.history.location.pathname !== '/') && this.props.history.push('/');
            })
            .catch(err => console.warn(err));
    };

    componentWillMount() {
        fetch('/api', {credentials: 'include'})
            .then(response => {
                if (response.status !== 401) {
                    return response.json();
                } else {
                    throw new Error('User not authorized');
                }
            })
            .then(user => store.dispatch(storeUser(user)))
            .catch(err => console.warn(err));
    }


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
                                {this.props.user.isLoggedIn ? <a onClick={this.handleLogout}>LOGOUT</a> : <Link to='/login'>LOGIN</Link>}
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

//App = connect( (state) => ({user: state.userReducer}))(App);
App = withRouter(connect( (state) => ({user: state.userReducer}))(App));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);