import React, { Component } from 'react';
import '../styles/index.css';

import { addToCart } from "../actions";
import { store } from '../index';
import { connect } from 'react-redux';

class Product extends Component {

    addToCart() {
        store.dispatch(addToCart({
            id: this.props.id,
            name: this.props.name,
            price: this.props.price,
            description: this.props.description,
            availableQuantity: this.props.availableQuantity,
            url: this.props.url,
            quantity: this.props.cart[this.props.id] ?
                (this.props.cart[this.props.id].quantity < this.props.availableQuantity ? this.props.cart[this.props.id].quantity+1 : this.props.cart[this.props.id].quantity) : 1
        }));
    }

    render() {
        return (
            <ul className="product">
                <li> <img src={this.props.url} alt={this.props.name} /> </li>
                <li> <strong> {this.props.name} </strong> </li>
                <li> Price: {this.props.price} </li>
                <li> Available quantity: {this.props.availableQuantity - ((this.props.cart[this.props.id] && this.props.cart[this.props.id].quantity) || 0)} </li>
                <li> Description: {this.props.description} </li>
                <li>
                    <button onClick={this.addToCart.bind(this)}> Add to cart </button>
                </li>
            </ul>);}
}

Product = connect( state => ({cart: state.cartReducer}) )(Product);

export default Product
