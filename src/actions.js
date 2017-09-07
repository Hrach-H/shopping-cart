export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
};

export const fetchRequest = () => ({
    type: "FETCH"
});

export const fetchRequestSuccess = (products) => ({
    type: 'FETCH_SUCCESS',
    payload: products
});

export const resetCart = () => ({
    type: 'RESET_CART'
});