
export default function(state={}, action) {
    switch (action.type) {
        case 'FETCH':
            return state;
        case 'FETCH_SUCCESS':
            return {...state, products: action.payload};
        default:
            return state;
    }
};