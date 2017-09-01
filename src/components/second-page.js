import React, { Component } from 'react';
import { connect } from 'react-redux';

class secondPage extends Component {

    renderCartContents() {
       return Object.keys(this.props.cart).map( (order) => {
           return <li key={order}>You have ordered {this.props.cart[order].quantity} unit(s) of {this.props.cart[order].name}</li>
       } )
    }

    render() {
        return (
            <div>
                <h2>Your shopping cart contents</h2>
                <ul>
                    {(Object.keys(this.props.cart).length > 1 && this.renderCartContents()) || "You haven't ordered yet"}
                </ul>

            </div>
        );
    }
}

secondPage = connect( (state) => ({ cart: state.cartReducer}) )(secondPage);

export default secondPage;