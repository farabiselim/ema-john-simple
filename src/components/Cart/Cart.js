import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shiping = 0;
    if(total > 35){
        shiping = 0;
    }
    else if(total > 15){
        shiping = 4.99;
    }
    else if(total > 0){
        shiping = 12.99;
    }
    const tax = (total / 8).toFixed(2);
    const grandTotal = (total + shiping + Number(tax)).toFixed(2)
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision) 
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order: {cart.length}</p>
            <p><small>Product Price: {formatNumber(total)}</small></p>
            <p><small>Tax + Vat : {tax} </small></p>
            <p><small>Shiping Cost: {shiping}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;