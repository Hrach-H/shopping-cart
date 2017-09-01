import React, { Component } from 'react';
import { connect } from 'react-redux';

class secondPage extends Component {

    render() {
        return (
            <div>
                <h2>Your shopping cart contents</h2>
                <ul>

                </ul>

            </div>
        );
    }
}

secondPage = connect( (state) => ({ cart: state.cart}) )(secondPage);

export default secondPage;