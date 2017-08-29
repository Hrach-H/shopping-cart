
export default function(state={}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                [action.payload.id]: action.payload.quantity
            };
        default:
            return state;
    }
}

