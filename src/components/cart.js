import React, { Component } from 'react';
import { connect } from 'react-redux';


class Cart extends Component {
    reduceCart(arr) {
        return arr.reduce((acc, curr) => {
            return acc += curr.quantity
        }, 0)
    }

    render() {
        return (
            <div className="cart">
                {this.reduceCart(this.props.cart)}
            </div>
        );
    }
}

Cart = connect((state) => ({
    cart: state.cart
}))(Cart);

export default Cart;