import React, { Component } from 'react';
import { connect } from 'react-redux';


class Cart extends Component {
    render() {
        return (
            <div className="cart">
                {this.props.cart.reduce((acc, curr) => {
                    return acc += curr.quantity
                }, 0)}
            </div>
        );
    }
}

Cart = connect((state) => ({
    cart: state.cart
}))(Cart);

export default Cart;