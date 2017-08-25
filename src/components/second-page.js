import React, { Component } from 'react';
import { connect } from 'react-redux';

class secondPage extends Component {
    renderContents() {
        if (this.props.cart.reduce((acc, curr) => {
            return acc += curr.quantity
        }, 0) > 0 ) {
            return this.props.cart.map( (item) => {
                if (item.quantity > 0) {
                    return <li key={item.id}> You've ordered {item.quantity} {item.quantity > 0 ? item.name.toLowerCase()+'s' : item.name.toLowerCase()} - ${item.quantity * item.price} </li>;
                }
            } );
        } else {
            return <li> You haven't ordered yet :(</li>
        }
    }

    totalPrice() {
        const totalPrice = this.props.cart.reduce( (acc, curr) => {
            return acc += curr.price * curr.quantity;
        }, 0 );
        if (totalPrice > 0) return <p><strong>Total: ${totalPrice}</strong></p>
    }

    render() {
        return (
            <div>
                <h2>Your shopping cart contents</h2>
                <ul>
                    {this.renderContents()}
                </ul>
                {this.totalPrice()}
            </div>
        );
    }
}

secondPage = connect( (state) => ({ cart: state.cart}) )(secondPage);

export default secondPage;