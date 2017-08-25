const initialState = [
    {
        id: 1,
        name: 'Oatmeal',
        price: 5,
        quantity: 0
    },
    {
        id: 2,
        name: 'Peanut Butter',
        price: 7,
        quantity: 0
    },
    {
        id: 3,
        name: 'Nutella',
        price: 3,
        quantity: 0
    }
];

function reduce(state) {
    return state.map((product) => {
        return product;
    }).reduce((acc, curr) => {
        return acc += curr.quantity
    }, 0);
}

export default function(state=initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return state.map((product) => {
                if (product.id === action.payload.id) {
                    product.quantity++
                }
                return product;
            });
        default:
            return state;
    }
}

