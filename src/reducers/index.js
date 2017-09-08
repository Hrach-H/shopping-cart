import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart'
import { reducer as formReducer} from 'redux-form';

export const allReducers = combineReducers({
    productsReducer,
    cartReducer,
    form: formReducer
});