import React, { Component } from 'react';
import { connect } from 'react-redux';

class secondPage extends Component {
    renderContents() {
        if (this.props.cart.reduce((acc, curr) => {
            return acc += curr.quantity
        }, 0) > 0 ) {
            return this.props.cart.map( (item) => {
                return <li key={item.id}> You've ordered {item.quantity} {item.name} </li>
            } );
        } else {
            return <li> You haven't ordered yet :(</li>
        }
    }

    render() {
        return (
            <div>
                <h2>Your shopping cart contents</h2>
                <ul>
                    {this.renderContents()}
                </ul>
            </div>
        );
    }
}

secondPage = connect( (state) => ({ cart: state.cart}) )(secondPage);

export default secondPage;