import React from 'react';

import classes from './Product.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className={classes.product}>
            <div className={classes.image}>
                <img src={img} alt=""/>
            </div>
            <div className={classes.content}>
                <h4>{name}</h4>
                <br />
                <p><small>By {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in Stock- order soon</small></p>
                <button
                    className={classes.add_to_cart}
                    onClick={()=>props.handleAddProduct(props.product)}
                >  Add to Cart</button>
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                 
            </div>
      </div>
    )
}


export default Product;