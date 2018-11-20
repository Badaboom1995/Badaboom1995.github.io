import React from 'react';
import { connect } from 'react-redux';
import { setDiscount, addProduct } from '../actions/shop';

class AddProduct extends React.Component {
    state = {
        productName: '',
        productPrice: ''
    }
    addProduct = (name, price) => {
        this.props.dispatch(addProduct(name, price));
        setTimeout(() => {
            this.props.setDiscounts(this.props.shop.products, this.props.shop.discount);
        }, 0)
    }
    onProductNameChange = (e) => {
        e.persist();
        this.setState(() => ({
            productName: e.target.value
        }))
    }
    onProductPriceChange = (e) => {
        e.persist();
        if (typeof +e.target.value == 'number' && !isNaN(+e.target.value)){
            this.setState(() => ({
                productPrice: e.target.value
            }))
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        e.persist();
        this.addProduct(this.state.productName, this.state.productPrice);
    }
    render() {
        return (
            <div className='add-product'>
                <p className='title'>Добавить продукт</p>
                <form className='add-product__form'>
                    <input className='add-product__input' type="text" value={this.state.productName} onChange = {this.onProductNameChange} ref={(name) => {this.name = name}}/>
                    <input className='add-product__input' type="text" value={this.state.productPrice} onChange = {this.onProductPriceChange} ref={(price) => {this.name = price}}/>
                    <button className='button' onClick = {this.onFormSubmit}>Добавить</button>
                </form>
            </div>
            
        )
    }
}


const mapStateToProps = state => ({
    shop: state
});

export default connect(mapStateToProps)(AddProduct);
