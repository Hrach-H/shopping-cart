import React, { Component } from 'react';
import { connect } from 'react-redux';

class secondPage extends Component {

    renderCartContents() {
       return Object.keys(this.props.cart).map( (order) => {
           return <li key={order}>You have ordered {this.props.cart[order].quantity} unit(s) of {this.props.cart[order].name}</li>
       } )
    }

    renderTotalPrice() {
        return Object.keys(this.props.cart).length &&
            Object.keys(this.props.cart).map( (order) => this.props.cart[order].quantity * this.props.cart[order].price).reduce((acc, curr) => acc += curr);
    }

    render() {
        return (
            <div>
                <h2>Your shopping cart contents</h2>
                <ul>
                    {(Object.keys(this.props.cart).length && this.renderCartContents()) || "You haven't ordered yet"}
                </ul>
                <p><strong>Price total:</strong> ${this.renderTotalPrice()}</p>
            </div>
        );
    }
}

secondPage = connect( (state) => ({ cart: state.cartReducer}) )(secondPage);

export default secondPage;