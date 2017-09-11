import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchRequest, fetchRequestSuccess} from "../actions";
import Notifications from 'react-notification-system-redux';

import Product from './product'

const successNotificationOpts = {
    // uid: 'once-please', // you can specify your own uid if required
    title: 'Load successful',
    message: 'Products have been loaded',
    position: 'tr',
    autoDismiss: 2,
    action: {
        label: 'OK',
    }
};

const errorNotificationOpts = {
    // uid: 'once-please', // you can specify your own uid if required
    title: 'Connection Error',
    message: 'No connection to server',
    position: 'tr',
    autoDismiss: 2,
    action: {
        label: 'OK',
    }
};

const buttonStyle = {
    float: 'right',
    margin: '10px 10px',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    padding: '0.3em',
    borderRadius: '1em',
    verticalAlign: 'center',
    backgroundColor: 'green'
};


class firstPage extends Component {
    renderItems() {
        return this.props.products.map( (product) => {
            return <Product key={product._id} {...product}/>;
        } )
    }

    componentDidMount() {
        this.props.fetchProducts();
    }


    render() {
        return (
            <div>
                <button style={buttonStyle} onClick={this.props.fetchProducts}>Update product selection</button>
                {this.props.products && this.renderItems()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.productsReducer.products
    }
}

function fetchProducts() {
    return (dispatch) => {
        dispatch(fetchRequest());
        return fetch('http://localhost:4000/api/products')
            .then(response => response.json())
            .then(result => {
                dispatch(fetchRequestSuccess(result));
                dispatch(Notifications.success(successNotificationOpts));
            })
            .catch(() => dispatch(Notifications.error(errorNotificationOpts)))
    }
}


firstPage = connect(mapStateToProps, {fetchProducts})(firstPage);

export default firstPage;