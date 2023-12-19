import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => {
    return {
        type: CartActionTypes.ADD_PRODUCT,
        payload
    }
}