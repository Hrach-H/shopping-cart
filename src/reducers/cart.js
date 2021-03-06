
export default function(state={}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return Object.assign({}, state, {[action.payload.id]: action.payload});
        case 'RESET_CART':
            return Object.assign({}, state = {});
        default:
            return state;
    }
}

