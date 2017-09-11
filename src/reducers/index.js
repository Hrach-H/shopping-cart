import { combineReducers } from 'redux';
import productsReducer from './products';
import cartReducer from './cart'
import { reducer as formReducer} from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';

export const allReducers = combineReducers({
    productsReducer,
    cartReducer,
    form: formReducer,
    notifications
});