import React, { Component } from 'react';
import '../styles/index.css';

import { addToCart } from "../actions";
import { store } from '../index';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            quantity: 1
        }
    }

    addToCart() {
        if (this.state.quantity <= this.props.availableQuantity) {
            this.setState((prevState) => ({
                quantity: ++prevState.quantity
            }));
            store.dispatch(addToCart({
                id: this.props.id,
                quantity: this.state.quantity
            }));
        }
    };

    render() {
        return (
            <ul className="product">
                <li> <img src={this.props.url} alt={this.props.name} /> </li>
                <li> <strong> {this.props.name} </strong> </li>
                <li> Price: {this.props.price} </li>
                <li> Available quantity: {this.props.availableQuantity} </li>
                <li> Description: {this.props.description} </li>
                <li>
                    <button onClick={this.addToCart.bind(this)}> Add to cart </button>
                </li>
            </ul>
        );
    }
}


export default Product
