import { combineReducers } from 'redux';
import productsReducer from './products';
import cart from './cart'

export const allReducers = combineReducers({
    productsReducer,
    cart
});