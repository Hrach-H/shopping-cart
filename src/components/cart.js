import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Cart extends Component {
    reduceCart(orders) {
        let items = 0;
        for (let order in orders) {
            items += orders[order];
        }
        return items;
    }

    render() {
        return (
            <div className="cart">
                <p> Items in your <Link to="/secondPage">cart</Link>: {this.reduceCart(this.props.cart)}</p>
            </div>
        );
    }
}

Cart = connect( (state) => ( {cart: state.cartReducer} ) )(Cart);

export default Cart;