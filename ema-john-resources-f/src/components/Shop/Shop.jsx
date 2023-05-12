import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);

   useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
   },[]);

   useEffect(()=>{
    const storedCart = getShoppingCart();
    let savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    setCart(savedCart)
   },[products])

   const handleAddToCart = (selectedProduct)=>{
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if(!exists){
        selectedProduct.quantity = 1 ;
        newCart = [...cart, selectedProduct];
    }
    else{
        const rest = cart.filter(product => product.id !== selectedProduct);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists]
    }
    setCart(newCart);
    addToDb(selectedProduct.id)
   }

    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id} product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                 <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;