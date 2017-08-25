import React, { Component } from 'react';
import { connect } from 'react-redux';


class Cart extends Component {
    render() {
        return (
            <div className="cart">
                {this.props.cart.length}
            </div>
        );
    }
}

Cart = connect((state) => ({
    cart: state.cart
}))(Cart);

export default Cart;