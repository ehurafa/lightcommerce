import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const productIsAlreadyInCart = (products, newId)  => {
    console.log(products)
    console.log( newId)
    return   products.some((product) => product.id === newId);
    
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:

            if (productIsAlreadyInCart(state.products, action.payload.id)) {
                return {
                    ...state,
                    products: state.products.map((product) => product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1}
                        : product
                    )
                }
            }

            return {
                ...state,
                products: [...state.products, { ...action.payload, quantity: 1 }]
            }
        
        case CartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        
        case CartActionTypes.MORE_PRODUCT:
            if (productIsAlreadyInCart(state.products, action.payload)) {
                return {
                    ...state,
                    products: state.products.map((product) => product.id === action.payload
                        ? { ...product, quantity: product.quantity + 1}
                        : product
                    )
                }
            }

            return {
                ...state,
                products: [...state.products, { ...action.payload, quantity: 20 }]
            }
        
        case CartActionTypes.MINUS_PRODUCT:

            const quantify = state.products.map((product) => product.quantify > 1)

            if (productIsAlreadyInCart(state.products, action.payload)) {
                if (quantify) {
                    return {
                        ...state,
                        products: state.products.map((product) => product.id === action.payload
                            ? { ...product, quantity: product.quantity - 1}
                            : product
                        )
                    }
                }
                
            }
            return {
                ...state,
                products: [...state.products]
            }

        default:
            return state;
    }

}

export default cartReducer;