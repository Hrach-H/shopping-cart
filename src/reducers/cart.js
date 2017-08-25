const initialState = [
    {
        id: 1,
        name: 'Oatmeal',
        price: 5,
        availableQuantity: 10,
        quantity: 0
    },
    {
        id: 2,
        name: 'Peanut Butter',
        price: 7,
        availableQuantity: 10,
        quantity: 0
    },
    {
        id: 3,
        name: 'Nutella',
        price: 3,
        availableQuantity: 10,
        quantity: 0
    }
];

export default function(state=initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return state.map( (product) => {
                if (product.id === action.payload.id) {
                    if (product.availableQuantity > product.quantity) {
                        product.quantity++
                    }
                }
                return product;
            });
        default:
            return state;
    }
}

