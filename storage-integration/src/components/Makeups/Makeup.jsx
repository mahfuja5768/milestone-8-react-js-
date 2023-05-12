import React from 'react';
import { add, getTotal,  } from '../utilities/calculate';

const products =[
    {id:1, name:'Blash', price: 500},
    {id:2, name:'Highlighter', price: 300},
    {id:3, name:'Foundation', price: 900},
    {id:4, name:'Eyelashes', price: 200}
]

const totalPrice = getTotal(products);

// const price1 = 20;
// const price2 = 30;
// const totalPrice = add(price1, price2);



const Makeup = () => {

    return (
        <div>
            <h1>Welcome to my venity</h1>
            <h3>Total Price: {totalPrice}</h3>
            {
               products.map(product => <Product key={product.id} name={product.name}  price={product.price}></Product>) 
            }
        </div>
    );
};

function Product (props){
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Price: {props.price}</h2>
        </div>
    )
}

export default Makeup;