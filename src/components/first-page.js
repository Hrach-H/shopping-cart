import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchRequest, fetchRequestSuccess} from "../actions";

import Product from './product'


class firstPage extends Component {
    renderItems() {
        return this.props.products.map( (product) => {
            return <Product key={product._id} {...product}/>;
        } )
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    componentWillReceiveProps() {
        this.props.fetchProducts()
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
        return fetch('http://localhost:4000/api/products')
            .then(response => response.json())
            .then(result => dispatch(fetchRequestSuccess(result)));
    }
}


firstPage = connect(mapStateToProps, {fetchProducts})(firstPage);

export default firstPage;