import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {name, img, price,seller,ratings} = props.product;
    return (
        <div className='product'>
            <img src= {img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button onClick={()=> props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;