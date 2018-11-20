export const setDiscount = (discount) => ({
    type: 'SET_DISCOUNT',
    discount: discount
})
export const addProduct = (name, price) => ({
    type: 'ADD_PRODUCT',
    product: {
        name,
        price,
        priceWithDiscount: price
    }
})
export const setProducts = (products) => ({
    type: 'SET_PRODUCT',
    products 
})