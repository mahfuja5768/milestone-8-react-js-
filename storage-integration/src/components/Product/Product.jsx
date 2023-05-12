import React from 'react';
import './Product.css'
import { addToLs, removeFromLs } from '../utilities/Storage';


const addToCart = (id)=>{
    // console.log(id);
    addToLs(id);
}

const removeFromCart =(id)=>{
    removeFromLs(id);
}

const Product = (props) => {
    const {price, name, id} = props.product;
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <h3>Only for: ${price}</h3>
            <p>It has id: {id}</p>
            <div className='aside'>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove from cart</button>
            </div>
        </div>
    );
};

export default Product;