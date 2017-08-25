const initialState = [
    {
        id: 1,
        name: 'Oatmeal',
        price: 5,
        availableQuantity: 10,
        description: 'Delicious!',
        url: 'https://target.scene7.com/is/image/Target/13331321?wid=520&hei=520&fmt=pjpeg'
    },
    {
        id: 2,
        name: 'Peanut Butter',
        price: 7,
        availableQuantity: 10,
        description: 'Delicious!',
        url: 'https://images.heb.com/is/image/HEBGrocery/001657047'
    },
    {
        id: 3,
        name: 'Nutella',
        price: 3,
        availableQuantity: 10,
        description: 'Delicious!',
        url: 'https://images-na.ssl-images-amazon.com/images/I/819UCJYFG2L._SY450_.jpg'
    }
];
let id = initialState.length+1;

export default function(state=initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return state.map( (product) => {
                if (product.name === action.payload.name) {
                    product.availableQuantity--;
                }
                return product;
            } );
        default:
            return state;
    }
};