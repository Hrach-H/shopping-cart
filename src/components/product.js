import React, { Component } from 'react';
import '../styles/index.css';

import { addToCart } from "../actions";
import { store } from '../index';
import { connect } from 'react-redux';

class Product extends Component {

    addToCart() {
        store.dispatch(addToCart({
            id: this.props._id,
            price: this.props.price,
            name: this.props.name,
            availableQuantity: this.props.availableQuantity,
            quantity: this.props.cart[this.props._id] ?
                (this.props.cart[this.props._id].quantity < this.props.availableQuantity ? this.props.cart[this.props._id].quantity+1 : this.props.cart[this.props._id].quantity) : 1
        }));
    }

    render() {
        return (
            <ul className="product">
                <li> <img src={this.props.url} alt={this.props.name} /> </li>
                <li> <strong> {this.props.name} </strong> </li>
                <li> Price: {this.props.price} </li>
                <li> Available quantity: {this.props.availableQuantity - ((this.props.cart[this.props._id] && this.props.cart[this.props._id].quantity) || 0)} </li>
                <li> Description: {this.props.description} </li>
                <li>
                    <button onClick={this.addToCart.bind(this)}> Add to cart </button>
                </li>
            </ul>);}
}

Product = connect( state => ({cart: state.cartReducer}) )(Product);

export default Product
