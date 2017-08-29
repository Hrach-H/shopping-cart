import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchRequest, fetchRequestSuccess} from "../actions";

import Product from './product'


class firstPage extends Component {
    renderItems() {
        return this.props.products.map( (product) => {
            return <Product key={product.id} {...product}/>;
        } )
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div>
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
        return fetch('https://59a11ee1c89deb0011c337d5.mockapi.io/products')
            .then(response => response.json())
            .then(result => dispatch(fetchRequestSuccess(result)));
    }
}


firstPage = connect(mapStateToProps, {fetchProducts})(firstPage);

export default firstPage;