import React from 'react';
import Cart from './Cart';
import AddProduct from './AddProduct';
import { connect } from 'react-redux';
import { setProducts } from '../actions/shop';

class App extends React.Component{
    getMostExpensiveProductIndex = (products) => {
        let max = parseInt(products[0].price)
        let maxIndex = 0;
        products.forEach((item, index) => {
                const price = parseInt(item.price)
                if (price > max) {
                    max = price;
                    maxIndex = index;
                }
        })
        return maxIndex
    }
    getPersonalDiscount = (price, discount, onePercentOfSum) => {
        return discount * (price / onePercentOfSum / 100) < 1 ? 0 : Math.round(discount * (price / onePercentOfSum / 100))
    }
    setDiscounts = (products, discount) => { 
        console.log(products);
        const sumOfPrices = products.reduce((sum, currentValue) => {
             return sum + parseInt(currentValue.price)
        }, 0)
        const onePercentOfSum = sumOfPrices/100;
        const productsWithDiscounts = products.map((item) => {
            const priceWithDiscount = item.price - this.getPersonalDiscount(item.price, discount, onePercentOfSum);
            return {
                ...item,
                priceWithDiscount: priceWithDiscount > 0 ? priceWithDiscount : 0
            } 
        })
        const addedProductsDiscount = products.reduce((sum, currentValue) => {
             return sum + this.getPersonalDiscount(currentValue.price, discount, onePercentOfSum)
        }, 0)
        if (addedProductsDiscount != discount){
            const diff = discount - addedProductsDiscount;
            const MostExpensiveProductWithDiscount = productsWithDiscounts[this.getMostExpensiveProductIndex(products)].priceWithDiscount - diff;
            productsWithDiscounts[this.getMostExpensiveProductIndex(products)].priceWithDiscount = MostExpensiveProductWithDiscount > 0 ? MostExpensiveProductWithDiscount : 0
        }
        this.props.dispatch(setProducts(productsWithDiscounts))
    }

    render(){
        return(
             <div className='wrapper'>
                <AddProduct setDiscounts = {this.setDiscounts}/>
                <Cart setDiscounts = {this.setDiscounts}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    shop: state
});

export default connect(mapStateToProps)(App);
