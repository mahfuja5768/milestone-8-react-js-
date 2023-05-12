import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
    }
    
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h4>Selected Items: {cart.length}</h4>
            <h4>Total Price: ${total}</h4>
            <h4>Total Shipping Charge: ${shipping}</h4>
            <h4>Tax: {tax}</h4>
            <h4>Grand Total: ${grandTotal}</h4>
          <button className='btn-1'>
            <p>Clear Cart</p> 
            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button> 
            <br />
          <button className='btn-2'>
            <p>Review Order</p>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Cart;