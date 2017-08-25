import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Cart extends Component {
    reduceCart(arr) {
        return arr.reduce((acc, curr) => {
            return acc += curr.quantity;
        }, 0)
    }

    render() {
        return (
            <div className="cart">
                <p> Items in your <Link to="/secondPage">cart</Link>: {this.reduceCart(this.props.cart)} </p>
            </div>
        );
    }
}

Cart = connect( (state) => ( {cart: state.cart} ) )(Cart);

export default Cart;