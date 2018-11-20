const defaultState = {
    discount: 0,
    products: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_DISCOUNT':
           return {
               ...state,
               discount: action.discount
           };
        case 'ADD_PRODUCT':
           return {
               ...state,
               products: [
                   ...state.products,
                   action.product
               ]
           };
        case 'SET_PRODUCT':
           return {
               ...state,
               products: [
                   ...action.products
               ]
           };
        default:
            return state
    }
}