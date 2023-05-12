import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';

/* fake data create  */
const Products = () => {
    // const products =[                          /* fake data create  by myself*/
    //     {id:1, name:'Blash', price: 500},
    //     {id:2, name:'Highlighter', price: 300},
    //     {id:3, name:'Foundation', price: 900},
    //     {id:4, name:'Eyelashes', price: 200}
    // ]
    // const products =[                            /* fake data create  by Json Generator*/
    //     {
    //       "id": "6458bde8a7c33fea7fd16d27",
    //       "price": 99,
    //       "name": "Heidi Walker"
    //     },
    //     {
    //       "id": "6458bde8ab398a5826e03fcd",
    //       "price": 155,
    //       "name": "Bennett Melendez"
    //     },
    //     {
    //       "id": "6458bde85ea842a4e4b3eb65",
    //       "price": 114,
    //       "name": "Janette Barrett"
    //     },
    //     {
    //       "id": "6458bde81a864f113435e101",
    //       "price": 293,
    //       "name": "Rosalinda Sykes"
    //     },
    //     {
    //       "id": "6458bde82919262e897892c0",
    //       "price": 400,
    //       "name": "Gracie Dillon"
    //     }
    //   ]

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    const deleteFromCart =()=>{
        localStorage.clear()
    }

    return (
        <div>
            <h1>Choose your products:</h1>
            <h2>Your cost is: {}</h2>
            <div className='products'>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
            </div>
            <button className='delete-btn' onClick={deleteFromCart}>Delete Stored Data</button>
        </div>
    );
};

export default Products;