import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => {
    return {
        type: CartActionTypes.ADD_PRODUCT,
        payload
    }
};

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
});

export const moreProductFromCart = (payload) => ({
    type: CartActionTypes.MORE_PRODUCT,
    payload,
});

export const minusProductFromCart = (payload) => ({
    type: CartActionTypes.MINUS_PRODUCT,
    payload,
});