import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart'

export const allReducers = combineReducers({
    productsReducer,
    cartReducer
});