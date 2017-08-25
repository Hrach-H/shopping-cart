import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from './product'


class firstPage extends Component {
    renderItems() {
        return this.props.products.map( (product) => {
            return <Product key={product.id} {...product}/>
        } )
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

firstPage = connect(mapStateToProps)(firstPage);

export default firstPage;