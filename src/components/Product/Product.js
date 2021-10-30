import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const { img, name, price, seller, stock } = props.product
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className="main-btn" onClick={() => props.handleAddCart(props.product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;