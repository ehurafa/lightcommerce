import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id);

            if (productIsAlreadyInCart) {
                return {
                    ...state,
                    products: state.products.map((product) => product.id === action.payload.id
                        ? { ...product, quantify: product.quantify + 1}
                        : product
                    )
                }
            }

            return {
                ...state,
                products: [...state.products, { ...action.payload, quantify: 1 }]
            }
        default:
            return state;
    }

}

export default cartReducer;