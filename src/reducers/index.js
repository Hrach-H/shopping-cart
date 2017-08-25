import { combineReducers } from 'redux';
import products from './products';
import cart from './cart'

export const allReducers = combineReducers({
    products,
    cart
});