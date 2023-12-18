import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => {
    console.log('a ', payload)
    return {
        type: CartActionTypes.ADD_PRODUCT,
        payload
    }
}