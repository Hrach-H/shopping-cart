import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchRequest, fetchRequestSuccess} from "../actions";
import Notifications from 'react-notification-system-redux';

import Product from './product'

/* ---------- NOTIFICATION OPTIONS ---------- */

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

const errorNotificationOpts = msg => ({
    // uid: 'once-please', // you can specify your own uid if required
    title: 'Error',
    message: msg,
    position: 'tr',
    autoDismiss: 2,
    action: {
        label: 'OK',
    }
});

/* ---------- NOTIFICATION OPTIONS END ---------- */


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
                <button className='update-button' onClick={this.props.fetchProducts}>Update product selection</button>
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
        return fetch('/api/products', {credentials: 'include'})
            .then(response => response.json())
            .then(result => {
                if (result.message) {
                    dispatch(Notifications.error(errorNotificationOpts(result.message)));
                } else {
                    dispatch(fetchRequestSuccess(result));
                    dispatch(Notifications.success(successNotificationOpts));
                }
            })
            .catch(err => console.log(err))
    }
}


firstPage = connect(mapStateToProps, {fetchProducts})(firstPage);

export default firstPage;