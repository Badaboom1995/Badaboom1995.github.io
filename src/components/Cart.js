import React from 'react';
import { connect } from 'react-redux';
import { setDiscount, setProducts } from '../actions/shop'

class Cart extends React.Component {
    onDiscountChange = (e) => {
        e.persist();
        console.log(this.props.shop)
        if (typeof + e.target.value == 'number' && !isNaN(+e.target.value)){
            this.props.dispatch(setDiscount(e.target.value))
        }   
    }
    
    render() {
        return (
            <div className='cart'>
                <p className="title">Корзина</p>
                <table className='cart__products-table'>
                    <tbody>
                        <tr className='cart__table-row cart__table-row--header'>
                            <td className='cart__table-cell cart__table-cell--header'>Продукт</td>
                            <td className='cart__table-cell cart__table-cell--header'>Цена</td>
                            <td className='cart__table-cell cart__table-cell--header'>Цена со скидкой</td>
                        </tr>
                        {this.props.shop.products.map((product, index) => {
                            return (
                                <tr className = 'cart__table-row' key = {index}>
                                    <td className='cart__table-cell'>{product.name}</td>
                                    <td className='cart__table-cell'>{product.price}</td>
                                    <td className='cart__table-cell'>{product.priceWithDiscount}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <p className='cart__discount'>
                    Применить скидку
                    <input className='cart__input' type="text" value = {this.props.shop.discount} onChange = {this.onDiscountChange}/>
                    рублей
                    <button className='button' onClick = {() => {this.props.setDiscounts(this.props.shop.products, this.props.shop.discount)}}>Применить</button>
                </p>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    shop: state
});

export default connect(mapStateToProps)(Cart);
